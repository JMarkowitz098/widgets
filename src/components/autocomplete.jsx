import React, { useState } from 'react'

function Autocomplete(props){
    const { names } = props;
    const [inputVal, setInputVal] = useState("")

    const renderNames = () => {
        
        return names.map(name => {
            let key = Math.floor(Math.random() * 1000);
            if (name.toLowerCase().includes(inputVal.toLowerCase())) {
                return <li 
                    key={key}
                    onClick={() => setInputVal(name)}
                >{name}</li>
            }
        }) 
    }

    return(
        <section className="autocomplete-section">
            <input 
                type="text"
                onChange={(e) => setInputVal(e.target.value)}
                value={inputVal}
            />
            <ul>{renderNames()}</ul>
        </section>
    )
}

export default Autocomplete