import React, { Component } from 'react'
import './DashWord.css';
import { parseForeign } from '../../utils'

class DashWord extends Component {

  render() {
    const word = this.props.word
    
    return (
      <div className="DashWord">
        <h4 className="DashWord__heading">{parseForeign(word.original, parseInt(word.language_id))}</h4>
        <ul className="DashWord__list">
          <li className="DashWord__correct">
            <p>
              Correct attempts: {word.correct_count}
            </p>
            </li>
            <li className="DashWord__incorrect">
            <p>
              Missed attempts: {word.incorrect_count}
            </p>
          </li>
        </ul>
      </div>
    )
  }
}

export default DashWord
