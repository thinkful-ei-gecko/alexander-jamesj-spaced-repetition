import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LearningContext from '../../contexts/LearningContext'
import LearningWord from '../../components/LearningWord/LearningWord'
import LearningFeedback from '../../components/LearningFeedback/LearningFeedback'
import GuessForm from '../../components/GuessForm/GuessForm'
import './LearningRoute.css'
import { gradient } from '../../utils'

class LearningRoute extends Component {
  componentDidMount() {
    this.context.processWord();
  }

  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
    processWord: () => { },
    submitGuess: () => { },
  }

  static contextType = LearningContext;

  render() {
    const { showFeedback, nextWord, guessFeedback, onSubmitGuess, onGuessChange, toggleShowFeedback, guess } = this.context;

    if (!showFeedback) {
      return (
        <section className='Learning'>
          <LearningWord
            nextWord={nextWord}
          />
          <GuessForm
            handleSubmitGuess={onSubmitGuess}
            handleGuessChange={onGuessChange}
            guess={guess}
          />
          <section className="LearningRoute__current">
            <p className="LearningRoute__current__p">
            Your total score is: <span style={gradient(nextWord.totalScore)} className="LearningRoute__current__p__score">{nextWord.totalScore}</span></p>
          </section>
        </section>
      );
    } else {
      return (
        <section className='Learning'>
          <LearningFeedback
            guessFeedback={guessFeedback}
          />

          <Link className='Button' to='/learn' onClick={toggleShowFeedback}>Next Phrase</Link>

        </section>
      )
    }
  }
}

export default LearningRoute
