import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import "./Phonetic.css";

export default function Phonetic(props){
  // console.log(props.phonetic)
  return (
    <div className="Phonetic d-flex">
      <a href={props.phonetic.audio}target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={faVolumeHigh} className="phonetic-audio-icon" />
      </a>
      <p>{props.phonetic.text}</p>
    </div>
  )
}
