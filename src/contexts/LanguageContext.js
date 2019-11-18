import React from 'react'
import TokenService from '../services/token-service'
import LanguageAPIService from '../services/language-api-service'

const LanguageContext = React.createContext({
  language: {},
  words: [],
  error: null,
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

  componentDidMount() {
    if (TokenService.hasAuthToken()) {
      LanguageAPIService.getUserLanguage()
      .then(lang => {
        this.setState({
          language: lang.language,
          words: lang.words,
        })
      })
      .catch(e => this.setState({ error: e }))
    }
  }

  render() {
    const value = {
      language: this.state.language,
      words: this.state.words
    }
    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}
