import React, { Component } from 'react'
import { nullGuessFeedback } from '../../contexts/LearningContext'

class LearningFeedback extends Component {
  static defaultProps = {
    guessFeedback: nullGuessFeedback,
  }

  render() {
    const { guessFeedback } = this.props
    return (
      <section className="LearningFeedback">
        {guessFeedback.isCorrect ? <Correct /> : <Incorrect />}
    <p> You guessed {guessFeedback.prevGuess} for {guessFeedback.prevWord}</p>

    <p> The correct answer: {guessFeedback.answer}</p>

      </section>
    )
  }
}

function Correct(props) {
  return (
    <h2> Correct </h2>
  )
}

function Incorrect(props) {
  return (
    <h2> Incorrect </h2>
  )
}

export default LearningFeedback;