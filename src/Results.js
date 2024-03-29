import React from "react";
import Meanings from "./Meanings";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
    if (props.results) {
        return(
            
                <div className = "Results">
                    <section>
                <h2>{props.results.word}</h2>
                <Phonetic phonetic={props.results.phonetic} />
                
                
                
               
                {props.results.meanings.map (function (meanings, index) {
                    return(
                        <div key={index}>
                            <Meanings meanings={meanings} />
                            
                            
                            
                        </div>
                    );
                    
                    
                     
                    
                })}
               
                </section>
                
    
            </div>
                
            
            
            
            
        );
    }else{
        return null;
    }
    
}
