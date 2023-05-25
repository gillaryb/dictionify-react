import React from 'react';
// import Meaning from './Meaning';
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
          {/* {props.results.phonetics.map(function(phonetic, index){
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic}/>
              </div>
            )
          })} */}
        </div>

        <div className="results-meaning">
          <h2>Definition</h2>
          <hr />
          <h3>{props.results.meanings[0].partOfSpeech}</h3>
          <p>{props.results.meanings[0].definitions[0].definition} </p>
          <p>
            <em>Example:</em>
            {/* {props.results.meanings[0].example} */}
          </p>
        </div>
      </div>
    )
  } else {
    return null
  }
}
