import React, { Component } from 'react'
import LearnWord from '../../components/LearnWord/LearnWord'
import { Input, Required, Label } from '../../components/Form/Form'
import Button from '../../components/Button/Button'


class LearningRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  render() {
    return (
      <section className='Learning'>
        <h2>Learn the Things!</h2>
        <LearnWord currentScore='5' word='Word' correct='0' incorrect='0' />
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
