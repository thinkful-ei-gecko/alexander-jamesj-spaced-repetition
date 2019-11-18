import React, { Component } from 'react'

class DashboardRoute extends Component {

  static defaultProps = {
    language: {},
    words: []
  }
  render() {
    return (
      <section>
        <h2>My Language: {this.props.language.name}</h2>
        <h3>Phrases (Total Score: {this.props.language.total_score})</h3>
        <div>
          {this.props.words.map(word => (
            <div>
            <h4>{word.original}</h4>
            <ul key={word.id}>
              <li>Correct attempts: {word.correct_count}</li>
              <li>Missed attempts: {word.incorrect_count}</li>
            </ul>
            </div>
          ))}
        </div>
        <a href='/learn'>Start Learning</a>
      </section>
    )
  }
}

export default DashboardRoute
