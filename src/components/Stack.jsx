import React from 'react'
import SolarSystem from './3D/SolarSystem'
import ISSModel from './3D/ISS'
import SolarSystemStack from './3D/SolarSystemStack'
import SpaceTelescopeStack from './3D/SpaceTelescopeStack'
import ListStack from './ListStack'

const Stack = () => {
  return (
    <section id='stack-section' style={{ background: 'black' }}>
      <h1 className='text-center'>My Stack</h1>
      <ListStack />
      {/* <div
        style={{ height: '80vh', background: 'black', paddingBottom: '10px' }}
      > */}
      {/* <SolarSystemStack /> */}
      {/* <SpaceTelescopeStack /> */}
      {/* </div> */}
      {/*       <div style={{ height: '60vh' }}>
        <ISSModel />
      </div> */}
    </section>
  )
}

export default Stack
