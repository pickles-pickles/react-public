// SolarSystem.jsx
/* import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei' */

function Planet ({ position, label }) {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color='skyblue' />
      </mesh>
      <Text
        position={[0, 1, 0]}
        fontSize={0.2}
        color='white'
        anchorX='center'
        anchorY='bottom'
      >
        {label}
      </Text>
    </group>
  )
}

export default function SolarSystem () {
  return (
    <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 0, 0]} intensity={1.5} />

      {/* Sun */}
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial emissive='orange' emissiveIntensity={1} />
      </mesh>

      {/* Planets */}
      <Planet position={[3, 0, 0]} label='Build web apps' />
      <Planet position={[-4, 0, -1]} label='Build websites' />
      <Planet position={[0, 0, 5]} label='Offer mentorship' />

      <OrbitControls />
    </Canvas>
  )
}
