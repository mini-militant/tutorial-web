import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import App from '../App'
import Layout from '../components/ReactTutorial/Layout/index'
import ReduxTutorial from '../components/ReduxTutorial'
import JSTutorial from '../components/JSTutorial'
const Router = () => {
  return(
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App}/> 
      <Route path='/react' component={Layout}/>
      <Route path='/redux' component={ReduxTutorial}/>
      <Route path='/js' component={JSTutorial}/>
    </Switch>
    </BrowserRouter>
  )
}
export default Router