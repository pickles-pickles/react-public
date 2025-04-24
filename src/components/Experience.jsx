import React from 'react'
import ExperienceCard from './cards/Experience/ExperienceCard'

const Experience = () => {
  return (
    <section id='experience-section'>
      <h1>EXPERIENCE</h1>
      <div className='experience-content text-center d-flex align-items-center justify-content-center'>
        <ExperienceCard />
      </div>
    </section>
  )
}

export default Experience
