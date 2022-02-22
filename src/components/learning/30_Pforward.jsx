// This is the Parentcomponent of the Cforward and it is a class component

import React, { Component } from 'react'
import Cforward from './3_Cforward'
class Pforward extends Component {
  constructor(props) {
    super(props)
    // first step is to create a ref
    // creating the ref of the Parent component
    this.pRef = React.createRef();
  }
  clickHandler = () => {
    this.pRef.current.focus()
  }
  render() {
    return (
      <div>
        <Cforward ref={this.pRef} />
       {/* Attached the ref of the parent class component to the child functional component */}
        {/* Imported the function component of the child component Cforward */}
       
        {/* We have to forward the ref to the ref of  functional component which is an attribute of the input */}
        <button onClick={this.clickHandler}>Focus Input</button>
        {/* click the button in the parent component the input in the child component should recieve focus */}
      </div>
    )
  }
}

export default Pforward



// CLEAN VERSION
import React, { Component } from 'react'
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

export default Pforward


















