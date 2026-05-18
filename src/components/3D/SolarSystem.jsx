// SolarSystem.jsx
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei'
import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function Planet ({ position, label }) {
  const planetRef = useRef()
  const labelRef = useRef()
  const [inFrontOfSun, setInFrontOfSun] = useState(false)
  const { camera } = useThree()

  const sunPosition = new THREE.Vector3(0, 1, 0) // sun center in 3D space
  const labelWorld = new THREE.Vector3()

  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.getWorldPosition(labelWorld)
      labelWorld.y += 1 // move label 1 unit above planet

      const labelScreen = labelWorld.clone().project(camera)
      const sunScreen = sunPosition.clone().project(camera)

      // Check Z depth from camera's POV
      setInFrontOfSun(
        Math.abs(labelScreen.x) < sunScreen.x ||
          Math.abs(labelScreen.y) < sunScreen.y
      )
      /* console.log({
        label: { x: labelScreen.x, y: labelScreen.y },
        sun: { x: sunScreen.x, y: sunScreen.y }
      }) */
    }
  })

  return (
    <group ref={planetRef} position={position}>
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color='skyblue' />
      </mesh>

      <Html position={[0, 1, 0]} center>
        <div
          ref={labelRef}
          style={{
            fontSize: '14px',
            fontWeight: 'bold',
            color: inFrontOfSun ? 'black' : 'white',
            transition: 'color 0.3s ease'
          }}
        >
          {label}
        </div>
      </Html>
    </group>
  )
}

/* function Planet ({ position, label }) {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color='skyblue' />
      </mesh>
      <Html position={[0, 1, 0]} center>
        <div className='planet-label'>{label}</div>
      </Html>
    </group>
  )
} */

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
