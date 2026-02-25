import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../components/Form'
import ImageHome from '../assets/laptop.jpg'
import PlaceholderImageHome from '../assets/laptop-mobile-min.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styled from 'styled-components'
import HomeCard from './cards/Home/HomeCard'
import BCCLatticeScene from './3D/BCCLatticeScene'

const ContainerDiv = styled.section`
  height: max(100vh, 550px);
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
    <ContainerDiv className='mt-0 pt-4 pt-lg-5 pb-5 pb-md-0' id='home-section'>
      <div className='row' id='home-section-container'>
        {/*  */}
        <div className='col-12 col-lg-6 hero__content'>
          <h1 className='slide-right-to-left-home mt-4 mt-lg-0 hero__title'>
            I’m <span className='highlight'>Chris</span>
          </h1>
          {/*  */}

          <p className='hero__role slide-left-to-right-home'>
            Front-End Engineer with a background in Materials Science and
            Software Engineering.
          </p>

          <p
            className='hero__experience slide-right-to-left-home-2'
            id='subtitle-smaller'
          >
            <span className='highlight-strong'>
              4 years of experience delivering production React applications in
              cross-functional teams.
            </span>
          </p>
        </div>
        {/* VISUAL COLUMN */}
        <div className='col-12 col-lg-6 hero__visual'>
          {/* BCC Model Placeholder */}
          <div className='hero__model'>
            <div className='bcc-placeholder'>
              {/* BCC Lattice Model */}
              <BCCLatticeScene />{' '}
            </div>
          </div>
        </div>
      </div>
    </ContainerDiv>

    /* <div
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
        </div> */
  )
}

export default Home
