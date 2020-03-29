import React, { useState } from 'react'

function Tabs(props) {
    const { tabs } = props;
    const [selectedTab, setSelectedTab] = useState(0)

    const renderTabs = () => {
        return tabs.map((tabObj, idx) => {
            return (
                <li key={Math.floor(Math.random() * 1000)}>
                    <h1
                        onClick={() => setSelectedTab(idx)}
                    >{tabObj.title}</h1>
                </li>
            )
        })
    }
    return (
        <section className="tabs-section">
            <ul>{renderTabs()}</ul>
            {tabs[selectedTab].content}
        </section>
    )
}

export default Tabs