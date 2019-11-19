import React, { Component } from 'react'
import LearningContext from '../../contexts/LearningContext';
import LearnWord from '../../components/LearnWord/LearnWord'
import { Input, Required, Label } from '../../components/Form/Form'
import Button from '../../components/Button/Button'


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
        <Label htmlFor="learn-guess-input">Guess<Required /></Label>
        <Input
          id='learn-guess-input'
          name='learn-guess-input'
          type='text'
          required
        />
        <Button type='submit' onClick={submitGuess}>Submit</Button>
      </section>
    );
  }
}

export default LearningRoute
