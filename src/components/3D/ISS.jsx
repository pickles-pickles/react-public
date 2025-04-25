// ISSModel.jsx
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function SolarPanel ({ position, rotation }) {
  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={[0.1, 4, 0.5]} />
      <meshStandardMaterial color='gray' />
    </mesh>
  )
}

function ISSBody () {
  return (
    <mesh>
      <cylinderGeometry args={[0.6, 0.6, 2, 32]} />
      <meshStandardMaterial color='silver' />
    </mesh>
  )
}

function SpaceModule ({ position }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial color='lightblue' />
    </mesh>
  )
}

export default function ISSModel () {
  return (
    <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* ISS Body (Core) */}
      <ISSBody />

      {/* Solar Panels */}
      <SolarPanel position={[-1.5, 0, 0]} rotation={[0, Math.PI / 4, 0]} />
      <SolarPanel position={[1.5, 0, 0]} rotation={[0, -Math.PI / 4, 0]} />

      {/* Space Modules */}
      <SpaceModule position={[-2, 0, 1]} />
      <SpaceModule position={[2, 0, -1]} />

      {/* Orbit Controls */}
      <OrbitControls />
    </Canvas>
  )
}
