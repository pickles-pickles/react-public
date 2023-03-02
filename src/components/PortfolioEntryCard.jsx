import React from 'react'

const PortfolioEntryCard = ({ title, link, stack, details, imgSrc }) => {
  return (
    <div className='card mt-2 mb-2'>
      <div className='row'>
        <div className='col-sm-12 col-lg-9'>
          <div className='card-header'>
            <h5 className='card-title'>
              <a href={link} target='_blank' rel='noreferrer'>
                {title}
              </a>
            </h5>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {stack.map((item, idx) => (
              <h4 key={idx}>
                <span
                  className='badge badge-lg ml-2 mr-2 mt-2'
                  style={{
                    color: item.color,
                    background: item.bgColor
                  }}
                >
                  {item.title}
                </span>
              </h4>
            ))}
          </div>

          <div>{details}</div>
        </div>
        <div className='col-sm-12 col-lg-3 portfolio-site-card'>
          <img
            src={imgSrc}
            alt='part of site screenshot'
            width={'100%'}
            height={'100%'}
          />
        </div>
      </div>
    </div>
  )
}
export default PortfolioEntryCard