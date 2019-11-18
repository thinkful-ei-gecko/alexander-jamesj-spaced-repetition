import React, { Component } from 'react';
import DashWord from '../../components/DashWord/Dashword';
import {Link} from 'react-router-dom';

class DashboardRoute extends Component {

  static defaultProps = {
    language: {},
    words: []
  }

  render() {
    const { language, words } = this.props;
    return (
      <section className='DashBoard'>
        <h2>My Language: {language.name}</h2>
        <h3>Phrases (Total Score: {language.total_score})</h3>
        <div className='DashBoard__wordList'>
          {words.map(word => (
            <DashWord key={word.id} word={word} />
          ))}
        </div>
        <Link className="button" to="/learn">Start Learning</Link>
      </section>
    )
  }
}

export default DashboardRoute
