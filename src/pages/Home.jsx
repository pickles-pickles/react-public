import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../components/Form'
import ImageHome from '../assets/laptop.jpg'
import PlaceholderImageHome from '../assets/laptop-mobile-min.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Home = () => {
  return (
    <header className='hero container'>
      <div className='row align-items-center min-vh-75'>
        {/* Visual Column */}
        <div
          className='
      col-12
      col-lg-6
      order-lg-2
      text-center
      hero__visual
    '
        >
          <LazyLoadImage
            src={ImageHome}
            placeholderSrc={PlaceholderImageHome}
            alt='Chris – Front-End Engineer'
            className='hero__image'
            effect='blur'
          />
        </div>

        {/* Text Column */}
        <div className='col-12 col-lg-6 hero__content'>
          <h1 className='hero__title'>
            I’m <span className='highlight'>Chris</span>
          </h1>

          <p className='hero__role'>
            Front-End Engineer with a background in Materials Science and
            Software Engineering.
          </p>

          <p className='hero__experience'>
            4 years of experience delivering production React applications in
            cross-functional teams.
          </p>

          <div className='hero__cta'>
            <a href='#portfolio' className='btn btn-primary'>
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Home
