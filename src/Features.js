import React, { useState } from 'react';
import Definitions from './Definitions';
import Synonyms from './Synonyms';
import './Features.css';

export default function Features(props) {
  const [showDefinitions, setShowDefinitions] = useState(false);
  const [showSynonyms, setShowSynonyms] = useState(false);

  const handleDefinitionsClick = (event) => {
    event.preventDefault();
    setShowDefinitions(true);
    setShowSynonyms(false);
  };

  const handleSynonymsClick = (event) => {
    event.preventDefault();
    setShowDefinitions(false);
    setShowSynonyms(true);
  };

  return (
    <div className="Features">
      <ul>
        <li className="features-li">
          <a href="/" onClick={handleDefinitionsClick}>Definition</a>
        </li>
        <li className="features-li">
          <a href="/" onClick={handleSynonymsClick}>Synonym</a>
        </li>
        <li className="features-li">
          <a href="/">Photos</a>
        </li>
      </ul>

      {showDefinitions && <Definitions results={props.results} />}
      {showSynonyms && <Synonyms synonyms={props.results.meanings[0].synonyms} />}
    </div>
  );
}
