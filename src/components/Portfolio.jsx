import React from 'react'
import projectsList from '../helpers/projectsList'
import PortfolioEntryCard from './PortfolioEntryCard'

const Portfolio = () => {
  return (
    <div className='container'>
      <h1>Portfolio</h1>

      <p className='text'>
        Here are some of my sideprojects. They are <b>live sites</b>, React apps
        I deployed to{' '}
        <a href='https://www.netlify.com/' target='_blank' rel='noreferrer'>
          Netlify
        </a>
        . The last one is a full-stack app that is not live at the moment.
        However, you can visit the{' '}
        <a
          href='https://github.com/pickles-pickles/recipes/'
          target='_blank'
          rel='noreferrer'
        >
          github repo
        </a>{' '}
        to take a look on the code.
      </p>
      <p className='text'>Some apps include:</p>
      {projectsList.map(project => (
        <PortfolioEntryCard
          title={project.title}
          link={project.link}
          stack={project.stack}
          details={project.details}
          key={project.title}
          imgSrc={project.imgSrc}
        />
      ))}
    </div>
  )
}

export default Portfolio
