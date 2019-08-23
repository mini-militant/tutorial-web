import React from 'react'
import Router from './Router/Router'
import Navbar from './components/UIComponents/Navbar'
import {NavLink} from 'react-router-dom'


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
          <Navigation/>
          <Router/>
          
      </div>
    );
  }
}

export default App;