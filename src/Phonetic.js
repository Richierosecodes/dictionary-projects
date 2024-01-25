import React from "react";

import "./Phonetic.css";


export default function Phonetic(props) {
    return(
        <section>
            <div className="Phonetic">
            <p> /{props.phonetic}/ </p>
            
        </div>

        </section>
        
    );
    
}