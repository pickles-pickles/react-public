import './App.css'
import React from 'react'

//import Main from './components/Main';

const Main = React.lazy(() => import('./components/Main'))

function App () {
  return (
    <div className='App'>
      <Main />
    </div>
  )
}

export default App
