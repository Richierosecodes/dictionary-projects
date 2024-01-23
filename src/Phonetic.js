import React from "react";


export default function Phonetic(props) {
    return(
        <section>
            <div className="phonetics">
            <h3>Phonetic:</h3>
            <p> {props.phonetic.phonetic} </p>
            
        </div>

        </section>
        
    );
    
}