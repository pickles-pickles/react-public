import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div className='container'>
      <Nav className='navbar'>
        <NavItem className='nav-item'>
          <NavLink
            className='nav-link  col-sm-5 col-md-8'
            activeClassName='nav-link-selected'
            exact
            to='/'
          >
            <span className='fa fa-home mr-1'></span>
            <span className='nav-link-text'>Home</span>
          </NavLink>
        </NavItem>
        <NavItem className='nav-item'>
          <NavLink
            className='nav-link  col-sm-5 col-md-8'
            activeClassName='nav-link-selected'
            to='/portfolio'
          >
            <span className='fa fa-address-card mr-1'></span>
            <span className='nav-link-text'>Portfolio</span>
          </NavLink>
        </NavItem>
        <NavItem className='nav-item'>
          <NavLink
            className='nav-link  col-sm-5 col-md-8'
            activeClassName='nav-link-selected'
            to='/about'
          >
            <span className='fa fa-user-alt mr-1'></span>
            <span className='nav-link-text'>About</span>
          </NavLink>
        </NavItem>
        <NavItem className='nav-item'>
          <NavLink
            className='nav-link  col-sm-5 col-md-8'
            activeClassName='nav-link-selected'
            to='/contact'
          >
            <span className='fa fa-telegram  mr-1'></span>
            <span className='nav-link-text'>Contact</span>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  )
}

export default NavigationBar
