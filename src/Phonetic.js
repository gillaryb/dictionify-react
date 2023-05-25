import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import './Phonetic.css';

export default function Phonetic(props) {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioElement = new Audio(props.phonetic.audio);

  const handleAudioClick = () => {
    if (audioPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setAudioPlaying(!audioPlaying);
  };

  return (
    <div className="Phonetic d-flex">
      <FontAwesomeIcon
        icon={faVolumeHigh}
        className={`phonetic-audio-icon ${audioPlaying ? 'playing' : ''}`}
        onClick={handleAudioClick}
      />
      <p>{props.phonetic.text}</p>
    </div>
  );
}
