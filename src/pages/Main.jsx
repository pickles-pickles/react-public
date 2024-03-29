import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import Home from './Home'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'

const Main = () => {
  return (
    <div className='container-fluid curved-div'>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <NavigationBar />
      </div>

      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/portfolio' component={Portfolio}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/contact' component={Contact}></Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default Main
