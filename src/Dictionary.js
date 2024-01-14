import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
let [keyword, setKeyword] = useState(" ");
let [results, setResults] = useState(null);

function handleResponse(response) {
    console.log(response.data);
    setResults(response.data); 
}

    function search(event) {
        event.preventDefault();
       
    

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=cf4b8d4et700d15264c45doca5caf311`;
    console.log(apiUrl);

    axios.get(apiUrl).then(handleResponse);
    }


    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    return(
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type = "search" onChange = {handleKeywordChange} />
            </form>
            <Results results={results} />
        </div>
    );
}
    