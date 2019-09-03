import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme=>({
  paper:{
    root: {
    padding: theme.spacing(3, 2),
  },
  },
  root: {
    color: 'black',
    textAlign: 'center',
    fontSize: 30,
  },
  content: {
    padding: '5px 40px',
    width: '100%',
    height: 'auto',
    textAlign: 'justify',
    fontSize: 15,
  },
  subheading: {
    paddingLeft: '40px',
    width: '100%',
    height: 'auto',
    textAlign: 'justify',
    fontSize: 23,
    color: '#4f5751'
  },
  list: {
    paddingLeft:'80px',
    paddingRight:'40px',
    width: '100%',
    height: 'auto',
    textAlign: 'justify',
    fontSize: 15,
    listStyleType: 'square',
  },
}));


const ReactHome = (props) => {
  const classes = useStyles();
  return (
    <div>
    <br/>
    <Paper className={classes.paper}>
      <br/>
      <h2 className={classes.root}>What is React?</h2>
      <br/>
      <Divider/>
      <br/>
      <div className={classes.content}><b>ReactJS </b>tutorial provides basic and advanced concepts of ReactJS. Currently, ReactJS is one of the most popular JavaScript front-end libraries which has a strong foundation and a large community. ReactJS is a <b>declarative</b>, <b>efficient</b>, and flexible <b> JavaScript library </b> for building reusable UI components.React is a component based framework used for making <b>reusable</b> User Interface that improves the speed of the apps. It uses virtual DOM, which improves the performance of the app. The Javascript virtual DOM is faster than the regular DOM. </div>

      <div className={classes.content}>It was initially developed and maintained by Facebook and later used in products like Whatsapp & Instagram.</div>

      <h2 className={classes.subheading}>React Features</h2>
      <div >
      <ul className={classes.list}>
        <li><p><b>JSX</b> - It stands for JavaScript Syntax Extension. It is something similar to HTML with some changes.</p></li>
        <li><p><b>Components</b> - ReactJS is all about components. Think of it like the building blocks of a big building. Small functionalities of a big operation are divided into smaller chunks and each of them has its own logic and controls.These components can be reusable which helps you to maintain the code working on larger projects.</p></li>
        <li><p><b>One-way Data Binding</b> - ReactJS is designed in such a way that follows unidirectional data flow or data-binding.If the data flow is in another direction, then it requires additional features. It is because components are supposed to be immutable and the data within them cannot be changed. Flux is a pattern that helps to keep your data unidirectional.</p></li>
        <li><p><b>Virtual DOM</b> - A virtual DOM object is a representation of the original DOM object. It works like a one-way data binding. Whenever any modifications happen in the web application, the entire UI is re-rendered in virtual DOM representation. Then it checks the difference between the previous DOM representation and new DOM. Once it has done, the real DOM will update only the things that have actually changed. This makes the application faster, and there is no wastage of memory. </p></li>
      </ul>
      </div>
      <div className={classes.content}></div>
    </Paper>
    </div>
  )
}

export default ReactHome