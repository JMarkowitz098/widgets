import React, { useState, useEffect } from 'react'

function Clock(){
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        tick();
    });

    function tick(){
        setTimeout(() => { 
            setDate(new Date()) 
        }, 1000);
    }

    return(
        <section className="clock-section">
            <h1>Clock</h1>
            <section>
                <div>Time: </div>
                <div>{date.toLocaleTimeString()}</div>
                <div>Date: </div>
                <div>{date.toDateString()}</div>
            </section>
        </section>
    )
}

export default Clock;