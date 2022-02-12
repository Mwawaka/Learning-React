// Forwarding is a technique for automatically passing a ref through a parent component to one of  its children

// fuctional component which is the Parent component
import React from "react";

// changing the code to an arrow function so that it can be able to receive the ref created in the class component
const Forwarding = React.forwardRef(
  (props,ref) => {
    // every functional component recieves props as its parameters .however sice the func component is a parameter of forward ref it will also have a second parameter which is the ref
    return (
      <div>
        <input type="text" ref={ref} />
        {/* to the ref attribute we pass the ref parameter of the functional component */}
        {/* ref parameter points to the value of the ref attribute from the ref parent component */}
      </div>
    );
  });
// forwardRef takes in a component as its parameter and in this case it is the functional component


export default Forwarding;




// CLEAN FORMAT
/* import React from 'react'

const Forwarding=React.forwardRef((props,ref) => {
  return (
    <div>
      <input type="text" ref={ref}/>
    </div>
  )
})
export default Forwarding; */
