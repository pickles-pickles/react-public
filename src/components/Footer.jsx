import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <hr></hr>
        <div className='row'>
          <div className='col'>
            <div className='row text-left ml-1'>
              <div className='icon'>
                <a
                  href='https://github.com/pickles-pickles'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  {' '}
                  <span className='fa fa-github fa-lg'></span>
                </a>
              </div>
              <div className='icon'>
                <a
                  href='https://www.linkedin.com/in/chris-georgakopoulos-web-dev'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  {' '}
                  <span className='fa fa-linkedin fa-lg'></span>
                </a>
              </div>
              <div className='icon'>
                <a
                  href='mailto:c.georgak727@gmail.com'
                  rel='noopener noreferrer'
                >
                  {' '}
                  <span className='fas fa-envelope fa-lg'></span>
                </a>
              </div>
              <div className='icon'>
                <a
                  href='https://drive.google.com/file/d/1sUmc_BFLvq_Fn4NnfuJ8OU-oXyqM_cIk/view?usp=sharing'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  {' '}
                  <span className='fas fa-file fa-solid fa-lg'></span>
                </a>
              </div>
            </div>
          </div>
          <div className='col text-right mr-1'>
            <p>Chris Georgakopoulos, 2026</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
