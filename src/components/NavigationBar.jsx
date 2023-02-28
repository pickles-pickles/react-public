import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div>
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
    </div>
  )
}

export default NavigationBar
