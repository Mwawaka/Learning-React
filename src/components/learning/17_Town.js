// LESSON 17
// Example of List rendering
//Using a class component 

import React, { Component } from "react";

class Town extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { namey: "Kingsley" },
        { namey: "Burnely" },
        { namey: "StockHolm" }
      ],
    };
  }

  render() {
    const nameList = this.state.data.map((name) => <TownDetails name={name} />);
    // Towndetails is a component and to the component pass prop called name ,and prop's value  is the elements of the new array created by the map function
    return (
      <div>
        <h1>Town Names</h1>
        {nameList}
        {/* rendering the nameList variable that contains the return values of component TownDetails */}
        {/* an error emerges in the console:Each child in an array or iterate should have a unique key */}
      </div>
    );
  }
}

// Destructuring the prop to obtain the property name 
function TownDetails({ name }) {
  return (
    <div>
      <h2>{name.namey}</h2>
    </div>
  );
}

export default Town;

// Map method -creates a new array with the results of calling a provided function on every element in the calling array/From the array which is being mapped