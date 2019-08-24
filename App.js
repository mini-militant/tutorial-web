import React from 'react'
import Router from './Router/Router'
import Navbar from './components/UIComponents/Navbar'
import Cards from './components/UIComponents/Cards'
import {NavLink} from 'react-router-dom'
import * as imgSrc from './components/UIComponents/imgUrl'

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
          <Cards name="React" imgUrl={imgSrc.react_img}/>
          <Cards name="Redux" imgUrl={imgSrc.redux_img}/>
          
          <Router/>          
      </div>
    );
  }
}

export default App;