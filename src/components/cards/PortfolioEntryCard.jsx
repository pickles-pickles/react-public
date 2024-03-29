import React, { Fragment } from 'react'

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
            <h4 className='ml-2 site-description'>{description}</h4>
            <p className='text ml-2 mt-2 mr-2'></p>
          </div>
          <hr />
          <div>
            <h5 className='ml-2'>Details</h5>
            <p className='text ml-2 mt-2 mr-2 site-details'>
              {details.split('\n').map(
                (
                  i //line break when the string contains \n characters
                ) => (
                  <Fragment key={i}>
                    {i} <br />
                    <br />
                  </Fragment>
                )
              )}
            </p>
          </div>
        </div>
        <div className='col-sm-12 col-lg-3 portfolio-site-card'>
          <img
            src={imgSrc}
            alt='part of site screenshot'
            width={'100%'}
            height={'auto'}
          />
        </div>
      </div>
    </div>
  )
}
export default PortfolioEntryCard
