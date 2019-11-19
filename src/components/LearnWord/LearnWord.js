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
        <h4 className="LearnWord__current">Your Current Score: {currentScore}</h4>
        <h2 className="LearnWord__word">Translate the word</h2>
        <p className="LearnWord__word">{word}</p>
        <p className="LearnWord__correct">Correct attempts: {correct}</p>
        <p className="LearnWord__incorrect">Incorrect: {incorrect}</p>
      </section>
    )
  }
}

export default LearnWord;