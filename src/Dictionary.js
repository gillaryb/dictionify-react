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
  let [photos, setPhotos] = useState(null);
  let [showDefinitionsComponent, setShowDefinitionsComponent] = useState(true);

  function search(){
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(apiResponse);

    const pexelsApi = `3gp0FkQLZ594NDTECLpt4HzcmB6x8sGi4g1LVwUnwLsf4gQpwetgpmSy`;
    const pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios.get(pexelsUrl, { headers: {"Authorization" : `${pexelsApi}`} }).then(pexelsResponse)
    .catch(error => {
      console.error(error);
    });
  }

  function pexelsResponse(response){
    setPhotos(response.data.photos)
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

  function toggleDefinitions(definitionsVisible){
    setShowDefinitionsComponent(definitionsVisible);
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
          <Features results={result} photos={photos} toggleDefinitions={toggleDefinitions}/>
          {showDefinitionsComponent ? <Definitions results={result} /> : null}
        </div>
      </div>
    );
  } else {
    load();
    return 'Loading';
  }
}
