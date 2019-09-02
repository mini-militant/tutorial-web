import React, { Component } from 'react';
import { render } from 'react-dom';
import Router from './Router/Router'
import './styles/style.css';
import {BrowserRouter } from 'react-router-dom'
import {createBrowserHistory} from 'history'

const history=createBrowserHistory ();
render(
  <BrowserRouter history={history}>
  <Router />
  </BrowserRouter>, document.getElementById('root'));
