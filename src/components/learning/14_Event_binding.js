// LESSON 14 BINDING EVENT HANDLERS

import React, { Component } from 'react';

export class Student extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message:'React'
    }
    this.clickHandler = this.clickHandler.bind(this)
      // this is the most common method used in event binding among others 
  }
  // we use event binding in the case where we want to change state in case their is an event 
  clickHandler() {
    // Before ,the this keyword is undefined in the event handler 
    this.setState({
      message:'I am King of the JS library'
    })
  }
  
  render() {
    return <div>
      <h1>{this.state.message}</h1>
      <button onClick={this.clickHandler}>
        Change Text
      </button>

      {/* we can also use 
      this.clickHandler.bind(this)-causes the component to re-render thus generating a new event handler in every revrender impacting performance */}
    </div>;
  }
}

export default Student;
