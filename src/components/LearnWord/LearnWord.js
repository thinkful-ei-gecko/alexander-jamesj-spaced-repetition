import React, { Component } from 'react'
import './LearnWord.css'

class LearnWord extends Component {
  static defaultProps = {
    word: null,
    correct: null,
    incorrect: null,
  }
  render() {
    const { word, correct, incorrect } = this.props
    return (
      <section className="LearnWord">
        <h2 className="LearnWord__word_heading">Translate the word/phrase:</h2>
        <span className="LearnWord__word">{word}</span>
        <p className="LearnWord__correct">
          You have answered this word correctly {correct}{' '}
          {correct > 1 ? `times` : `time`}.
        </p>
        <p className="LearnWord__incorrect">
          You have answered this word incorrectly {incorrect}{' '}
          {incorrect > 1 ? `times` : `time`}.
        </p>
      </section>
    )
  }
}

export default LearnWord
