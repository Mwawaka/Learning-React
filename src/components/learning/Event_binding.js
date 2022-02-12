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
    </div>;
  }
}

export default Student;

