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
                  href='https://www.linkedin.com/in/christos-georgakopoulos-a1-a6471a8'
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
            </div>
          </div>
          <div className='col text-right mr-1'>
            <p>Made by Christos Georgakopoulos, 2021</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
