import React, { useState } from 'react';
import Meaning from './Meaning';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown,faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import './Definition.css';

export default function Definitions(props) {
  const [showAllMeanings, setShowAllMeanings] = useState(false);
  const [showInitialMeanings, setShowInitialMeanings] = useState(true);

  const toggleMeanings = () => {
    setShowAllMeanings(!showAllMeanings);
    setShowInitialMeanings(false);
  };

  const handleBackClick = () => {
    setShowAllMeanings(false);
    setShowInitialMeanings(true);
  };

  if (props.results) {
    const meanings = props.results.meanings;

    return (
      <div className="Definitions">
        {showAllMeanings &&
          meanings.slice(2).map((meaning, index) => (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          ))}
        {showInitialMeanings &&
          meanings.slice(0, 2).map((meaning, index) => (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          ))}
        {!showAllMeanings && meanings.length > 2 && (
          <button onClick={toggleMeanings}>
           <FontAwesomeIcon icon={faAngleDown} className="button-icon"/></button>
        )}
        {!showInitialMeanings && (
          <button onClick={handleBackClick}>
            <FontAwesomeIcon icon={faAngleLeft} className="button-icon" />
          </button>
        )}
      </div>
    );
  } else {
    return null;
  }
}
