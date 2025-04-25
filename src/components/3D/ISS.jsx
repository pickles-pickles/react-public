// ISSModel.jsx
import React from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function SolarPanel ({ position, rotation, imageUrl }) {
  const texture = useLoader(THREE.TextureLoader, imageUrl)
  texture.minFilter = THREE.LinearFilter
  texture.magFilter = THREE.LinearFilter
  texture.anisotropy = 16 // Boosts sharpness on angles

  const materials = [
    new THREE.MeshStandardMaterial({ map: texture }), // Right (long side) ✅
    new THREE.MeshStandardMaterial({ map: texture }), // Left (long side) ✅
    new THREE.MeshStandardMaterial({ color: 'gray' }), // Top
    new THREE.MeshStandardMaterial({ color: 'gray' }), // Bottom
    new THREE.MeshStandardMaterial({ color: 'gray' }), // Front
    new THREE.MeshStandardMaterial({ color: 'gray' }) // Back
  ]

  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={[0.1, 4, 1.5]} />
      <meshStandardMaterial color='gray' attach='material' args={materials} />
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
  const texture = useLoader(THREE.TextureLoader, '/src/assets/aylo-logo.png')
  // Make it appear twice (wrap horizontally)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.ClampToEdgeWrapping
  texture.repeat.set(2, 1) // Repeat twice across width (longitude)
  //texture.offset.set(0, 0)

  return (
    <mesh position={position}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial
        color='lightblue'
        map={texture}
        /* transparent */
        //side={THREE.DoubleSide} // <-- Important!
      />
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
      <SolarPanel
        position={[-1.5, 0, 0]}
        rotation={[0, Math.PI / 4, 0]}
        imageUrl='/src/assets/Black-Hole-Disc.jpg'
      />
      <SolarPanel
        position={[1.5, 0, 0]}
        rotation={[0, -Math.PI / 4, 0]}
        imageUrl='/src/assets/Black-Hole-Disc.jpg'
      />

      {/* Space Modules */}
      <SpaceModule position={[-2, 0, 1]} />
      <SpaceModule position={[2, 0, -1]} />

      {/* Orbit Controls */}
      <OrbitControls />
    </Canvas>
  )
}
