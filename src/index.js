// MAIN JAVASCRIPT FOR THE APP


import React from 'react';
import ReactDOM from 'react-dom';
// import Proj_3 from './components/Bob_proj/project3/Proj_3';
import './index.css';
// // import Practice from './components/learning/Practice'
import App from './App';
// // import Proj2 from './components/Bob_proj/project2/Proj2';
// import Proj_3 from './components/Bob_proj/project3/Proj_3';
// // import Destructuring from './components/learning/4_Destructuring';
// // import Proj1 from './components/Bob_proj/project1/Proj1';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Proj1 /> */}
    {/* <Proj2/> */}
    {/* <Proj_3/> */}
    {/* <Destructuring/> */}
    {/* <Practice /> */}
    {/* imported proj1 component to main index.js */}
  </React.StrictMode>,
  document.getElementById('root')
);


// were we import our app components