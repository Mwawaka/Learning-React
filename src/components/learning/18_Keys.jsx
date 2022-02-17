// LESSON 18 -KEYS 
// use class component 

import React, { Component } from "react";

class Keys extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [{
                namey: "Boston",
                id: 3
            },
                {
                    namey: "Chicago",
                    id: 2
                },
                {
                    namey: "Woodely",
                    id: 1
                }],
        };
    }
    // variable cannot be declared in this scope
    render() {   //   error arises due to lack of keys
        
        
        // using the index
        // const towns = this.state.data.map((town,index) => <TownList key={index} town={town} />);

        // Normal method
        const towns = this.state.data.map(town => <TownList key={town.namey} town={town }/>)
        //   adding the keys which should be unique so we can use the id/namey anything which is unique can apply
        // we use the object town in the map to access the id which we assign to the key 
        // Key prop cannot be accessed by the child components
        return (
            <div>
                <h1>My Hoods </h1>
                {towns}
            </div>
        );
    }
}

export default Keys;

function TownList({ town}) {
    return (
        <div>
            <h2>{town.namey}</h2>
        </div>
    );
}
// Purpose of Keys
// Helps React identify which elements have changed or been added so that it can be able to update the UI

// Key is a special string attribute you need to include when creating lists of elements.

// Index key as an anti-pattern
// eg const names=['Boston','Chicago','Woodely']
// in the array above it doesn't have a unique id so we can use the names as the key since they are unique
// Although if the names are duplicate then we cannot use it as an Id thus the option is using index of the list
// the arrow function will receive two parameters eg (town,index) key={index}

// Conditions for using Key anti-patterns
// Items don,t have a unique id
// Static list/never changes
// List will never be ordered or filtered