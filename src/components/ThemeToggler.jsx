import React, { useState, useEffect } from 'react'
import Toggle from 'react-toggle'

const ThemeToggler = () => {
  const [isLight, setIsLight] = useState(
    window.matchMedia('(prefers-color-scheme: light)').matches
  )

  const [isAutoDark, setIsAutoDark] = useState(false)

  useEffect(() => {
    if (isLight) {
      document.body.classList.remove('dark')
    } else {
      document.body.classList.add('dark')
    }
  }, [isLight])

  useEffect(() => {
    if (
      window.matchMedia('(prefers-color-scheme: dark)').matches &&
      window.innerWidth < 768 //apply only to medium and smaller screens
    ) {
      setIsAutoDark(true)
    }
  }, [])

  return (
    <div>
      <Toggle
        checked={isLight}
        onChange={({ target }) => {
          setIsLight(target.checked)
        }}
        icons={{ checked: '🔆', unchecked: '🌙' }}
        disabled={isAutoDark}
        aria-label='Dark mode toggle'
      />
      {isAutoDark && (
        <p
          style={{
            border: '1px dashed #d2d2d2',
            padding: '2px',
            borderRadius: '2px'
          }}
        >
          {'🌙 set by device'}
        </p>
      )}
    </div>
  )
}

export default ThemeToggler
