import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </BrowserRouter>
    ,
  </React.StrictMode>,
  document.getElementById('root')
);
