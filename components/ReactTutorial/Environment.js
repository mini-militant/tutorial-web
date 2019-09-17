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
      <br />
      <Paper className={classes.paper}>
        <br />
        <h2 className={classes.root}>React - Environment Setup</h2>
        <Divider />
        <br />
        <div className={classes.content}>
          <section>
            In this section we will see the setup for successful React development. There are a few prerequisites for setting up the react pojects. We will need NodeJS, so if you have not installed click on the below link.
      </section>
          <br />
          <section>
            <h4>Requirements</h4>
            <section>
              <p>The Create React App is maintained by <b>Facebook</b> and can works on any <b>platform</b>, for example, macOS, Windows, Linux, etc. To create a React Project using create-react-app, you need to have installed the following things in your system.</p>
              <ol>
               <li>Node version >= 8.10</li>
               <li>NPM version >= 5.6</li>
              </ol>
            </section>
          </section>

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
          <section>
          <p>Now, open the <b>src >> App.js</b> file and make changes which you want to display on the screen. After making desired changes, save the file. As soon as we save the file, Webpack recompiles the code, and the page will refresh automatically, and changes are reflected on the browser screen. Now, we can create as many components as we want, import the newly created component inside the App.js file and that file will be included in our main index.html file after compiling by Webpack.</p>
          </section>
          </section>
          <br />
        </div>
      </Paper>
    </div>
  )
}

export default ReactEnvironment;