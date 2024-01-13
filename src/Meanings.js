import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
    console.log(props.meanings);
    return(
        <div className = "Meanings">
            <h3>{props.meanings.partOfSpeech}</h3>
                         <p>
                            
                    {props.meanings.definition}
                    <br />
                    <em>{props.meanings.example}</em>
                    <br />
                    <Synonyms synonyms = {definition.synonyms} />
                    
                </p>
                 </div>
    );  
}