import React, { useEffect } from 'react'

const ThemeDetector = ({ setIsAutoDark }) => {
  // If the computed style is not white then the page is in Auto Dark Theme.
  const isAutoDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  // Update element styles when Auto Dark Theme is applied.

  useEffect(() => {
    if (isAutoDark && window.innerWidth < 768) {
      //apply to medium screens and lower as they only have a problem
      setIsAutoDark(isAutoDark)
    }
  }, [setIsAutoDark, isAutoDark])
  return (
    <div
      style={{
        display: 'none',
        backgroundColor: 'canvas',
        colorScheme: 'light'
      }}
      id='detection'
    ></div>
  )
}

export default ThemeDetector
