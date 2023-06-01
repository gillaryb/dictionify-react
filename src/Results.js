import React, { useState } from 'react';
import Phonetic from './Phonetic';
import './Results.css';

export default function Results(props) {
  const [showAllDefinitions, setShowAllDefinitions] = useState(false);

  const toggleDefinitions = (event) => {
    event.preventDefault();
    setShowAllDefinitions(!showAllDefinitions);

  };

  if (props.results) {
    const firstPhonetic = props.results.phonetics[0];
    const meanings = props.results.meanings;

    return (
      <div className="Results ">
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
            <a href="/" className="more-definitions-link" onClick={toggleDefinitions}>
              Show more definitions
            </a>
          )}
        </div>
        
        {showAllDefinitions && (
          <div className="results-definitions">
            {meanings.slice(2).map((meaning, index) => (
              <div key={index}>
                <h3>{meaning.partOfSpeech}</h3>
                {meaning.definitions.map((definition, index) => (
                  <p key={index}>{definition.definition}</p>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return null;
  }
}
