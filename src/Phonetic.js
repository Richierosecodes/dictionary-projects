import React from "react";


export default function Phonetic(props) {
    return(
        <div className="phonetics">
            <h3>Phonetic:</h3>
            <p>{props.results.Phonetic}</p>
            
        </div>
    );
    
}