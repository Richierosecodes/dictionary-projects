import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";


import "./Dictionary.css";

export default function Dictionary() {
let [keyword, setKeyword] = useState("sunshine");
let [results, setResults] = useState(null);
let [loaded, setLoaded] = useState(false);
let [photos, setPhotos] = useState(null);

function handleDictionaryResponse(response) {
    setResults(response.data); 
}

function handleShecodesResponse(response) {
    setPhotos(response.data.photos);
}

function search() {
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=cf4b8d4et700d15264c45doca5caf311`;
    console.log(apiUrl);

    axios.get(apiUrl).then(handleDictionaryResponse);

    let shecodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=cf4b8d4et700d15264c45doca5caf311`;

    axios.get(shecodesApiUrl).then(handleShecodesResponse);
    
}

    function handleSubmit(event) {
        event.preventDefault();
        search();
       
    }


    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return(
            <div className="Dictionary">
                <h1>What word are you looking for?</h1>
                <section>
                <form onSubmit={handleSubmit}>
                    <input type = "search" onChange = {handleKeywordChange} />
                </form>
                <div className = "hint">
                    suggested words: rose, hibiscus, pearl, gem, diamond, gold...
                </div>
                </section>
                <Results results={results} />
                <Photos photos={photos} />
                
            </div>
        );
        
    } else {
        load();
        return "Loading";
    }
    
}
    