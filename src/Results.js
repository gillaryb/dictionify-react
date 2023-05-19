import React from 'react';
import Meaning from './Meaning';
import Phonetic from './Phonetic';
import './Results.css';


export default function Result(props){
  // console.log(props.results.meanings[0].definitions[0].definition)
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


        {props.results.meanings.map(function(meaning, index){
          return (
            <div key={index}>
              <Meaning meaning={meaning}/>
            </div>
          )
        })}
        {/* {props.results.meanings[0].definitions[0].definition} */}
        {/* {props.results.meanings[0].definitions[0].definition} */}
      </div>
    )
  } else {
    return null
  }
}
