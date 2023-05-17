import React, { useState } from 'react';
import axios from 'axios';
import './Dictionary.css';

export default function Dictionary(){
  let [keyword, setKeyword] = useState("");

  function handleSearch(event){
    event.preventDefault();
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(apiResponse);
    console.log(event);
  }

  function apiResponse(response){
    console.log(response.data[0]);
  }

  function keywordChange(event){
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSearch} className="dictionary-form">
        <input type="search" onChange={keywordChange}
        className="dictionary-search"/>
      </form>
    </div>
);
}
