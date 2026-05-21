import React from 'react'
import RaymetricsLogo from "/assets/raymetrics-logo.png";
import AyloLogo from "/assets/aylo-logo.png";

const ExperienceCard = () => {
  return (
    <div className='experience-card glass-card mb-3 mb-lg-0'>
      <div className='row my-3'>
        <div className='col-2 d-flex  justify-content-center'>
          <span
            style={{
              width: '28px',
              height: '28px',
              transform: 'translateX(50%) translateY(1.25rem)'
            }}
          >
            <img
              src={RaymetricsLogo}
              alt='raymetrics logo'
              srcSet=''
              width={28}
              height={28}
              style={{
                background: 'linear-gradient(45deg, hsl(34 100% 54%), #0157A0)'
              }}
            />
          </span>
          <div className='vertical-hr' id='vertical-hr-1'></div>
        </div>
        <div className='col-10'>
          <h3 className='experience-card-title'>Raymetrics</h3>
          <p className='experience-card-subtitle'>
            Front-end developer - Team lead of 4
          </p>
          <p className='experience-card-smaller-subtitle'>12/2023 - Present</p>
        </div>
      </div>

      <div className='row'>
        <div className=' col-2 d-flex  justify-content-center'>
          <span
            style={{
              width: '36px',
              height: '36px',
              transform: 'translateX(calc(50% - 4px)) translateY(1.25rem)'
            }}
          >
            <img
              src={AyloLogo}
              alt='aylo logo'
              srcSet=''
              width={36}
              height={36}
            />
          </span>
          <div className='vertical-hr' id='vertical-hr-2'></div>
        </div>
        <div className='col-10'>
          <h3 className='experience-card-title'>Aylo</h3>
          <p className='experience-card-subtitle'>Front-end developer</p>
          <p className='experience-card-smaller-subtitle'>04/2022 - 06/2023</p>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
