import React, { Component } from 'react'
import { nullNextWord } from '../../contexts/LearningContext'
import './LearningWord.css'


class LearningWord extends Component {
  static defaultProps = {
    nextWord: nullNextWord
  }
  render() {
    const { nextWord } = this.props
    return (
      <section className="LearningWord">
        <h2 className="LearningWord__word_heading">Translate the word/phrase:</h2>
        <span className="LearningWord__word">{nextWord.word}</span>
        <p className="LearningWord__correct">You have answered this word correctly {nextWord.correct} times.</p>
        <p className="LearningWord__incorrect">You have answered this word incorrectly {nextWord.incorrect} times.</p>
      </section>
    )
  }
}

export default LearningWord;