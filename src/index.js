import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Proj1 from './components/Bob_proj/project1/Proj1';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Proj1 />
    {/* imported proj1 component to main index.js */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
