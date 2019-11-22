import React, { Component } from 'react'
import Button from '../Button/Button'
import { nullGuessFeedback } from '../../contexts/LearningContext'
import { parseForeign } from '../../utils'
import '../../components/Button/Button.css'

class LearningFeedback extends Component {
  static defaultProps = {
    guessFeedback: nullGuessFeedback,
    toggleShowFeedback: () => {},
  }

  render() {
    const { guessFeedback, langID, toggleShowFeedback } = this.props
    return (
      <section className="LearningFeedback">
        <Assessment
          className="LearningFeedback__assessment"
          isCorrect={guessFeedback.isCorrect}
        />
        <p className="LearningFeedback__guess">
          You guessed '{guessFeedback.prevGuess}' for{' '}
          {parseForeign(guessFeedback.prevWord, langID)}
        </p>
        <p className="LearningFeedback__answer">
          The correct answer: {guessFeedback.answer}
        </p>
        <Button onClick={toggleShowFeedback}>Try another!</Button>
      </section>
    )
  }
}

function Assessment(props) {
  let isCorrect = props.isCorrect

  return (
    <h2 className={`LearningFeedback__assessment__heading`}>
      {!isCorrect ? 'Incorrect' : 'Correct'}
    </h2>
  )
}

export default LearningFeedback
