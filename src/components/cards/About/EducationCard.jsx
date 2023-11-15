const EducationCard = () => {
  return (
    <div className='card'>
      <div className='card-header site-description'>Education</div>
      <div
        className='card-body'
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        <p>
          Msc In Software Engineering for web and Mobile Applications
          <br />
          (University of Thessaly, Oct 2021 - Jan 2023)
        </p>
        <p className='ml-3'>
          Thesis in ‘Investigation and Implementation of Quantum Algorithms’
        </p>
        <p>
          Social Hackers Academy Front-end Bootcamp
          <br /> (Remote, Oct 2021 – Jan 2022)
        </p>

        <p>
          BSc in Materials Science & Engineering
          <br />
          (University of Crete, Oct 2011 - Jul 2016)
        </p>
      </div>
    </div>
  )
}

export default EducationCard
