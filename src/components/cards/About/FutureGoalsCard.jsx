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
          I am working to expand my knowledge on my stack and achieve excellence
          in depth and in width, regarding web development and Informatics in
          general.
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
