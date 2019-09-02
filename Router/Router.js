import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import App from '../App'
import ReactTutorial from '../components/ReactTutorial'
import ReduxTutorial from '../components/ReduxTutorial'
import JSTutorial from '../components/JSTutorial'
const Router = () => {
  return(
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App}/> 
      <Route path='/react' component={ReactTutorial}/>
      <Route path='/redux' component={ReduxTutorial}/>
      <Route path='/js' component={JSTutorial}/>
    </Switch>
    </BrowserRouter>
  )
}
export default Router