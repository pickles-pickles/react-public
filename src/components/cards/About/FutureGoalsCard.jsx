const FutureGoalsCard = () => {
  return (
    <div className='card'>
      <div className='card-header site-description'>Future Goals</div>
      <div
        class='card-body'
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        <p>
          My main goals for 2023 are to:
          <br />
          <br />
          <ul
            style={{
              marginLeft: '0px',
              paddingLeft: '15px'
            }}
          >
            <li>Enhance my online presence</li>
            <li>Decide what my next steps will be, since I completed my MSc</li>
          </ul>
          Furthermore, I am working to expand my knowledge on my stack and
          achieve excellence in depth and in width, regarding web development
          and Informatics in general.
        </p>
        <p>
          {' '}
          On the one hand, I use my professional environment to push my
          knowledge of the React ecosystem. On the other hand, I delve into
          personal projects to experiment with new ideas and view my older code
          under new light.
        </p>
      </div>
    </div>
  )
}

export default FutureGoalsCard
