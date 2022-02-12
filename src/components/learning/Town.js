// Example of 
import React, { Component } from "react";

class Town extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { namey: "Kingsley" },
        { namey: "Burnely" },
        { namey: "StockHolm" },
      ],
    };
  }

  render() {
    const nameList = this.state.data.map((name) => <TownDetails name={name} />);
    return (
      <div>
        <h1>Town Names</h1>
        {nameList}
      </div>
    );
  }
}

function TownDetails({ name }) {
  return (
    <div>
      <h2>{name.namey}</h2>
    </div>
  );
}

export default Town;
