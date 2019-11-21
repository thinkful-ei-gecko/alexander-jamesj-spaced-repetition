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
        {<Assessment className="LearningFeedback__assessment" />}
    <p> You guessed {guessFeedback.prevGuess} for {guessFeedback.prevWord}</p>

    <p> The correct answer: {guessFeedback.answer}</p>

      </section>
    )
  }
}

function Assessment(props) {
  let isCorrect=this.props

  return (
    <h2 className={`LearningFeedback__assessment__heading`}> {!isCorrect ? 'Incorrect' : 'Correct'} </h2>
  )
}

export default LearningFeedback;