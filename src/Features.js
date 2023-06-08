import React, { useState } from 'react';
import Definitions from './Definitions';
import Synonyms from './Synonyms';
import './Features.css';

export default function Features({results, toggleDefinitions}) {
  const [showDefinitions, setShowDefinitions] = useState(false);
  const [showSynonyms, setShowSynonyms] = useState(false);

  const handleDefinitionsClick = (event) => {
    event.preventDefault();
    setShowDefinitions(true);
    setShowSynonyms(false);
    toggleDefinitions();
  };

  const handleSynonymsClick = (event) => {
    event.preventDefault();
    setShowDefinitions(false);
    setShowSynonyms(true);
    toggleDefinitions(false);
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

      {showDefinitions && !showSynonyms && <Definitions results={results} />}
      {showSynonyms && <Synonyms synonyms={results.meanings[0].synonyms} />}
    </div>
  );
}
