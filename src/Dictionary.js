import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';
import Features from './Features';
import Definitions from './Definitions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import './Dictionary.css';


export default function Dictionary(props){
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function search(){
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(apiResponse);
  }

  function handleSearch(event){
    event.preventDefault();
    search();
  }

  function apiResponse(response){
    setResult(response.data[0]);
  }

  function keywordChange(event){
    setKeyword(event.target.value);
  }

  function load(){
    setLoaded(true);
    search();
  }

  if (loaded){
    return (
      <div className="container d-flex">
        <div className="Dictionary">
          <form onSubmit={handleSearch} className="dictionary-form">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="dictionary-search-icon" />
            <input type="search" onChange={keywordChange}
            className="dictionary-search"
            placeholder="Search for word"/>
          </form>
          <Results results={result}/>
        </div>
        <div className="dictionary-features">
          <Features results={result}/>
          <div className="dictionary-definitions">
            <Definitions results={result}/>
          </div>
        </div>
      </div>
    );
  } else {
    load();
    return 'Loading';
  }
}
