import React from 'react'
import SolarSystem from './3D/SolarSystem'
import ISSModel from './3D/ISS'

const Stack = () => {
  return (
    <section style={{ background: 'black' }}>
      <h1 className='text-center'>What can I offer</h1>
      <div
        style={{ height: '80vh', background: 'black', paddingBottom: '10px' }}
      >
        <SolarSystem />
      </div>
      <div style={{ height: '60vh' }}>
        <ISSModel />
      </div>
    </section>
  )
}

export default Stack
