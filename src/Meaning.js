import React from 'react';
import './Meaning.css';

export default function Meaning(props) {
  console.log(props.meaning)
  const definitions = props.meaning.definitions;
  return (
    <div className="Meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        {definitions.slice(0, 3).map((definition, index) => (
          <div key={index}>
            <p>{definition.definition}</p>
            {/* <em>
              <strong>Example:</strong>{definition.example}
            </em> */}
            {/* <Synonyms synonyms={definition.synonyms} /> */}
          </div>
        ))}
      </section>
    </div>
  );
}
