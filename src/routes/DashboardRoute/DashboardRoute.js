import React, { Component } from 'react';
import DashWord from '../../components/DashWord/Dashword';

class DashboardRoute extends Component {

  static defaultProps = {
    language: {},
    words: []
  }
  render() {
    const { language, words } = this.props;
    words.map(word => (console.log(word)));
    console.log(words);
    return (
      <section>
        <h2>My Language: {language.name}</h2>
        <h3>Phrases (Total Score: {language.total_score})</h3>
        <ul className='DashBoard__wordList'>
          {words.map(word => (
            <DashWord word={word} />
          ))}
        </ul>
        <button>Start Learning</button>
      </section>
    )
  }
}

export default DashboardRoute
