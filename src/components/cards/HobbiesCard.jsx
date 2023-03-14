const HobbiesCard = () => {
  return (
    <div className='card'>
      <div className='card-header site-description'>Hobbies</div>
      <div
        class='card-body'
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        <p>
          I love sports and astronomy. It's an era of exciting breakthrough in
          both areas and I am glad that of all the possible points in the
          timeline, I live now.
        </p>
      </div>
    </div>
  )
}

export default HobbiesCard
