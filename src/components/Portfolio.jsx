import React from 'react'

const Portfolio = () => {
  return (
    <div className='container'>
      <h1>Portfolio</h1>

      <p>
        I am currently publishing my work and building my online portfolio It
        grows bigger day by day! It consists mainly of React apps I deployed to
        Netlify.
      </p>
      <p>Some apps include:</p>
      <div className='slide-up'>
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
            href='https://vermillion-weather.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            A Weather app connected to two API
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
        <p className='text'>
          <a
            href='https://github.com/pickles-pickles/recipes/'
            target='_blank'
            rel='noreferrer'
          >
            A full-stack app with vanilla Javascript, Python with Flask and
            mySQL{' '}
          </a>
        </p>
      </div>
    </div>
  )
}

export default Portfolio
