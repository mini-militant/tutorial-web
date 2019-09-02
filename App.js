import React from 'react'
import Router from './Router/Router'
import Navbar from './components/UIComponents/Navbar'
import Cards from './components/UIComponents/Cards'
import {Redirect} from 'react-router-dom'
import * as imgSrc from './components/UIComponents/imgUrl'
import FrontPage from './components/UIComponents/FrontPage'
import Navigation from './components/Navigation'
import NavbarReact from './components/ReactTutorials/NavbarReact'
import ReactTutorial from './components/ReactTutorial'
import './styles/card'
import './styles/style'
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
// https://tylermcginnis.com/react-router-programmatically-navigate/

const REACT='React';
const REDUX='Redux';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isClicked:false
    }
  }

  ReactClicked=()=>{
      this.props.history.push('/react');    
  }
  

  render() {
    
    return (
        <div>
          <Navbar/>          
          <FrontPage/> 
          <div className="container">
            <div className="flex-container">      
              <Cards name={REACT} imgUrl={imgSrc.react_img} />
              <Cards name={REDUX} imgUrl={imgSrc.redux_img} />
              <Cards name="JS" imgUrl={imgSrc.JS_img}/>
       </div>
       </div>            
                 
                
      </div>
    );
  }
}

export default App;