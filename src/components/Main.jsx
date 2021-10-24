import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import NavigationBar from './NavigationBar'
import Footer from './Footer'

const Main = () => {
  return (
    <div className='animation-box'>
      <Router>
        <NavigationBar />
        <Footer />
      </Router>
    </div>
  )
}

export default Main
