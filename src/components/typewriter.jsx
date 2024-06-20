import React from "react";
import {useTypewriter, Cursor} from 'react-simple-typewriter'

function TypeWriter(props){
    const [text] = useTypewriter({
        words: [props.words],
        loop: {},
    });


    return(
        <h1>
            <span className={props.myClass}>
                {text}
                <Cursor/>
            </span>
            
        </h1>
    )
}

export default TypeWriter;