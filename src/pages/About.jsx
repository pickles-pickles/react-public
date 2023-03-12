//A brief summary and resumé
import React from 'react'
import StackCard from '../components/cards/StackCard'

const About = () => {
  return (
    <div className='d-flex flex-row'>
      <div className='side-container'>
        <StackCard />
      </div>
      <div className='container'>
        <div className='row text'>
          <p>
            I am Christos Georgakopoulos, 29 yo. I am a passionate front-end
            developer that currently is expanding his online presence. My{' '}
            <b>Msc</b> in on <b>Software Engineering for Web and Mobile Apps</b>
            , University of Thessaly. My thesis topic is:{' '}
            <b>'Investigation and Implementation of Quntum Algorithms'</b>. My
            Bsc is on <b>Materials Science & Enginnering</b>, University of
            Crete, Greek is my mother tongue and I have a Proficiency degree in
            English. In my spare time, I delve into full-stack, data analysis
            with RapidMiner and strolling around quantum computation ideas.
          </p>
        </div>
        <p className='text'>
          During the pandemic, -almost 3 years before my Msc studies and my
          first job as a web dev- I decided to make a career change and become
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
              <li>git/ github</li>
            </ul>
          </div>
        </div>
        <p className='row text'>
          I have used Jira in a professional environment.
        </p>
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
          <a href='https://drive.google.com/file/d/1sUmc_BFLvq_Fn4NnfuJ8OU-oXyqM_cIk/view?usp=sharing'>
            {' '}
            my Google Drive{' '}
          </a>
        </div>
        <p className='row text'>If you believe that I have more </p>
      </div>
      <div className='side-container'></div>
    </div>
  )
}

export default About
