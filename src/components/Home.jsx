import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../components/Form'
import ImageHome from '../assets/laptop.jpg'
import PlaceholderImageHome from '../assets/laptop-mobile-min.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import MaskImage from './MaskImage'
import styled from 'styled-components'
import HomeCard from './cards/Home/HomeCard'

const ContainerDiv = styled.section`
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
`

const Home = () => {
  return (
    <ContainerDiv
      className='row mt-0 pt-4 pt-lg-5 pb-5 pb-md-0'
      id='home-section'
    >
      <div
        id='personal-image-div'
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
            style: {}
          }}
        />
      </div>
      <div className='col-sm-12 text-center col-lg-6'>
        <div className='col-lg-12'>
          <h1 id='title' className='slide-right-to-left-home mt-4 mt-lg-0'>
            I am Chris
          </h1>
          <h2 id='subtitle' className='slide-left-to-right-home'>
            React developer
          </h2>
          <h2 id='subtitle-smaller' className='slide-right-to-left-home-2'>
            MSc in Software Engineering
          </h2>
        </div>

        <div
          className='bg-warning1 d-flex justify-content-center align-items-center position-relative'
          id='home-card-container'
        >
          <HomeCard />
        </div>
      </div>
    </ContainerDiv>
  )
}

export default Home
