import React from 'react'
import Router from './Router/Router'
import Navbar from './components/UIComponents/Navbar'
import Cards from './components/UIComponents/Cards'
import {NavLink} from 'react-router-dom'
import * as imgSrc from './components/UIComponents/imgUrl'
import FrontPage from './components/UIComponents/FrontPage'
import './styles/card'
import './styles/style'
const Navigation =(props)=>{
  return(
    <nav>
      <NavLink to='/'>Home</NavLink> {' | '}      
    </nav>
  )
}

class App extends React.Component {
  render() {
    return (
        <div>
          <Navbar/>          
          <FrontPage/>
        <div className="container">            
          <div className="flex-container">
          <Cards name="React" imgUrl={imgSrc.react_img}/>
          <Cards name="Redux" imgUrl={imgSrc.redux_img}/>
          <Cards name="JS" imgUrl={imgSrc.JS_img}/>
          </div>
          <Router/>          
      </div>
      </div>
    );
  }
}

export default App;