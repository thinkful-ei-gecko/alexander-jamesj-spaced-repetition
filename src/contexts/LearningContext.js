import React from 'react'
import TokenService from '../services/token-service'
import LanguageAPIService from '../services/language-api-service'

const LearningContext = React.createContext({
  currentScore: null,
  word: null,
  correct: null,
  incorrect: null,
  error: null,
  processWord: () => { }
})

export default LearningContext

export class LearningProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentScore: null,
      word: null,
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
      correct: this.state.correct,
      incorrect: this.state.incorrect,
      error: this.state.error,
      processWord: this.processWord,
      clearError: this.clearError
    }
    return (
      <LearningContext.Provider value={value}>
        {this.props.children}
      </LearningContext.Provider>
    )
  }
}