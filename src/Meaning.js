import React from 'react';
import Synonyms from './Synonyms';
import './Meaning.css';

export default function Meaning(props){
 console.log(props.meaning.definitions[0])
  return(
    <div className="Meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function(definition, index){
          return (
            <div key={index}>
              <p>
                {definition.definition}
              </p>

                {/* <em>
                  <strong>Example:</strong>{definition.example}
                </em> */}
                  {/* <Synonyms synonyms={definition.synonyms} /> */}
            </div>
          )
        })}
      </section>
    </div>
  );
}
