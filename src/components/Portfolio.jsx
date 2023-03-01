import React from 'react'
import projectsList from '../helpers/projectsList'
import PortfolioEntryCard from './PortfolioEntryCard'

const Portfolio = () => {
  return (
    <div className='container'>
      <h1>Portfolio</h1>

      <p>
        I am currently publishing my work and building my online portfolio It
        grows bigger day by day! It consists mainly of React apps I deployed to
        Netlify.
      </p>
      <p>Some apps include:</p>
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
