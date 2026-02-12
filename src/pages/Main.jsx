import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import ScrollView from './ScrollView'

const Main = () => {
  return (
    <div className='container-fluid curved-div'>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <NavigationBar />
      </div>

      <Switch>
        <Route exact path='/' component={ScrollView}></Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default Main
