import React, { Component } from 'react'

class LearningFeedback extends Component {
  static defaultProps = {
    isCorrect: false,
    answer: null,
    word: {
      guess: '',
      word: 'Word'
    },
    nextWord: {
      wordCorrectCount: null,
      wordIncorrectCount: null,
      totalScore: null,
    }
  }

  render() {
    const { isCorrect } = this.props
    return (
      <section className="LearningFeedback">
        <h2 className="LearningFeedback">This is the feedback</h2>
        {isCorrect ? <Correct /> : <Incorrect />}
      </section>
    )
  }
}

function Correct(props) {
  return (
    <h2> Correctamundo </h2>
  )
}

function Incorrect(props) {
  return (
    <h2> Incorrectamundo </h2>
  )
}

export default LearningFeedback;