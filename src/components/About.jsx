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
            I am Christos Georgakopoulos, 27 yo. I am a passionate front-end
            developer that currently is expanding his online presence. My Bsc is
            on Materials Science & Enginnering, University of Crete, Greek is my
            mother tongue and I have a Proficiency degree in English. In my
            spare time, I delve into full-stack, data analysis with RapidMiner
            and strolling around quantum computation ideas.
          </p>
        </div>
        <p className='text'>
          During the pandemic, I decided to make a career change and become
          front-end development. I attended webinars and built projects with
          emphasis in the following areas:
        </p>
        <div className='row text'>
          <div className='col-6'>
            <ul>
              <li>SEO</li>
              <li>HTML, CSS(SCSS &LESS), Javascript</li>
              <li>jQuery</li>
              <li>Bootstrap, Tailwind, Material UI</li>
            </ul>
          </div>
          <div className='col-6'>
            <ul>
              <li>React.js</li>
              <li>Redux</li>
              <li>Typescript</li>
              <li>git</li>
            </ul>
          </div>
        </div>
        <div className='row text'>
          <p>
            I, also, just graduated from{' '}
            <a
              href='https://www.lastingdynamics.com/academy/'
              rel='noopener noreferrer'
              target='_blank'
            >
              {' '}
              Lasting Dynamics Academy{' '}
            </a>
          </p>
        </div>
        <div className='row text'>
          You can view or download my CV from &nbsp;{' '}
          <a href='https://drive.google.com/file/d/1lxt_M7WLeptIjoWkjM0g--whyXc9OxOP/view?usp=sharing'>
            {' '}
            my Google Drive{' '}
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
