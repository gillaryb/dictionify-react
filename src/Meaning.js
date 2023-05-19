import React from 'react';
import Synonyms from './Synonyms';

export default function Meaning(props){
 console.log(props.meaning.definitions[0])
  return(
    <div className="Meaning">
      <h3>Definition</h3>
      <hr　/>
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function(definition, index){
        return (
          <div key={index}>
            <p>
              {definition.definition}
              {/* <em>
                <strong>Example:</strong>{definition.example}
              </em> */}
                <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        )
      })}



    </div>
  );
}
