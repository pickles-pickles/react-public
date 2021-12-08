import React from 'react'
import Form from './Form'

const Contact = () => {
  return (
    <div className='container'>
      <p className='text'>
        Feel free to contact me in the way that suits you. Either visit my
        social media profiles, send me an e-mail or write in the textarea below.
        This site is connected to a Realtime Firebase.
      </p>

      <div
        className='row align-items-center
                     justify-content-center m-1 '
      >
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
          <a href='mailto:c.georgak727@gmail.com' rel='noopener noreferrer'>
            {' '}
            <span className='fas fa-envelope fa-lg'></span>
          </a>
        </div>
      </div>

      <Form />
    </div>
  )
}

export default Contact
