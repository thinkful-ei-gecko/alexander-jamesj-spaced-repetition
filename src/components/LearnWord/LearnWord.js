import React, { Component } from 'react'
import './LearnWord.css'


class LearnWord extends Component {
  static defaultProps = {
    currentScore: null,
    word: null,
    correct: null,
    incorrect: null
  }
  render() {
    const { currentScore, word, correct, incorrect } = this.props
    return (
      <section className="LearnWord">
        <h2 className="LearnWord__word">{word}</h2>
        <p className="LearnWord__correct">Correct: {correct}</p>
        <p className="LearnWord__incorrect">Incorrect: {incorrect}</p>

        <h3 className="LearnWord__current">Your Current Score: {currentScore}</h3>
      </section>
    )
  }
}

export default LearnWord;