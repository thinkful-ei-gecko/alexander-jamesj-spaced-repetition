import React from 'react'
import TokenService from '../services/token-service'
import LanguageAPIService from '../services/language-api-service'


//Null values for staging data
const nullGuess = {
  value: '',
  touched: false
}

const nullNextWord = {
  currentScore: 0,
  word: '',
  correct: 0,
  incorrect: 0,
  error: ''
}

const nullGuessFeedback = {
  answer: '',
  isCorrect: false
}

const LearningContext = React.createContext({
  nextWord: nullNextWord,
  guess: nullGuess,
  guessFeedback: nullGuessFeedback,
  showFeedback: false,
  processWord: () => { },
  onGuessChange: () => { },
  setNextWord: () => { },
  setFeedback: () => { },
  toggleDisplayFeedback: () => { },
  onSubmitGuess: () => { },
  displayFeedback: () => { }
})

export default LearningContext

export class LearningProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nextWord: nullNextWord,
      nextFeedback: nullGuessFeedback,
      showFeedback: false,
    }
  }

  //Requests next word and sets nextWord/guessFeedback state based on response
  processWord = () => {
    if (TokenService.hasAuthToken()) {
      LanguageAPIService.getNextWord()
        .then(word => {
          //Set word, return the rest of response to check if there's feedback
          this.setNextWord();
          return word
        })
        .then(feedback => {
          //If there's feedback, set feedback data and toggle feedback display.
          if (!!feedback.answer && !!feedback.isCorrect) {
            this.setFeedback();
            this.toggleFeedback();
          }
        })
        .catch(err => {
          this.setError(err)
        })
    }
  };

  //Checks if guess entered.
  onGuessChange = (event) => {
    this.setState({
      guess: {
        value: event.target.value,
        touched: true
      }
    })
  }

  setNextWord = (word) => {
    this.setState({
      nextWord: {
        word: word.nextWord,
        totalScore: word.totalScore,
        correct: word.wordCorrectCount,
        incorrect: word.wordIncorrectCount
      }
    });
  }

  setFeedback = (feedback) => {
    this.setState({
      guessFeedback: {
        answer: feedback.answer,
        isCorrect: feedback.isCorrect
      }
    })
  }

  toggleDisplayFeedback = (feedback) => {
    this.setState({
      showFeedback: !this.state.showFeedback
    })
  }

  onSubmitGuess = (event) => {
    event.preventDefault();

    let guess = { guess: this.state.guess.value };

    LanguageAPIService.submitGuess(guess)
      .then(res => {
        this.processWord();
      })
      .catch(err => {
        this.setError(err)
      })
  }

  clearGuess = () => {
    this.setState({
      guess: nullGuess
    })
  }

  setError = error => {
    this.setState({
      error
    })
  }

  clearError = () => {
    this.setState({
      error: null
    })
  }

  componentDidMount() {
    this.processWord()
  }

  render() {
    const value = {
      currentScore: this.state.currentScore,
      word: this.state.word,
      guess: this.state.guess,
      correct: this.state.correct,
      incorrect: this.state.incorrect,
      error: this.state.error,
      processWord: this.processWord,
      onGuessChange: this.onGuessChange,
      setNextWord: this.setNextWord,
      clearGuess: this.clearGuess,
      toggleDisplayFeedback: this.toggleDisplayFeedback,
      onSubmitGuess: this.onSubmitGuess,
      clearError: this.clearError
    }
    return (
      <LearningContext.Provider value={value} >
        {this.props.children}
      </LearningContext.Provider >
    )
  }
}