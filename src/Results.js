import React, { useState } from 'react';
import Phonetic from './Phonetic';
import Definitions from './Definitions';
import './Results.css';

export default function Results(props) {
  const [showAllDefinitions, setShowAllDefinitions] = useState(false);
  

  const toggleDefinitions = () => {
    setShowAllDefinitions(!showAllDefinitions);
  };

  if (props.results) {
    const firstPhonetic = props.results.phonetics[0];
    const meanings = props.results.meanings;

    return (
      <div className="Results">
        <div className="results-phonetic">
          <h1 className="results-word">{props.results.word}</h1>
          <Phonetic phonetic={firstPhonetic} />
        </div>

        <div className="results-meaning">
          <h2>Definition</h2>
          <hr />
          <h3>{meanings[0].partOfSpeech}</h3>
          <p>{meanings[0].definitions[0].definition}</p>
          {meanings.length > 1 && (
            <button className="more-definitions-button" onClick={toggleDefinitions}>
              Show more definitions
            </button>
          )}
        </div>

        {showAllDefinitions && <Definitions meanings={meanings.slice(1)} />}
      </div>
    );
  } else {
    return null;
  }
}
