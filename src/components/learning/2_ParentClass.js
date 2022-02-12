// We,re demonstrating  how methods and props are passed to the parent Component and thhe child Components


import React, { Component } from 'react';
import ChildClass from './2_ChildClass';

class ParentClass extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    // when binding use the method that contains this keyword 
        
  }
  // Mostly binding is done when there is amethod using the this keywords

    // since we passed parameters from the greetHandler in the childComponent we have to add a parameter to the method greetParent so as to be able to use the arguments
    greetParent(childName) {
        alert(`Hello Mr.${this.state.parentName}`)
        alert( `I am the ${childName} of Mr.${this.state.parentName}`)
    }
    
  render() {
      return <div>
          <ChildClass  greetHandler={this.greetParent}/>
         {/* Here we're passing the method of the parent component to the child Component,passing the greetParent reference as a prop  meaning that the greetHandler is the prop*/}
    </div>;
  }
}

export default ParentClass;
