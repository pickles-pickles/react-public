import './App.css'
import React from 'react'

//import Main from './components/Main';

const Main = React.lazy(() => import('./components/Main'))

function App () {
  return (
    <div className='App'>
      <React.Suspense fallback={<h2>Component Loading ...</h2>}>
        <Main />
      </React.Suspense>
    </div>
  )
}

export default App
