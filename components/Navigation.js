import React from 'react'
import {NavLink} from 'react-router-dom'
import Cards from './UIComponents/Cards'
import * as imgSrc from './UIComponents/imgUrl'
import '../styles/card'
import '../styles/style'

const Navigation=()=>{
  return(
    <nav>
      <NavLink to='/'>      
      </NavLink>
    </nav>
  )
}

export default Navigation