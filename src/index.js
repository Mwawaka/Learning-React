import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Proj2 from './components/Bob_proj/project2/Proj2';
// import Proj1 from './components/Bob_proj/project1/Proj1';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Proj1 /> */}
    <Proj2/>
    {/* imported proj1 component to main index.js */}
  </React.StrictMode>,
  document.getElementById('root')
);


// were we import our app components