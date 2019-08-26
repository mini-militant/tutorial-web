import React from 'react'
import Router from './Router/Router'
import Navbar from './components/UIComponents/Navbar'
import Cards from './components/UIComponents/Cards'

import * as imgSrc from './components/UIComponents/imgUrl'
import FrontPage from './components/UIComponents/FrontPage'
import Navigation from './components/Navigation'
import './styles/card'
import './styles/style'


class App extends React.Component {
  render() {
    return (
        <div>
          <Navbar/>          
          <FrontPage/>             
          <Navigation/>          
          <Router/>          
      </div>
    );
  }
}

export default App;