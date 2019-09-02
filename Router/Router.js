import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from '../components/Home'
import ReactTutorial from '../components/ReactTutorial'

const Router = () => {
  return(
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/> 
      <Route path='/react' component={ReactTutorial}/>
    </Switch>
    </BrowserRouter>
  )
}
export default Router