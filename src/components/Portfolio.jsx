import React from 'react'

const Portfolio = () => {
  return (
    <div className='container'>
      <h1>Portfolio</h1>

      <p>
        I am currently building my portfolio and it grows bigger day by day. It
        consists mainly of React apps I deployed to Netlify.
      </p>
      <p>Some apps include:</p>
      <p className='text'>
        {' '}
        <a
          href='https://e-magazi.netlify.app/'
          target='_blank'
          rel='noreferrer'
        >
          A demo e-shop
        </a>
      </p>
      <p className='text'>
        <a
          href='https://o-kairos-simera.netlify.app/'
          target='_blank'
          rel='noreferrer'
        >
          A Weather app connected to an API
        </a>
      </p>
      <p className='text'>
        <a
          href='https://trello-clone-1234.netlify.app/'
          target='_blank'
          rel='noreferrer'
        >
          A trello clone still in process
        </a>
      </p>
      <p className='text'>
        <a
          href='https://pickles-pickles.github.io/'
          target='_blank'
          rel='noreferrer'
        >
          A funny gh-pages site{' '}
        </a>
      </p>
    </div>
  )
}

export default Portfolio
