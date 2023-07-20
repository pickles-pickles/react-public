import React, { useState, useEffect } from 'react'
import Toggle from 'react-toggle'

const ThemeToggler = () => {
  const [isLight, setIsLight] = useState(
    window.matchMedia('(prefers-color-scheme: light)').matches
  )

  useEffect(() => {
    if (isLight) {
      document.body.classList.remove('dark')
      console.log(document.body.classList)
    } else {
      document.body.classList.add('dark')
      console.log(document.body.classList)
    }
  }, [isLight])

  return (
    <>
      <Toggle
        checked={isLight}
        onChange={({ target }) => {
          setIsLight(target.checked)
          console.log('is checked', target.checked)
        }}
        icons={{ checked: '🔆', unchecked: '🌙' }}
        aria-label='Dark mode toggle'
      />
    </>
  )
}

export default ThemeToggler
