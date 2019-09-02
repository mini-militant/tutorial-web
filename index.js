import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App'
import './styles/style.css';
import {BrowserRouter } from 'react-router-dom'
import {createBrowserHistory} from 'history'

const history=createBrowserHistory ();
render(
  <BrowserRouter history={history}>
  <App />
  </BrowserRouter>, document.getElementById('root'));
