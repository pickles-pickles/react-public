import './App.css'
import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import ThemeDetector from './components/ThemeDetector'

const Main = React.lazy(async () => {
  const [moduleExports] = await Promise.all([
    import('./pages/Main'),
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
  return moduleExports
})

function App () {
  return (
    <div className='App'>
      <Router>
        <React.Suspense
          fallback={
            <div className='loader-stage'>
              <span className='loader'></span>
            </div>
          }
        >
          <Main />
          <ThemeDetector />
        </React.Suspense>
      </Router>
    </div>
  )
}

export default App
