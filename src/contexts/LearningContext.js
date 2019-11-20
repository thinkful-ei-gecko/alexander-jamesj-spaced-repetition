import React from 'react'
import TokenService from '../services/token-service'
import LanguageAPIService from '../services/language-api-service'

const nullGuess = {
  value: '',
  touched: false
}

const LearningContext = React.createContext({
  currentScore: null,
  word: null,
  guess: nullGuess,
  correct: null,
  incorrect: null,
  error: null,
  processWord: () => { },
  onGuessChange: () => { },
  onSubmitGuess: () => { }
})

export default LearningContext

export class LearningProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentScore: null,
      word: null,
      guess: nullGuess,
      correct: null,
      incorrect: null,
      error: null,
    }
  }

  processWord = () => {
    if (TokenService.hasAuthToken()) {
      LanguageAPIService.getNextWord()
        .then(word => {
          this.setState({
            word: word.nextWord,
            currentScore: word.totalScore,
            correct: word.wordCorrectCount,
            incorrect: word.wordIncorrectCount
          })
        })
        .catch(err => {
          this.setError(err)
        })
    }
  }

  onGuessChange = (event) => {
    this.setState({
      guess: {
        value: event.target.value,
        touched: true
      }
    })
  }

  onSubmitGuess = (event) => {    
    event.preventDefault();

    let guess = { guess: this.state.guess.value };


    LanguageAPIService.submitGuess(guess)
      .then(res => {
        console.log(res);
        this.processWord();
      })
      .catch(err => {
        this.setError(err)
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
      onSubmitGuess: this.onSubmitGuess,
      clearError: this.clearError
    }
    return (
      <LearningContext.Provider value={value}>
        {this.props.children}
      </LearningContext.Provider>
    )
  }
}