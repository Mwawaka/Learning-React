import React from 'react';

function ChildClass(props) {
    // you must pass the props as a parameter
    return <div>
        {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
        {/* Here we're using the prop of greetHandler */}
        <button onClick={()=>props.greetHandler('Child')}>Greet Parent</button>
        {/* We can also pass any number of parameters from the child component to the  parent component by use of arrow functions,however now we call the function() */}
  </div>;
}

export default ChildClass;
