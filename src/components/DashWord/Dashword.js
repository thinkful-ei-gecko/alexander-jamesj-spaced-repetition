import React, { Component } from 'react'

class DashWord extends Component {
  render() {
    const word = this.props.word;
    return (
      <li key={word.id}>
        <header className='DashWord__header'>{word.original}</header>
        <p className='DashWord__correct'>Correct attempts: {word.correct_count}</p>
        <p classNAme='Dashword_incorrect'>Missed attempts: {word.incorrect_count}</p>
      </li>
    )
  }
}

export default DashWord;