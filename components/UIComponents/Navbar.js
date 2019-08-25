import React from 'react'
import '../../styles/navbar.css'

const Navbar=()=>{
  return(
    <div>
      <nav className="navbar" id="navbar">
        <a className="navbar-brand" href="#">Navbar</a>
        <nav>
          <ul>
            <li className="current">
            <a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </nav>
      </nav>
    </div>
  )
}

export default Navbar