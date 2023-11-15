const CurrentOccupationCard = () => {
  return (
    <div className='card'>
      <div className='card-header site-description'>Current Occupation</div>
      <div
        className='card-body'
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        <p>
          My current occupation is as React Developer for{' '}
          <a
            href='https://www.mindgeek.com/'
            rel='noopener noreferrer'
            target='_blank'
          >
            Mindgeek
          </a>
        </p>
      </div>
    </div>
  )
}

export default CurrentOccupationCard
