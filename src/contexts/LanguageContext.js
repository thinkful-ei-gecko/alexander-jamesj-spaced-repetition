import React from 'react'
import TokenService from '../services/token-service'
import LanguageAPIService from '../services/language-api-service'

const LanguageContext = React.createContext({
  language: {},
  words: [],
  error: null,
  processUserLanguage: () => {}
})

export default LanguageContext

export class LanguageProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      language: {},
      words: [],
      error: null,
    }
  }

  processUserLanguage = () => {
    if (TokenService.hasAuthToken()) {
      LanguageAPIService.getUserLanguage()
      .then(lang => {
        this.setState({
          language: lang.language,
          words: lang.words,
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
    this.processUserLanguage()
  }

  render() {
    const value = {
      language: this.state.language,
      words: this.state.words,
      error: this.state.error,
      processUserLanguage: this.processUserLanguage,
      clearError: this.clearError
    }
    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}
