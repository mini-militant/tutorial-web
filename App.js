import React from 'react'
import Router from './Router/Router'
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
          <h1>HomePage</h1>
          <Router/>
          <Navigation/>
      </div>
    );
  }
}

export default App;