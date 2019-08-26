import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from '../components/Home'
import ReactTutorial from '../components/ReactTutorial'

const Router = () => {
  return(
    <Switch>
      <Route exact path='/' component={Home}/> 
      <Route path='/react' component={ReactTutorial}/>
    </Switch>
  )
}

export default Router