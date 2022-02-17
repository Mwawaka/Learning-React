// LESSON 17 LIST RENDERING
// Using functional component 
import React from "react";

// we're destructuring the prop in the PersonList parameters to obtain the property nm which will be use to access the values in the array
function PersonList({nm}) {
  return (
    <div>
      <h2>
        I am {nm.name} and I am {nm.age} and I code using {nm.skill}.
      </h2>
    </div>
  );
}

export default PersonList;
