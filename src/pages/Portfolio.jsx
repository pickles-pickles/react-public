import React from 'react'
import projectsList from '../helpers/projectsList'
import PortfolioEntryCard from '../components/cards/PortfolioEntryCard'

const Portfolio = () => {
  return (
    <div className='container'>
      <h1>Portfolio</h1>
      <h2>Here is a high-level description of my duties and their impact</h2>
      <div>
        <p>
          Laser-Control App – Medium Company Front-End Developer & Team Lead
          Real-time updates via SSE/WebSockets Led team of 3, code reviews &
          architecture Testing suite & CI/CD pipelines Impact: Stable interface,
          scalable patterns, improved team efficiency
        </p>
      </div>
      <div>
        <p>
          Internal Operations App – Large Corp Junior Front-End Developer
          Efficient pagination & state mgmt Error handling & edge cases Learned
          large-scale front-end Impact: Scalable systems, maintainable code
        </p>
      </div>
    </div>
  )
}

export default Portfolio
