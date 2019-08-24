import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App'
import './styles/style.css';
import {BrowserRouter} from 'react-router-dom'



render(
  <BrowserRouter>
  <App />
  </BrowserRouter>, document.getElementById('root'));
