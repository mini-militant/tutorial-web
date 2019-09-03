import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from '../Home'
import Environment from '../Environment'
import Layout from './Layout'

const InternalPageRouting=()=>{
  return(
    
     <Switch>
    <Route exact path='/react/home' component={Home}/>
    <Route  path='/react/environment' component={Environment}/>
  </Switch>
  
  )
 
}

export default InternalPageRouting;