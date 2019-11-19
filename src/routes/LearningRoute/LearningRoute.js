import React, { Component } from 'react'
import LearningContext from '../../contexts/LearningContext';
import LearnWord from '../../components/LearnWord/LearnWord'
import GuessForm from '../../components/GuessForm/GuessForm'
import './LearningRoute.css'


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
    const {currentScore, word, correct, incorrect, submitGuess} = this.context;
    return (
      <section className='Learning'>
        <LearnWord
          currentScore={currentScore}
          word={word}
          correct={correct}
          incorrect={incorrect}
        />
        <GuessForm submitGuess={submitGuess} />
        <section className="LearningRoute__current">
          <p className="LearningRoute__current__p">Your total score is: <span className="LearningRoute__current__p__score">{currentScore}</span></p>
        </section>
      </section>
    );
  }
}

export default LearningRoute
