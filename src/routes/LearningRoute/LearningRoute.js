import React, { Component } from 'react'
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
    const { showFeedback, guessFeedback, nextWord, guess, onSubmitGuess, onGuessChange, toggleShowFeedback } = this.context;
    return (
      <section className="LearningRoute">
        <p className="LearningRoute__current__p">
          Your total score is: <span style={gradient(nextWord.totalScore)} className="LearningRoute__current__p__score">{nextWord.totalScore}</span></p>
        <section className='Learning'>
          {!showFeedback
            ? <LearningQuestion
                nextWord={nextWord}
                guess={guess}
                onSubmitGuess={onSubmitGuess}
                onGuessChange={onGuessChange} />
            : <LearningAnswer
                guessFeedback={guessFeedback}
                toggleShowFeedback={toggleShowFeedback}
                langID={this.props.language.id}
                />}
        </section>
      </section>
    )
  }
}

//langID={this.props.language.id}
//langID={language.id}


function LearningQuestion(props) {
  const { nextWord, onSubmitGuess, onGuessChange, guess } = props;
  return (
    <>
      <LearningWord
        nextWord={nextWord}
      />
      <GuessForm
        handleSubmitGuess={onSubmitGuess}
        handleGuessChange={onGuessChange}
        guess={guess}
      />
    </>
  );
}

function LearningAnswer(props) {
  const { guessFeedback, toggleShowFeedback, langID } = props
  return (
    <LearningFeedback
      guessFeedback={guessFeedback}
      langID={langID}
      toggleShowFeedback={toggleShowFeedback}
    />
  )
}

export default LearningRoute
