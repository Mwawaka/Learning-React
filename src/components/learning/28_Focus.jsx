
// Parent component of the Ref class component

import React, { Component } from 'react'
import Refs from './3_Refs'

class Focus extends Component {
  // Creating a Ref first
  constructor(props) {
    super(props)

    this.reFocus = React.createRef();
  }
  // creating a click handler function from which we shall call the focusInput method of the child component
  clickHandler = () => {
    this.reFocus.current.focusInput();
    // NB: we are calling the focusInput() method of the Child component  not the normal focus()
  }
  render() {
    return (
      <div>
        <Refs ref={this.reFocus} />
        {/* added the child component  */}
        {/* attach the ref of parent component to the child component /we pass it as a prop to the child component  */}
        {/* SHOULD ONLY BE A CLASS COMPONENT  THEY CANNOT BE ATTACHED TO FUNCTIONAL COMPONENTS  */}


        <button onClick={this.clickHandler}>Focus Input </button>

        {/* When we click on the Focus input button we want the input in the child /Ref component to recieve the focus  */}

        {/* create a clickHandler for the button */}
      </div>
    )
  }
}

export default Focus












































