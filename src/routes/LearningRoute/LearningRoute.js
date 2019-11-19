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
  }

  static contextType = LearningContext;

  render() {
    const {currentScore, word, correct, incorrect} = this.context;
    return (
      <section className='Learning'>
        <h2>Learn the Things!</h2>
        <LearnWord
          currentScore={currentScore}
          word={word}
          correct={correct}
          incorrect={incorrect}
        />
        <Label htmlFor="word-guess">Guess<Required /></Label>
        <Input
          id='word-guess'
          name='word-guess'
          type='text'
          required
        />
        <Button>Submit</Button>
      </section>
    );
  }
}

export default LearningRoute
