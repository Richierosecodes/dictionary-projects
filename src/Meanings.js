import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";


export default function Meanings(props) {
    console.log(props.meanings);
    return(
        <div className = "Meanings">
            <h3>{props.meanings.partOfSpeech}</h3>
           
                        
                <div className = "definition"> {props.meanings.definition} </div>
                   
                   <div className = "example"> {props.meanings.example} </div>
                        
                    
                        Synonyms: {props.meanings.synonyms}

                    <Synonyms synonyms = {props.meanings.definition.synonyms} /> 
                    </div>        
                );
                
    }
          
            
                
        