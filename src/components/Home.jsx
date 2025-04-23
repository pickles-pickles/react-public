import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../components/Form'
import ImageHome from '../assets/laptop.jpg'
import PlaceholderImageHome from '../assets/laptop-mobile-min.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import MaskImage from './MaskImage'
import styled from 'styled-components'

const ContainerDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    z-index: -1;
    background-image: url('../../src/assets/Black-Hole-Disc1.jpg');
    background-image: linear-gradient(
      45deg,
      var(--purple-300),
      var(--cyan-600)
    );
    background-size: 100%;
    background-repeat: no-repeat;
  }
`

const Home = () => {
  return (
    <ContainerDiv>
      <div className='containerd'>
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
              I am Chris
            </h1>
            <h2 id='subtitle' className='slide-left-to-right-home'>
              React developer
            </h2>
            <h2 id='subtitle-smaller' className='slide-right-to-left-home-2'>
              MSc in Software Engineering
            </h2>
            {/* <h2 id='subtitle-small' className='slide-left-to-right-home-2'>
            Open to opportunities 
          </h2> */}
            <div className='bg-warning1'>
              <p className='text slide-right-to-left-home-3' id='home-text'>
                I love front-end development, as my work is very close to the
                final user.{' '}
                {/* Learn more
            <Link to='/about'>
              <b> about me</b>
            </Link>{' '}
            or send me a message. */}
              </p>
              <div className='slide-right-to-left-home-4'>
                <Form />
              </div>
            </div>
            <MaskImage />
          </div>
        </div>
      </div>
    </ContainerDiv>
  )
}

export default Home
