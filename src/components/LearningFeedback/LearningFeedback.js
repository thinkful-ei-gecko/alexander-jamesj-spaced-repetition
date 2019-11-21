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
        <h2 className="LearningFeedback">This is the feedback</h2>
        {guessFeedback.isCorrect ? <Correct /> : <Incorrect />}

    <p> The correct answer: {guessFeedback.answer}</p>

      </section>
    )
  }
}

function Correct(props) {
  return (
    <h3> Correct </h3>
  )
}

function Incorrect(props) {
  return (
    <h3> Incorrect </h3>
  )
}

export default LearningFeedback;