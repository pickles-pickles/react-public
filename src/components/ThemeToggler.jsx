import React, { useState, useEffect } from 'react'
import Toggle from 'react-toggle'

const ThemeToggler = () => {
  const [isLight, setIsLight] = useState(
    window.matchMedia('(prefers-color-scheme: light)').matches
  )

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: light)')
      .addEventListener('change', event => {
        const colorScheme = event.matches ? 'light' : 'dark'
        console.log(colorScheme) // "dark" or "light"
      })

    if (isLight) {
      document.body.classList.remove('dark')
      console.log(document.body.classList)
    } else {
      document.body.classList.add('dark')
      console.log(document.body.classList)
    }
    console.log(window.matchMedia('(prefers-color-scheme: light)'))
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
      <p>{isLight.toString()}</p>
    </>
  )
}

export default ThemeToggler
