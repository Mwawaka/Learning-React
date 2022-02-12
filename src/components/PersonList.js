import React from "react";

// we're destructuring the prop in the PersonList parameters 
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
