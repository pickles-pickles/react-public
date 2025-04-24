import React from 'react'

const ExperienceCard = () => {
  return (
    <div className='experience-card glass-card'>
      <div className='row '>
        <div className='col-4 d-flex  justify-content-center'>
          <span
            style={{
              width: '22px',
              height: '22px',
              transform: 'translateX(50%) translateY(1.25rem)'
            }}
          >
            <img
              src='../../../../assets/raymetrics-logo.png'
              alt='raymetrics logo'
              srcset=''
              width={22}
              height={22}
              style={{
                background: 'linear-gradient(45deg, hsl(34 100% 54%), #0157A0)'
              }}
            />
          </span>
          <div className='vertical-hr' id='vertical-hr-1'></div>
        </div>
        <div>
          <h3>Raymetrics</h3>
          <p>Front-end developer - Team lead of 4</p>
          <p>12/2023 - Present</p>
        </div>
      </div>

      <div className='mt-5 row'>
        <div className=' col-4 d-flex  justify-content-center'>
          <span
            style={{
              width: '22px',
              height: '22px',
              transform: 'translateX(50%) translateY(1.25rem)'
            }}
          >
            <img
              src='/src/assets/aylo-logo.png'
              alt='aylo logo'
              srcset=''
              width={22}
              height={22}
            />
          </span>
          <div className='vertical-hr' id='vertical-hr-2'></div>
        </div>
        <div className=''>
          <h3>Aylo</h3>
          <p>Front-end developer</p>
          <p>04/2022 - 06/2023</p>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
