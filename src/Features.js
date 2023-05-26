import React, { useState } from 'react';
import Definitions from './Definitions';
import Synonyms from './Synonyms';
import './Features.css';

export default function Features(props) {
  console.log(props.results)
  
  const [showDefinitions, setDefinitions] = useState(false);
  const [showSynonyms, setShowSynonyms] = useState(false);


  const handleDefinittionsClick = (event) => {
    event.preventDefault();
    setDefinitions(true);
  }

  const handleSynonymsClick = (event) => {
    event.preventDefault();
    setShowSynonyms(true);
  };

  return (
    <div className="Features">
      <ul>
        <li>
          <a href="/" onClick={handleDefinittionsClick}>Definition</a>
          {showDefinitions && <Definitions results={props.results}/>}
        </li>
        <li>
          <a href="/" onClick={handleSynonymsClick}>Synonym</a>
          {showSynonyms && <Synonyms synonyms={props.results.meanings[0].synonyms} />}
        </li>
        <li>
          <a href="/">Photos</a>
        </li>
      </ul>
    </div>
  );
}
