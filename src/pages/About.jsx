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
  /*   const ref1 = useRef(null),
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
 */
  return (
    <>
      <section className='about container'>
        {/* Intro */}
        <header className='about__header'>
          <h2>About</h2>
          <p className='about__lead'>
            Front-End Engineer with 4 years of experience delivering
            production-grade React applications in enterprise and
            product-focused environments.
          </p>
        </header>
        {/* Summary */}
        <div className='about__summary'>
          <p>
            I work at the intersection of user interfaces and system design —
            building maintainable front-end architectures that scale across
            teams and evolving product requirements.
          </p>
          <p>
            With a background in Materials Science and Software Engineering, I
            approach front-end development with structured thinking, performance
            awareness, and an emphasis on clarity in both code and design
            decisions.
          </p>
        </div>
        {/* Experience Themes */}
        <section className='about__experience'>
          <h3>Professional Focus</h3>
          <ul>
            <li>
              Development of large-scale internal platforms, addressing
              pagination, state management, and robust error handling.
            </li>
            <li>
              Implementation of real-time features using Server-Sent Events and
              WebSockets.
            </li>
            <li>
              Integration of automated testing suites and CI/CD pipelines into
              production workflows.
            </li>
            <li>
              Architectural guidance and code reviews within a Django monolith
              environment.
            </li>
            <li>Technical leadership of a small engineering team.</li>
          </ul>
        </section>
        {/* Stack */}
        <section className='about__stack'>
          <h3>Core Technologies</h3>
          <p>
            React · TypeScript · JavaScript (ES6+) · CSS / SCSS · REST APIs ·
            WebSockets · SSE
          </p>
          <p>
            Testing: Jest, React Testing Library Tooling: Git, CI/CD pipelines
            Backend: Django, Python, Node
          </p>
        </section>
        {/* Education */}
        <section className='about__education'>
          <h3>Education</h3>
          <p>
            MSc in Software Engineering — Thesis focused on implementation and
            simulation of quantum algorithms (Bernstein–Vazirani, Simon,
            Grover).
          </p>
          <p>BSc in Materials Science & Engineering</p>
        </section>
      </section>
      {/*   <div className='d-flex flex-column flex-lg-row'>
        <div className='side-container mb-3 mb-lg-0'>
          <StackCard />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-4 order-md-2'>
              <div
                ref={ref1}
                className={`mb-3 ${
                  isInViewport1 ? 'slide-right-to-left-about-2' : null
                }`}
              >
                <CurrentOccupationCard />
              </div>
              <div
                ref={ref2}
                className={`mb-3 ${
                  isInViewport2 ? 'slide-right-to-left-about-2' : null
                }`}
              >
                <EducationCard />
              </div>
              <div
                ref={ref3}
                className={` d-none d-md-block mb-3 ${
                  isInViewport3 ? 'slide-right-to-left-about-2' : null
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
                    isInViewport4 ? 'slide-right-to-left-about-2' : null
                  }`}
                >
                  <AboutCard />
                </div>
                <div
                  ref={ref5}
                  className={`mb-3 ${
                    isInViewport5 ? 'slide-right-to-left-about-2' : null
                  }`}
                >
                  <ThesisCard />
                </div>

                <div
                  ref={ref6}
                  className={`d-block d-md-none mb-3 mb-3 ${
                    isInViewport6 ? 'slide-right-to-left-about-2' : null
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
      </div> */}
    </>
  )
}

export default About
