import React from 'react';
import Meaning from './Meaning';
import './Definition.css';

export default function Definitions(props){
  console.log(props.results)
  if (props.results){
    return (
      <div className="Definitions">
       {props.results.meanings.map(function(meaning, index){
          return (
            <div key={index}>
              <Meaning meaning={meaning}/>
            </div>
          )
        })}
      </div>
    )
  } else {
    return null;
  }
}
