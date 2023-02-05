import React from 'react'
import { Link } from 'react-router-dom'
import Form from './Form'
import imageHome from '../assets/laptop.jpg'
import imageHomeMobile from '../assets/laptop-mobile.jpg'

const Home = () => {
  return (
    <div className='container'>
      <div className='row mt-3'>
        <div
          className='col-sm-12
                col-md-8 offset-md-2
                  col-lg-6 offset-lg-0
                  order-lg-last
                  text-center'
        >
          <picture>
            <source media='(max-width: 664px)' srcSet={imageHomeMobile} />
            <img id='personal-image' src={imageHome} alt='Personal' />
          </picture>
        </div>
        <div className='col-sm-12 text-center col-lg-6  slide-up'>
          <h1 id='title'>I am Christos Georgakopoulos</h1>
          <h2 id='subtitle' className=''>
            Passionate mid-level React developer
          </h2>
          <h2 id='subtitle-smaller' className=''>
            Msc in Sotware Enginnering for Web and Mobile Applications
          </h2>
          <h2 id='subtitle-small' className=''>
            Open to opportunities
          </h2>

          <p className='text'>
            I love front-end development, as my work is very close to the final
            user. You can learn more
            <Link to='/about'>
              <b> about me</b>
            </Link>{' '}
            or send me a message.
          </p>
          <Form />
        </div>
      </div>
    </div>
  )
}

export default Home
