import React from "react";

export default function Meanings(props) {
    console.log(props.meanings);
    return(
        <div className = "Meanings">
            <h3>{props.meanings.partOfSpeech}</h3>
            
                <p>
                    {props.meanings.definition}
                    <br />
                    <em>{props.meanings.example}</em>
                </p>
        </div>
    );  
}