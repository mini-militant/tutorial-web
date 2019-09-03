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
    backgroundColor: '#ebedd8',
    padding: '5px',
    border: '0.01px solid'
  }
}));

const ReactEnvironment = (props) => {
  const classes = useStyles();
  return (

    <div>
      <br/>
      <Paper className={classes.paper}>
        <br/>
        <h2 className={classes.root}>React - Environment Setup</h2>
        <Divider />
        <br/>
        <div className={classes.content}>
          <section>
            In this section we will see the setup for successful React development. There are a few prerequisites for setting up the react pojects. We will need NodeJS, so if you have not installed click on the below link.
      </section>
          <br />
          <section>
            <h4><a href="https://nodejs.org/en/">NodeJS Environment Setup</a></h4>
          </section>
          <section>
            <p>Installing the easy way : Using create-react-app command</p>
            <h5>Step 1: Install create-react-app</h5>
            <div className={classes.box}>
              npx create-react-app my-app
          </div><br />

            <h5>Step 2: Navigate to created folder</h5>
            <div className={classes.box}>
              cd my-app
          </div><br />

            <h5>Step 3: Run</h5>
            <div className={classes.box}>
              npm start
          </div>

          </section>
          <br />
        </div>
      </Paper>
    </div>
  )
}

export default ReactEnvironment;