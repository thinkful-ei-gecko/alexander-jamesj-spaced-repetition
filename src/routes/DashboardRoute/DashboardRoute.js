
import React, { Component } from 'react'
import DashWord from '../../components/DashWord/Dashword'
import { Link } from 'react-router-dom'
import UserContext from '../../contexts/UserContext'

class DashboardRoute extends Component {
  componentDidMount() {
    this.props.processUserLanguage()
  }

  componentWillUpdate() {
    if (
      this.props.error &&
      this.props.error.error === 'Unauthorized request'
    ) {
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
      <section className="DashBoard">
        <ul className="Languages">
          <li>
            <h2>{language.name}</h2>
            <h3>Word & Phrases (Total Score: {language.total_score})</h3>
            <div className="DashBoard__wordList">
              {words.map(word => (
                <DashWord key={word.id} word={word} />
              ))}
            </div>
            <Link className="button" to="/learn">Start Learning</Link>
          </li>
        </ul>
      </section>
    )

  }
}

export default DashboardRoute
