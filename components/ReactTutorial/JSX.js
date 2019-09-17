import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  paper: {
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
    paddingLeft: '80px',
    paddingRight: '40px',
    width: '100%',
    height: 'auto',
    textAlign: 'justify',
    fontSize: 15,
    listStyleType: 'square',
  },
  box: {
    backgroundColor: 'black',
    padding: '5px',
    border: '0.01px solid'
  }
}));


const ReactJSX = (props) => {
  const classes = useStyles();
  return (
    <div>
      <br />
      <Paper className={classes.paper}>
        <br />
        <h2 className={classes.root}>React - JSX</h2>
        <br />
        <Divider />
        <br />
        <div className={classes.content}>
          <section>
            <p>
              This funny tag syntax is neither a string nor HTML.It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like.
          </p>
            <h3>Why JSX</h3>
            <p>
              React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code.
          </p>
            
          </section>

        </div>

      </Paper>
    </div>
  )
}

export default ReactJSX