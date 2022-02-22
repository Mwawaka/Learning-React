// LESSON 31 PORTALS
// Provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component

import React from 'react'
import ReactDOM  from 'react-dom'
function Portal() {

    //   Changing the element from root to portal-root
    return ReactDOM.createPortal(
    //   this method takes in two parameters the JSX and DOM node to mount the element on to
    // The first parameter can be any elements that react can render
      <h1>Portals Demo</h1>,
      document.getElementById("root-portal")
    
      
  )
}

export default Portal