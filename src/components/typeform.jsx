import React, { useEffect } from 'react'
import * as typeformEmbed from '@typeform/embed'

function Typeform() {

    useEffect(() => {
        renderTF()
    });

    function renderTF(){
        const tfDiv = document.getElementsByClassName("tf")[0];
        if (tfDiv){
            typeformEmbed.makeWidget(tfDiv, "https://jaredmarkowitz.typeform.com/to/QkG0tz")
        }
    }

    return (
        <div className="tf"></div>
    )
}

export default Typeform