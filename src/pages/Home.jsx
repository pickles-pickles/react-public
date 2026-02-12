import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../components/Form'
import ImageHome from '../assets/laptop.jpg'
import PlaceholderImageHome from '../assets/laptop-mobile-min.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Home = () => {
  return (
    <header className='hero container'>
      <div className='row min-vh-75'>
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
            <span className='highlight-strong'>
              4 years of experience delivering production React applications in
              cross-functional teams.
            </span>
          </p>

          {/* <div className='hero__cta'>
            <a href='#portfolio' className='btn btn-primary'>
              View Portfolio
            </a>
          </div> */}
        </div>
        {/* VISUAL COLUMN */};
        <div className='col-12 col-lg-6 hero__visual'>
          {/* BCC Model Placeholder */}
          <div className='hero__model'>
            <div className='bcc-placeholder'>BCC Lattice Model</div>
          </div>

          {/* Portrait */}
          <div className='hero__portrait'>
            <LazyLoadImage
              src={ImageHome}
              placeholderSrc={PlaceholderImageHome}
              alt='Chris – Front-End Engineer'
              className='hero__image'
              effect='blur'
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Home
