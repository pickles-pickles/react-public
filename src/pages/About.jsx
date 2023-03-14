//A brief summary and resumé
import React from 'react'
import AboutCard from '../components/cards/About/AboutCard'
import CurrentOccupationCard from '../components/cards/About/CurrentOccupationCard'
import EducationCard from '../components/cards/About/EducationCard'
import FutureGoalsCard from '../components/cards/About/FutureGoalsCard'
import StackCard from '../components/cards/About/StackCard'
import ThesisCard from '../components/cards/About/ThesisCard'
import HobbiesCard from '../components/cards/HobbiesCard'

const About = () => {
  return (
    <>
      <div className='d-flex flex-column flex-lg-row'>
        <div className='side-container mb-3 mb-lg-0'>
          <StackCard />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-4 order-md-2'>
              <div className='mb-3'>
                <CurrentOccupationCard />
              </div>
              <div className='mb-3'>
                <EducationCard />
              </div>
              <div className='d-none d-md-block'>
                <HobbiesCard />
              </div>
            </div>

            <div className='col-12 col-md-8 order-md-1'>
              <div>
                <div className='mb-3'>
                  <AboutCard />
                </div>
                <div className='mb-3'>
                  <ThesisCard />
                </div>

                <div className='d-block d-md-none mb-3'>
                  <HobbiesCard />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='side-container'>
          <FutureGoalsCard />
        </div>
      </div>
    </>
  )
}

export default About
