/* import React from "react";

// this is a stateless Functional component
export const Greet = () => <h1>Hello Mwawaka</h1>;
// export default Greet;
//For us to use the component in App.js we have to export the function
 */





// using the ES6 classes

/* import React from "react"
class Greet extends React.Component{
  render(){
    return <h1>Welcome To Silicon Valley Sahara</h1>
  }
}
export default Greet */





// Creating elements without using JSX

/* import React from "react";
const Greet =()=>{
    return React.createElement('div',{id:'mafia',className:'Rupee'},React.createElement('h1',null,'Hello Machiavelli'));
}// the create emement can take a minimum of 3 parameters,where there is the null we can add attriutes of the elements which are in form of objects
export default Greet  */




// Using props in the functional components
/* import React from "react";
const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} {props.heroName} 
      </h1>
      {props.children}
    </div>
  );
};
export default Greet; */





// Using Classes with props
/* import React from "react";
class Greet extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.name} </h1> {this.props.children}
      </div>
    );
  }
}
export default Greet;
 */



// Destructuring of props

/* import React from "react";
// here we have destructured the prop in the function parameter 
// const Greet = ({ name, heroName }) =>
const Greet = (props) => {
  // here we have destructured the prop in the function body
const{name,heroName}=props
  return(<div>
    <h1>
      Welcome {name} {heroName}
    </h1>
  </div>)
}
export default Greet */
