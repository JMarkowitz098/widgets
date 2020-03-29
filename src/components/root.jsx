import React from 'react'
// import Clock from './clock'
// import Clicker from './clicker'
// import Tabs from './tabs'
// import Autocomplete from './autocomplete'
import SlidingPuzzle from './sliding_puzzle'

function Root(){
    // let tabs = [
    //     {title: "Tab 1", content: "Content 1"},
    //     {title: "Tab 2", content: "Content 2"},
    //     {title: "Tab 3", content: "Content 3"},
    // ]

    // let names = ["Morgase", "Moraine", "Mat", "Perrin", 
    //     "Rand", "Egwene", "Nyaeve", "Min", "Thom", "Julien"]
    
    return (
        <section className="root">
            {/* <Clock />
            <Clicker />
            <Tabs tabs={tabs} />
            <Autocomplete names={names} /> */}
            <SlidingPuzzle />

        </section>
    )
    
}

export default Root