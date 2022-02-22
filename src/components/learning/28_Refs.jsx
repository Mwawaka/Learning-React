// //  Learning about Refs that makes us to access DOM nodes within react

// //  REFS ON DOM ELEMENTS




// //  code for focusing on an input

// import React, { Component } from 'react'

// class Refs extends Component {
//      constructor(props) {
//        super(props)
//     //  we're creating a new property and to the property we are assigning a new ref by using React.createRef()
//          this.inputRef=React.createRef()//created inside the constructor so that they can be referenced throughout the component
//     }

//     componentDidMount() {
//         // calling the focus method on the current property
//         this.inputRef.current.focus()// focus on the input when we reload the page
//         // this will output current property onto which we will focus
//         // console.log(this.inputRef);

//     }
//   render() {
//     return (
//         <div>
//             {/* We attach the property to our input element  */}
//             <input type="text" ref={this.inputRef }/>
//       </div>
//     )
//   }
// }

// export default Refs







// Second use case to fetch the input values



// import React, { Component } from "react";

// class Refs extends Component {
//   constructor(props) {
//     super(props);
//     this.refInput = React.createRef();// used to create refs
//   }
//   componentDidMount() {
//     this.refInput.current.focus(); // This is the main syntax
//     }
//     clickHandler = () => {
//         alert(this.refInput.current.value);
//         // accessing the value property of the input DOM node which is available as the current property
//         // will display the input value
//     }
//   render() {
//     return (
//       <div>
//             <input type="text" ref={this.refInput} />
//             <button onClick={this.clickHandler}>Click</button>
//             {/* Remeber that onClick contains a component that is to be executed when an event is fired through clicking of the button  */}
//       </div>
//     );
//   }
// }

// export default Refs;





// Using refs with class Components
import React, { Component } from 'react'

class Refs extends Component {
    constructor(props) {
      super(props)
    
        this.rInp = React.createRef();
    }
    // method that when called will cause the focus to be on the input
  
    focusInput() {
        this.rInp.current.focus();
    }
  render() {
    return (
        <div>
            <input type="text" ref={this.rInp} />
            
          </div>
    )
  }
}

export default Refs
// We'll create a parent component for this Ref component name :Focus