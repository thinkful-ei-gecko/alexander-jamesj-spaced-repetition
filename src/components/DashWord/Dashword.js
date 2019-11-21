import React, { Component } from 'react'
import './DashWord.css';
import { parseForeign } from '../../utils'

class DashWord extends Component {

  render() {
    const word = this.props.word
    
    return (
      <>
        <h4 className="DashWord__header">{parseForeign(word.original, parseInt(word.language_id))}</h4>
        <ul className="DashWord">
          <li className="DashWord__correct">
            <p>
              Correct attempts: {word.correct_count}
            </p>
            </li>
            <li className="DashWord_incorrect">
            <p>
              Missed attempts: {word.incorrect_count}
            </p>
          </li>
        </ul>
      </>
    )
  }
}

export default DashWord
