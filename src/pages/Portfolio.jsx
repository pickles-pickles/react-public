import React from 'react'
import projectsList from '../helpers/projectsList'
import PortfolioEntryCard from '../components/cards/PortfolioEntryCard'

const Portfolio = () => {
  return (
    <div className='container'>
      <h1>Portfolio</h1>
      <h2>Selected professional projects and their impact.</h2>
      {/* ===== PROJECT 1 ===== */}
      <article className='portfolio__project'>
        <header>
          <h3>Laser-Control Application</h3>
          <p className='portfolio__meta'>
            Medium-sized technology company · Front-End Developer → Team Lead
          </p>
        </header>

        <div className='portfolio__content'>
          <h4>Scope</h4>
          <ul>
            <li>Real-time interface using SSE and WebSockets</li>
            <li>Led a team of 3 engineers</li>
            <li>Architectural direction and code reviews</li>
            <li>Introduced automated testing suite and CI/CD pipelines</li>
          </ul>

          <h4>Impact</h4>
          <ul>
            <li>Increased deployment reliability and confidence</li>
            <li>Established scalable front-end patterns</li>
            <li>Improved development velocity and team alignment</li>
          </ul>
        </div>
      </article>
      {/* ===== PROJECT 2 ===== */}
      <article className='portfolio__project'>
        <header>
          <h3>Internal Operations Platform</h3>
          <p className='portfolio__meta'>
            Large enterprise · Junior Front-End Developer
          </p>
        </header>

        <div className='portfolio__content'>
          <h4>Scope</h4>
          <ul>
            <li>Large-scale internal application</li>
            <li>Pagination strategies and advanced state management</li>
            <li>Robust error handling and edge-case management</li>
          </ul>

          <h4>Impact</h4>
          <ul>
            <li>Contributed to maintainable and scalable front-end systems</li>
            <li>
              Experience operating in high-traffic, multi-team environments
            </li>
          </ul>
        </div>
      </article>
    </div>
  )
}

export default Portfolio
