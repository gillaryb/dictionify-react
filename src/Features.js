import React, { useState } from 'react';
import Definitions from './Definitions';
import Synonyms from './Synonyms';
import Photos from './Photos';
import './Features.css';

export default function Features({results, photos, toggleDefinitions}) {
  const [showDefinitions, setShowDefinitions] = useState(false);
  const [showSynonyms, setShowSynonyms] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);

  const handleDefinitionsClick = (event) => {
    event.preventDefault();
    setShowDefinitions(true);
    setShowSynonyms(false);
    setShowPhotos(false);
    toggleDefinitions();

  };

  const handleSynonymsClick = (event) => {
    event.preventDefault();
    setShowDefinitions(false);
    setShowSynonyms(true);
    setShowPhotos(false);
    toggleDefinitions(false);
  };

  const handlePhotosClick = (event) => {
    event.preventDefault();
    setShowDefinitions(false);
    setShowSynonyms(false);
    setShowPhotos(true);
    toggleDefinitions(false);
  }


  return (
    <div className="Features">
      <ul className="button row text-center">
        <li className="col-3 col-sm-4">
          <a href="/" onClick={handleDefinitionsClick} className="link">Definition</a>
        </li>
        <li className="col-3 col-sm-4">
          <a href="/" onClick={handleSynonymsClick} className="link">Synonym</a>
        </li>
        <li className="col-3 col-sm-4">
          <a href="/" onClick={handlePhotosClick} className="link">Photos</a>
        </li>
      </ul>

      {showDefinitions && !showSynonyms && <Definitions results={results} />}
      {showSynonyms && <Synonyms synonyms={results.meanings[0].synonyms} />}
      {showPhotos && <Photos photos={photos}/>}

    </div>
  );
}
