// LESSON 13 ON EVENT HANDLING

import React from 'react';

function FunctionClick() {
    function clickHandler(){
       console.log('Button clicked');// display button clicked in the console
    }
 return <div>
      
     <button onClick={clickHandler}>Click Me</button>{/*Here we did not use the brackets in the function since we're not calling the function if we did it would have displayed button clicked even before we clicked the button */}
  </div>;
}

export default FunctionClick;




// using event handlers in class components 
import React, { Component } from 'react';

class Click extends Component {
  clickHandler() {
     console.log('Button Clicked');
   }
  render() {
    return <div>
        
      <button onClick={this.clickHandler}>CLICK ME</button>
      
    </div>;
  }
}

export default Click;