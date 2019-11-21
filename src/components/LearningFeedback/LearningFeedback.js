import React, { Component } from 'react'
import { nullGuessFeedback } from '../../contexts/LearningContext'
import { parseForeign } from '../../utils'

class LearningFeedback extends Component {
  static defaultProps = {
    guessFeedback: nullGuessFeedback,
  }

  render() {
    const { guessFeedback, langID } = this.props
    return (
      <section className="LearningFeedback">
        <Assessment className="LearningFeedback__assessment" isCorrect={guessFeedback.isCorrect} />
        <p className="LearningFeedback__guess"> You guessed '{guessFeedback.prevGuess}' for {parseForeign(guessFeedback.prevWord, langID)}</p>
        <p className="LearningFeedback__answer"> The correct answer: {guessFeedback.answer}</p>

      </section>
    )
  }
}

function Assessment(props) {
  let isCorrect = props.isCorrect
  console.log(isCorrect)

  return (
    <h2 className={`LearningFeedback__assessment__heading`}> {!isCorrect ? 'Incorrect' : 'Correct'} </h2>
  )
}

export default LearningFeedback;