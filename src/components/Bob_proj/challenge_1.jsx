// // challenge 1
// import React from 'react'

// function Challenge_1() {
//   return (
//     // used a React.Fragments to prevent creating a node which could have been created using <div> tag
//     <>
//       {/* div is the parent element and the other elements are its children */}
//       <img src="logo192.png" alt="React logo" width="40px"/>
//       <h1>Fun facts about React</h1>
//       <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan walke</li>
//         <li>Has well over 100K stars in Github</li>
//         <li>Maintained by facebook</li>
//       </ul>
//       </>
//   )
// }

// export default Challenge_1

// QUIIZ
// 1.Why do we need to import React from 'react' in our files?
// Because the JSX syntax is defined in React thus we could not be able to use it without importing React

// Difference between declarative and imperative
// Declarative -tell the computer what to handle the details
// Imperative -tell computer what it should do stepwise

// Composable-We have small pieces that we can put together to make sth  larger than the individual pieces

// Lesson 2

// Funcitons in react are called Component
// Use PascalCase for naming Components
// Instead of calling the components using the conventional method eg.Clickhandle(),we use tags <ClickHandle />

// import React from 'react'

// function Challenge_1() {
//   return (
//     <div>
//       <header>
//         <nav>
//           <img src="logo192.png" alt="React logo" width='40px' />
//           <h1>Reasons for Learning React</h1>
//         </nav>
//       </header>
//       <section>
//         <ol>
//           <li>Was first released in 2013</li>
//           <li>Was originally created by Jordan walke</li>
//           <li>Has well over 100K stars in Github</li>
//           <li>Maintained by facebook</li>
//         </ol>
//       </section>
//       <footer>
//         <small>@ 2021 Waka development. All rights reserved.</small>
//         {/* reduces the size of the text */}
//       </footer>
//     </div>
//   )
// }

// export default Challenge_1

// QUIZ
// What is a React component ?  a function that return React elements
// What is an element ? a JS object that is created when we return JSX-(regular Dom elements)

// LESSON 3
// Creating Parent and Child Components

import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";


// Component that contains header



// components that were previously here have been written in their respective files ,for the components to be used they have to be imported 


// page is the Parent component since it renders the other components(child component)
function Page() {
  return (
    <div>
      <Header/>
      <MainContent />
      <Footer />
    </div>
  );
}
export default Page;


//In React we use className which substitutes the class attribute in HTML since class is a reserved keyword in React
// Similar to :  const ul = document.createElement ("ul")
                // ul.className=" nav_bar"  we have created an unordered list element and then assigned it the className nav-bar
// The browser does not understand JSX ,therefore JSX needs to be converted to regular JS so that the browser can understand ,this can be done by use of Babel transpiler or by creating a React App

// we can also create custom links to our images ,whereby we import the image eg
//  import reactLogo from "./images/logo192.png"" -the reactLogo references the location of the image file
//  <img src ={reactLogo} alt="React Logo"/>