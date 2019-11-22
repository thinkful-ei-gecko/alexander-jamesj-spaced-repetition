import React, { Component } from 'react'
import './DashboardRoute.css'
import DashWord from '../../components/DashWord/DashWord.jsx'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import UserContext from '../../contexts/UserContext'
import { gradient } from '../../utils'

class DashboardRoute extends Component {
  componentDidMount() {
    this.props.processUserLanguage()
  }

  componentWillUpdate() {
    if (this.props.error && this.props.error.error === 'Unauthorized request') {
      this.props.clearError()
      this.context.processLogout()
    }
  }
  static defaultProps = {
    language: {},
    words: [],
    processUserLanguage: () => { },
    error: null,
  }

  static contextType = UserContext

  render() {
    const { language, words } = this.props
    return (
      <section className="Dashboard">
        <div className="Dashboard__header">
        <h2>{language.name}</h2>
        <h3>
          Words &amp; Phrases{' '}
          <span
            style={gradient(language.total_score)}
            className="Dashboard__total-score"
          >
            (Total Score: {language.total_score})
          </span>
        </h3>
        <Button>
          <Link className="button" to="/learn">
            Start Learning
          </Link>
        </Button>
        </div>
        <div className="Dashboard__wordList">
          {words.map(word => (
            <DashWord key={word.id} word={word} />
          ))}
        </div>
      </section>
    )
  }
}

export default DashboardRoute
