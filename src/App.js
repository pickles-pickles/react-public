import './App.css'
import React from 'react'

const Main = React.lazy(async () => {
  const [moduleExports] = await Promise.all([
    import('./components/Main'),
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
  return moduleExports
})

function App () {
  return (
    <div className='App'>
      <React.Suspense
        fallback={
          <div className='loader-stage'>
            <span className='loader'></span>
          </div>
        }
      >
        <Main />
      </React.Suspense>
    </div>
  )
}

export default App
