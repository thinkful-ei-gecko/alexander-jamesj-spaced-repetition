import React, { Component } from 'react'
import './LearningWord.css'


class LearningWord extends Component {
  static defaultProps = {
    word: null,
    correct: null,
    incorrect: null
  }
  render() {
    const { word, correct, incorrect } = this.props
    return (
      <section className="LearningWord">
        <h2 className="LearningWord__word_heading">Translate the word:</h2>
        <span className="LearningWord__word">{word}</span>
        <p className="LearningWord__correct">You have answered this word correctly {correct} times.</p>
        <p className="LearningWord__incorrect">You have answered this word incorrectly {incorrect} times.</p>
      </section>
    )
  }
}

export default LearningWord;