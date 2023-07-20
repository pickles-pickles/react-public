import React, { useState, useEffect } from 'react'
import Toggle from 'react-toggle'

const ThemeToggler = () => {
  const [isLight, setIsLight] = useState(true)

  useEffect(() => {
    if (isLight) {
      document.body.classList.remove('dark')
    } else {
      document.body.classList.add('dark')
    }
  }, [isLight])

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: light)')) {
      console.log('light')
      setIsLight(true)
    } else if (window.matchMedia('(prefers-color-scheme: dark)')) {
      console.log('dark')
      setIsLight(false)
    }
  }, [])

  return (
    <Toggle
      checked={isLight}
      onChange={({ target }) => {
        setIsLight(target.checked)
        console.log(target.checked)
      }}
      icons={{ checked: '🔆', unchecked: '🌙' }}
      aria-label='Dark mode toggle'
    />
  )
}

export default ThemeToggler
