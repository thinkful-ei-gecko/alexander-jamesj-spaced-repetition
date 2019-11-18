import React, { Component } from 'react'

class DashWord extends Component {
  render() {
    const word = this.props.word;
    return (
      <li key={word.id}>
        <h4 className='DashWord__header'>{word.original}</h4>
        <p className='DashWord__correct'>Correct attempts: {word.correct_count}</p>
        <p className='Dashword_incorrect'>Missed attempts: {word.incorrect_count}</p>
      </li>
    )
  }
}

export default DashWord;