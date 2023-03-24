//A brief summary and resumé
import React, { useRef } from 'react'
import AboutCard from '../components/cards/About/AboutCard'
import CurrentOccupationCard from '../components/cards/About/CurrentOccupationCard'
import EducationCard from '../components/cards/About/EducationCard'
import FutureGoalsCard from '../components/cards/About/FutureGoalsCard'
import StackCard from '../components/cards/About/StackCard'
import ThesisCard from '../components/cards/About/ThesisCard'
import HobbiesCard from '../components/cards/HobbiesCard'
import useIsInViewport from '../helpers/customHooks/useIsInViewport'

const About = () => {
  const ref1 = useRef(null),
    ref2 = useRef(null),
    ref3 = useRef(null),
    ref4 = useRef(null),
    ref5 = useRef(null),
    ref6 = useRef(null)

  const isInViewport1 = useIsInViewport(ref1),
    isInViewport2 = useIsInViewport(ref2),
    isInViewport3 = useIsInViewport(ref3),
    isInViewport4 = useIsInViewport(ref4),
    isInViewport5 = useIsInViewport(ref5),
    isInViewport6 = useIsInViewport(ref6)

  return (
    <>
      <div className='d-flex flex-column flex-lg-row'>
        <div className='side-container mb-3 mb-lg-0'>
          <StackCard />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-4 order-md-2'>
              <div
                ref={ref1}
                className={`mb-3 ${
                  isInViewport1 ? 'slide-right-to-left-medium-2' : null
                }`}
              >
                <CurrentOccupationCard />
              </div>
              <div
                ref={ref2}
                className={`mb-3 ${
                  isInViewport2 ? 'slide-right-to-left-medium-2' : null
                }`}
              >
                <EducationCard />
              </div>
              <div
                ref={ref3}
                className={` d-none d-md-block mb-3 ${
                  isInViewport3 ? 'slide-right-to-left-medium-2' : null
                }`}
              >
                <HobbiesCard />
              </div>
            </div>

            <div className='col-12 col-md-8 order-md-1'>
              <div>
                <div
                  ref={ref4}
                  className={`mb-3 ${
                    isInViewport4 ? 'slide-right-to-left-medium-2' : null
                  }`}
                >
                  <AboutCard />
                </div>
                <div
                  ref={ref5}
                  className={`mb-3 ${
                    isInViewport5 ? 'slide-right-to-left-medium-2' : null
                  }`}
                >
                  <ThesisCard />
                </div>

                <div
                  ref={ref6}
                  className={`d-block d-md-none mb-3 mb-3 ${
                    isInViewport6 ? 'slide-right-to-left-medium-2' : null
                  }`}
                >
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
