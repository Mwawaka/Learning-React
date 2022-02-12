import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //    means that the state of the value is set to an empty string
        username: "",
        email:''
    };
  }
// Reacts eevents are named using camelCase 
  handleText = (event) => {
    // setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state
    this.setState({ username: event.target.value });
    };
    handleEmail = (event) => {
        this.setState(
            {
                email: event.target.value
                // target returns  the element that triggerd the event ,it gets the element on which the event originally occured
        }
        )
    }

  render() {
    return (
      <form>
        <label>Username:</label>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleText}
            />
            <br />
            <label>Login:</label>
            {/* input is not visible due to the attribute value*/}
            <input type='email' value={this.state.email} onChange={this.handleEmail}></input>
      </form>
    );
  }
}

export default Form;
