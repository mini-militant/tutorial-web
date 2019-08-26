import React from 'react'
import {NavLink} from 'react-router-dom'
import Cards from './UIComponents/Cards'
import * as imgSrc from './UIComponents/imgUrl'
import '../styles/card'
import '../styles/style'

const Navigation=()=>{
  return(
    <nav>
    <div className="container">
    <div className="flex-container">
      
      <NavLink to='/react'>
      <Cards name="React" imgUrl={imgSrc.react_img}/>
      </NavLink> 
      
      <NavLink to='/redux'>
      <Cards name="Redux" imgUrl={imgSrc.redux_img}/></NavLink>
      
      <NavLink to="/JS">
       <Cards name="JS" imgUrl={imgSrc.JS_img}/>
       </NavLink>
      
       </div>
       </div>
    </nav>
  )
}

export default Navigation