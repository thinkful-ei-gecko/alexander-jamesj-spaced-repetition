import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { nullGuessFeedback } from '../../contexts/LearningContext'
import { parseForeign } from '../../utils'
import Button from '../../components/Button/Button'

class LearningFeedback extends Component {
  static defaultProps = {
    guessFeedback: nullGuessFeedback,
    toggleShowFeedback: () => {}
  }

  render() {
    const { guessFeedback, langID, toggleShowFeedback } = this.props
    return (
      <section className="LearningFeedback">
        <Assessment className="LearningFeedback__assessment" isCorrect={guessFeedback.isCorrect} />
        <p className="LearningFeedback__guess">You guessed '{guessFeedback.prevGuess}' for {parseForeign(guessFeedback.prevWord, langID)}</p>
        <p className="LearningFeedback__answer">The correct answer: {guessFeedback.answer}</p>
        <Button><Link className='Button' to='/learn' onClick={toggleShowFeedback}>Try another!</Link></Button>
      </section>
    )
  }
}

function Assessment(props) {
  let isCorrect = props.isCorrect

  return (
    <h2 className={`LearningFeedback__assessment__heading`}>{!isCorrect ? 'Incorrect' : 'Correct'}</h2>
  )
}

export default LearningFeedback;