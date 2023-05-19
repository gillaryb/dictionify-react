import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import './Dictionary.css';


export default function Dictionary(){
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);

  function handleSearch(event){
    event.preventDefault();
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(apiResponse);
    console.log(event);
  }

  function apiResponse(response){
    setResult(response.data[0]);
  }

  function keywordChange(event){
    setKeyword(event.target.value);
  }

  return (
    <div className="container">
      <div className="Dictionary">
        <form onSubmit={handleSearch} className="dictionary-form">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="dictionary-search-icon" />
          <input type="search" onChange={keywordChange}
          className="dictionary-search"
          placeholder="Search for word"/>
        </form>
        <Results results={result}/>
      </div>
    </div>
);
}
