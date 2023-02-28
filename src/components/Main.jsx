import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import NavigationBar from './NavigationBar'
import Footer from './Footer'
//import Home from './Home';
/* import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact'; */
const Home = React.lazy(() => import('./Home'))
const Portfolio = React.lazy(() => import('./Portfolio'))
const About = React.lazy(() => import('./About'))
const Contact = React.lazy(() => import('./Contact'))

const Main = () => {
  return (
    <div className='animation-box'>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/portfolio' component={Portfolio}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/contact' component={Contact}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default Main
