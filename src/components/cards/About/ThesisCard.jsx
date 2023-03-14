const ThesisCard = () => {
  return (
    <div className='card'>
      <div className='card-header site-description'>Thesis</div>
      <div
        class='card-body'
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        <p>
          Writing my thesis was the most interesting part of my MSc experience.
          I combined my background as a Materials Scientist and my exposition on
          Quantum Physics with the theoretical knowledge on Quantum Computing I
          gained through my Msc Curriculum. <br />
          The result was a thesis on "Investigation and Implementation of
          Quantum Algorithms", where I explored theoreticaaly, simulated on my
          local machined and implemented on IBM's cloud Quantum Machines the
          Quantum algorithms of Bernstein-Vazirani, Simmon and Grover.
        </p>
      </div>
    </div>
  )
}

export default ThesisCard
