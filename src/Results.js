import React from 'react';
import Phonetic from './Phonetic';

import './Results.css';

export default function Results(props) {
  if (props.results) {
    const firstPhonetic = props.results.phonetics[0];
    const firstMeaning = props.results.meanings[0];
    const firstDefinition = firstMeaning.definitions[0];

    return (
      <div className="Results">
        <div className="results-phonetic">
          <h1 className="results-word">{props.results.word}</h1>
          <Phonetic phonetic={firstPhonetic} />
        </div>

        <div className="results-meaning">
          <h2>Definition</h2>
          <hr />
          <h3>{firstMeaning.partOfSpeech}</h3>
          <p>{firstDefinition.definition}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
