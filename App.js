import React from 'react'
import Router from './Router/Router'
import Navbar from './components/UIComponents/Navbar'
import Cards from './components/UIComponents/Cards'

import * as imgSrc from './components/UIComponents/imgUrl'
import FrontPage from './components/UIComponents/FrontPage'
import Navigation from './components/Navigation'
import './styles/card'
import './styles/style'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isClicked:false
    }
  }

  onClick=()=>{
    console.log('cllicked from react');
  }

  render() {
    return (
        <div>
          <Navbar/>          
          <FrontPage/> 
          <div className="container">
            <div className="flex-container">      
              <Cards name="React" imgUrl={imgSrc.react_img} reactClicked={this.onClick}/>
              <Cards name="Redux" imgUrl={imgSrc.redux_img}/>
              <Cards name="JS" imgUrl={imgSrc.JS_img}/>
       </div>
       </div>            
                 
          <Router/>       
      </div>
    );
  }
}

export default App;