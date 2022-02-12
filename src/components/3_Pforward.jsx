// This is the Parentcomponent of the Cforward and it is a class component

import React, { Component } from 'react'
import Forwarding from './3_Cforward'

export class Pforward extends Component {
  constructor(props) {
    super(props)
    // first step is to create a ref
    this.pRef = React.createRef();
  }
  clickHandler = () => {
    this.pRef.current.focus()
  }
  render() {
    return (
      <div>
        <Forwarding ref={this.pRef} />
        {/* Imported the function component of the child component Cforward */}
        {/* Attach the ref to the functional component */}
        {/* We have to forward the ref to the ref of  functional component which is an attribute of the input */}
        <button onClick={this.clickHandler}>Focus Input</button>
        {/* click the button in the parent component the input in the child component should recieve focus */}
      </div>
    )
  }
}

export default Pforward



// CLEAN VERSION
/* import React, { Component } from 'react'
import Forwarding from './3_Cforward'

class Pforward extends Component {
   constructor(props) {
     super(props)
   
     this.pRef = React.createRef();
  }
  clickHandler = () => {
    this.pRef.current.focus();
    alert(this.pRef.current.value)
    // dispalys the input as an alert 
    
  }
  render() {
    return (
      <div>
        <Forwarding ref={this.pRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default Pforward */


















