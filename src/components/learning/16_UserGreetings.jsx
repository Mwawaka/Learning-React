// Lesson 16
// CONDITIONAL RENDERING
// USE OF IF ELSE STATEMENT
import React, { Component } from 'react';

class UserGreetings extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
    // the message should be conditionally rendered based on the state thus we use conditional statements

    render() {
      if (this.state.isLoggedIn) {
          return <div>
          <div>Welcome Mwawaka to React</div>
         
    </div>;
        }
      else {
          return <div>Welcome Guest</div>
        }
      
  }
}

export default UserGreetings;




// USING ELEMENT VARIABLES
import React, { Component } from 'react';

class UserGreetings extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }
  

    render() {
        let message
        if (this.state.isLoggedIn) {
            message = <div>
                <h1>Welcome Miwaka</h1>
            </div>
        } else {
            message = <div>
                <h1>Welcome Guest</h1>
            </div>
        }
        return <div>{message}</div>
        // returning the element that contains the message to be displayed so that it can be rendered
    
  }
}

export default UserGreetings;




// USING THE CONDITIONAL OPERATOR/TERNARY CONDITION AND IS THE BEST
import React, { Component } from 'react';

class UserGreetings extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
  

    render() {

// we can use the short circuit operator where we want to display only one of the items 
    return this.state.isLoggedIn && <div>Welcome Comikwa</div>
        // return (this.state.isLoggedIn ?
        //     <div>Welcome MongoDB</div> :
        //     <div>Welcome Postgress</div>
        // )
        // The conditional operator condition?exp1:exp 2 if true it chooses expression one and if false it chooses exp2
         
  }
}

export default UserGreetings;