import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../components/Form'
import ImageHome from '../assets/laptop.jpg'
import PlaceholderImageHome from '../assets/laptop-mobile-min.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import MaskImage from './MaskImage'

const Home = () => {
  return (
    <div className='container'>
      <div className='row mt-3'>
        <div
          className='col-sm-12
                col-md-8 offset-md-2
                  col-lg-6 offset-lg-0
                  order-lg-last
                  text-center slide-right-to-left-home-4'
        >
          <LazyLoadImage
            src={ImageHome}
            placeholdersrc={PlaceholderImageHome}
            alt='Image Alt'
            id='personal-image'
            effect='blur'
            wrapperProps={{
              style: {
                /* display: 'inline-block',
                WebkitMaskImage:
                  MaskImage,
                maskImage:
                  
                  MaskImage,
                maskRepeat: 'no-repeat',
                maskSize: 'cover' */
              }
            }}
          />
          {/* <img src={ImageHome} /> */}
        </div>
        <div className='col-sm-12 text-center col-lg-6'>
          <h1 id='title' className='slide-right-to-left-home mt-4 mt-lg-0'>
            I am Christos Georgakopoulos
          </h1>
          <h2 id='subtitle' className='slide-left-to-right-home'>
            React developer
          </h2>
          <h2 id='subtitle-smaller' className='slide-right-to-left-home-2'>
            MSc in Software Engineering for Web and Mobile Applications
          </h2>
          {/* <h2 id='subtitle-small' className='slide-left-to-right-home-2'>
            Open to opportunities
          </h2> */}

          <p className='text slide-right-to-left-home-3' id='home-text'>
            I love front-end development, as my work is very close to the final
            user.{' '}
            {/* Learn more
            <Link to='/about'>
              <b> about me</b>
            </Link>{' '}
            or send me a message. */}
          </p>
          <div className='slide-right-to-left-home-4'>
            <Form />
            <MaskImage/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
