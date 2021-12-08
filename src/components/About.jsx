//A brief summary and resumé
import React from 'react'
import imageAbout from '../assets/standing-pocket.jpg'
import imageAboutMobile from '../assets/standing-pocket-mobile.jpg'

const About = () => {
  return (
    <div className='container'>
      <div className='row mt-3'>
        <div
          className='col-lg-6 offset-lg-3
                col-md-8 offset-md-2
                text-center'
        >
          <picture>
            <source media='(max-width: 664px )' srcset={imageAboutMobile} />
          </picture>
          <img id='about-image' src={imageAbout} alt='Me' />
        </div>
      </div>
      <div className='slice-up'>
        <div className='row text'>
          <p>
            I am Christos Georgakopoulos, 27 yo. I am a graduate student in{' '}
            <a
              href='https://seima.ds.uth.gr/'
              rel='noopener noreferrer'
              target='_blank'
            >
              Software Enginnering for web and Mobile Applications{' '}
            </a>
            , University of Thessaly, Greece. My Bsc is on Materials Science &
            Enginnering, University of Crete, Greek is my mother tongue and I
            have a Proficiency degree in English.
          </p>
        </div>
        <p className='text'>
          During the pandemic I decided to make a career change and become
          front-end development. I attended webinars and built projects with
          emphasis in the following areas:
        </p>
        <div className='row text'>
          <div className='col-6'>
            <ul>
              <li>SEO</li>
              <li>HTML</li>
              <li>CSS(SCSS &LESS)</li>
              <li>jQuery</li>
            </ul>
          </div>
          <div className='col-6'>
            <ul>
              <li>Javascript</li>
              <li>React.js</li>
              <li>Bootstrap</li>
              <li>git</li>
            </ul>
          </div>
        </div>
        <div className='row text'>
          <p>
            I, also, currently attend{' '}
            <a
              href='https://socialhackersacademy.org/'
              rel='noopener noreferrer'
              target='_blank'
            >
              {' '}
              Athens Social Hackers Academy{' '}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
