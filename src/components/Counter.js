import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increaseCount() {
    /* this.setState(
      {
        count: this.state.count + 1, // remember the state
      },
      () => {
        // this is the callback function
        console.log("Callback value", this.state.count);
      } //so if you want to execute another function you place it here in the call back function not after the setState function such as in the console.log which will be executed synchronously before the asynchronous setState which is executed last
    );
    console.log(this.state.count);  */

    // we pass a function instead of passing an object
    this.setState(
      (prevState) => ({ count: prevState.count + 1 }) // remember to use the bracketts to enclose what the functon returns
    );

    //you'll notice that the counter in the console is less by 1 than the counter in the UI --this is because the setState method works asynchronously it has two parameters one which is the object and also a callback function
  }

  incrementFive() {
    // At first the counter changes to one and in the console the results are logged five times.This is because react groups setState calls into one update for better performance .Thus all this calls are done in asingle go and the updated value is not increased through the calls .We have to pass a function to the setState method instead of passing an object
    this.increaseCount();
    this.increaseCount();
    this.increaseCount();
    this.increaseCount();
    this.increaseCount();
  }
  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={() => this.incrementFive()}>Add Count</button>
      </div>
    );
  }
}

export default Counter;
