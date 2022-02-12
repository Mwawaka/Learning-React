// States in class componentsimport React from "react";
import React from "react";
class Message extends React.Component {
  constructor() {
    super(); //we are inheriting the constructor of the React.Component class
    this.state = {
      message: "Welcome Visitor!",
    };
  }

  changeMessage() {
    //the setState method accepts an object which defines the new state of the component
    this.setState({
      message: "Thanks for subscribing!",
    });
  }
  render() {
    return (
      <div>
        <h1> {this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );// we listen to the click event and execute the changeMessage method
  }
}
export default Message;
