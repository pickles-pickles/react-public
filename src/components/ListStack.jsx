import React from 'react'

const stackItems = [
  'React',
  'Redux',
  'Bootstrap',
  'TypeScript',
  'Material UI',
  'Python',
  'Docker',
  'ECharts',
  'CSS Preprocessors',
  'Node',
  'Express'
]

const ListStack = () => {
  return (
    <div
      className='stack - wrapper
 py-5'
    >
      <h2 id='stack-list-card-title'>
        My stack includes industry-standard technologies like:
      </h2>
      <div
        id='list-stck-container'
        className='stack-wrapper
'
      >
        {stackItems.map((item, index) => (
          <div
            key={item}
            className={`stack-card ${
              index % 2 === 0 ? 'from-left' : 'from-right'
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListStack

/* const ContainerDiv = styled.section`` */
