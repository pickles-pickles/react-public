import React, { useState, useEffect } from 'react'
import Toggle from 'react-toggle'

const ThemeToggler = () => {
  const [isLight, setIsLight] = useState(
    window.matchMedia('(prefers-color-scheme: light)').matches
  )

  const [isAutoDark, setIsAutoDark] = useState(false)

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

  useEffect(() => {
    if (
      window.matchMedia('(prefers-color-scheme: dark)').matches &&
      window.innerWidth < 768 //apply only to medium and smaller screens
    ) {
      setIsAutoDark(true)
    }
  }, [])

  return (
    <>
      <Toggle
        checked={isLight}
        onChange={({ target }) => {
          setIsLight(target.checked)
          console.log('is checked', target.checked)
        }}
        icons={{ checked: '🔆', unchecked: '🌙' }}
        disabled={isAutoDark}
        aria-label='Dark mode toggle'
      />
      <p>{isLight.toString()}</p>
    </>
  )
}

export default ThemeToggler
