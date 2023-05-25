import React from 'react';
// import Meaning from './Meaning';
import Definitions from './Definitions';
import Phonetic from './Phonetic';
import './Results.css';


export default function Results(props){
console.log(props.results)
  if (props.results) {
    const firstPhonetic = props.results.phonetics[0];
    return (
      <div className="Results">
        <div className="results-phonetic">
          <h1 className="results-word">{props.results.word}</h1>
            <Phonetic phonetic={firstPhonetic} />
        </div>

        <div className="results-meaning">
          <h2>Definition</h2>
          <hr />
          <h3>{props.results.meanings[0].partOfSpeech}</h3>
          <p>{props.results.meanings[0].definitions[0].definition} </p>
          <a href="/" className="more-definitions-link">
            Show more definitions
            <Definitions results={props.result} />
          </a>
        </div>
      </div>
    )
  } else {
    return null
  }
}
