import React, { Component } from 'react'
import LearningContext from '../../contexts/LearningContext';
import LearningWord from '../../components/LearningWord/LearningWord'
import GuessForm from '../../components/GuessForm/GuessForm'
import './LearningRoute.css'

//TODO keep refactoring data
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
    const { nextWord, onSubmitGuess, onGuessChange, guess } = this.context;
    return (
      <section className='Learning'>
        <LearningWord
          nextWord={nextWord}
        />
        <GuessForm
          handleSubmitGuess={onSubmitGuess}
          handleGuessChange={onGuessChange}
          guess
        />
        <section className="LearningRoute__current">
          <p className="LearningRoute__current__p">
            Your total score is: <span className="LearningRoute__current__p__score">{currentScore}</span></p>
        </section>
      </section>
    );
  }
}

export default LearningRoute
