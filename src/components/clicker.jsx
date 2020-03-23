import React, { useState } from 'react' 

function Clicker(){
    const [clicks, setClicks] = useState(0)
    const [clicksQueue, setClicksQueue] = useState([]);

    const renderClickAmounts = () => {
        return clicksQueue.map(clickAmount => {
            let key = Math.floor(Math.random() * 1000)
            return <li key={`${key}`}>{clickAmount}</li>
        })
    }

    const handleReset = () => {
        clicksQueue.unshift(clicks)
        setClicks(0)
    }

    return(
        <section className="clicker-section">
            <h1>Clicker</h1>
            <section>
                <div>Number of Clicks: {clicks}</div>
                <span>
                    <button onClick={() => setClicks(clicks + 1)}>Click</button>
                    <button onClick={handleReset}>Reset Clicks</button>
                </span>
                <span>
                    <div>Past Click Amounts</div>
                    <button onClick={() => setClicksQueue([])}>Reset Click History</button>
                    <ul>{renderClickAmounts()}</ul>
                </span>
            </section>
        </section>
    )
}

export default Clicker;