import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
//import Home from './Home';
/* import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact'; */

const Home = React.lazy(() => import('./Home'))
const Portfolio = React.lazy(() => import('./Portfolio'))
const About = React.lazy(() => import('./About'))
const Contact = React.lazy(() => import('./Contact'))

const NavigationBar = () => {
  return (
    <div>
      <React.Suspense fallback={<h2>Component Loading ...</h2>}>
        <Router>
          <div className='container'>
            <Nav className='navbar'>
              <NavItem className='nav-item'>
                <Link className='nav-link  col-sm-5 col-md-4' to='/'>
                  <span className='fa fa-home mr-1'></span>Home
                </Link>
              </NavItem>
              <NavItem className='nav-item'>
                <Link className='nav-link  col-sm-5 col-md-4' to='/portfolio'>
                  <span className='fa fa-address-card mr-1'></span>Portfolio
                </Link>
              </NavItem>
              <NavItem className='nav-item'>
                <Link className='nav-link  col-sm-5 col-md-4' to='/about'>
                  <span className='fa fa-user-alt mr-1'></span>About
                </Link>
              </NavItem>
              <NavItem className='nav-item'>
                <Link className='nav-link  col-sm-5 col-md-4' to='/contact'>
                  <span className='fa fa-telegram  mr-1'></span>Contact
                </Link>
              </NavItem>
            </Nav>
          </div>

          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/portfolio' component={Portfolio}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/contact' component={Contact}></Route>
          </Switch>
        </Router>
      </React.Suspense>
    </div>
  )
}

export default NavigationBar
