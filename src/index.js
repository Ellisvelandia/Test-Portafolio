import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
  </BrowserRouter>
);
