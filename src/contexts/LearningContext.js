import React from 'react'
import TokenService from '../services/token-service'
import LanguageAPIService from '../services/language-api-service'


//Null values for staging data
export const nullGuess = {
  value: '',
  touched: false
}

export const nullNextWord = {
  currentScore: 0,
  word: '',
  correct: 0,
  incorrect: 0,
  error: ''
}

export const nullGuessFeedback = {
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
  toggleShowFeedback: () => { },
  onSubmitGuess: () => { },
  displayFeedback: () => { }
})

export default LearningContext

export class LearningProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nextWord: nullNextWord,
      guess: nullGuess,
      guessFeedback: nullGuessFeedback,
      showFeedback: false,
      processWord: () => { },
      onGuessChange: () => { },
      setNextWord: () => { },
      setFeedback: () => { },
      toggleShowFeedback: () => { },
      onSubmitGuess: () => { },
      displayFeedback: () => { }
    }
  }

  //Requests next word and sets nextWord/guessFeedback state based on response
  processWord = () => {
    if (TokenService.hasAuthToken()) {
      LanguageAPIService.getNextWord()
        .then(word => {
          //Set word, return the rest of response to check if there's feedback
          this.setNextWord(word);
          console.log(word)
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

  toggleShowFeedback = (feedback) => {
    this.setState({
      showFeedback: !this.state.showFeedback
    })
  }

  onSubmitGuess = (event) => {
    event.preventDefault();

    let guess = { guess: this.state.guess.value };

    LanguageAPIService.submitGuess(guess)
      .then(feedback => {
        this.clearGuess();
        this.setFeedback(feedback);
        this.toggleShowFeedback();
        this.setNextWord(feedback);
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
    nextWord: this.state.nextWord,
    guess: this.state.guess,
    guessFeedback: this.state.guessFeedback,
    showFeedback: this.state.showFeedback,
    error: this.state.error,
    processWord: this.processWord,
    onGuessChange: this.onGuessChange,
    setNextWord: this.setNextWord,
    clearGuess: this.clearGuess,
    toggleShowFeedback: this.toggleShowFeedback,
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