import React from 'react'

const PortfolioEntryCard = ({
  title,
  link,
  stack,
  description,
  details,
  imgSrc
}) => {
  return (
    <div className='card mt-2 mb-2'>
      <div className='row'>
        <div className='col-sm-12 col-lg-9'>
          <div className='card-header'>
            <h5 className='card-title'>
              <a
                href={link}
                target='_blank'
                rel='noreferrer'
                className='site-description'
              >
                {title}
              </a>
            </h5>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap'
            }}
          >
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
          <hr />
          <div>
            <h3 className='ml-2 site-description'>{description}</h3>
            <p className='text ml-2 mt-2 mr-2'></p>
          </div>
          <hr />
          <div>
            <h4 className='ml-2'>Details</h4>
            <p className='text ml-2 mt-2 mr-2 site-details'>{details}</p>
          </div>
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
