import React from 'react';
import Meaning from './Meaning';
import Phonetic from './Phonetic';
import './Results.css';


export default function Result(props){

  if (props.results) {
    return (
      <div className="Results">
        <div className="results-phonetic">
          <h1 className="results-word">{props.results.word}</h1>
          {props.results.phonetics.map(function(phonetic, index){
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic}/>
              </div>
            )
          })}
        </div>


        {/* {props.results.meanings.map(function(meaning, index){
          return (
            <div key={index}>
              <Meaning meaning={meaning}/>
            </div>
          )
        })} */}
        <div>
          <h2>Definition</h2>
          <hr />
          <h3>{props.results.meanings[0].partOfSpeech}</h3>
          <p>{props.results.meanings[0].definitions[0].definition} </p>
        </div>
        {/* {props.results.meanings[0].definitions[0].definition} */}
      </div>
    )
  } else {
    return null
  }
}
