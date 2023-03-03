import { StackPillsList } from '../helpers/stacksPillsInfo'

const StackCard = () => {
  return (
    <div className='card'>
      <div className='card-header'>
        <div className='site-description'>My stack</div>
      </div>
      <div
        class='card-body'
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        {StackPillsList.map(item => (
          <h4 key={item.title}>
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
    </div>
  )
}

export default StackCard
