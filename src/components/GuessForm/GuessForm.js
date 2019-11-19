import React, { Component } from 'react'
import { Input, Label } from '../../components/Form/Form'
import Button from '../Button/Button'

class GuessForm extends Component {
  render() {
    const { submitGuess } = this.props;
    return (
      <form className="GuessForm">
        <Label htmlFor="learn-guess-input">What's the translation for this word?</Label>
        <Input
          id='learn-guess-input'
          name='learn-guess-input'
          type='text'
          required
        />
        <Button type='submit' onClick={submitGuess}>Submit your answer</Button>
      </form>
    )
  }
}

export default GuessForm;