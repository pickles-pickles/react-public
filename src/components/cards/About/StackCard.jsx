import { StackPillsList } from '../../../helpers/stacksPillsInfo'

const StackCard = () => {
  return (
    <div className='card'>
      <div className='card-header site-description'>My stack</div>
      <div
        className='card-body'
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        {StackPillsList.map(item => (
          <h4 key={item.title}>
            <span
              className='badge badge-lg mr-1 mt-2'
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
