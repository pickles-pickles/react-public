// SolarSystemStack.jsx
import React from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei'
import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function Planet ({ position, label, mapSrc }) {
  const planetRef = useRef()
  const labelRef = useRef()
  const [inFrontOfSun, setInFrontOfSun] = useState(false)
  const { camera } = useThree()

  const sunPosition = new THREE.Vector3(0, 1, 0) // sun center in 3D space
  const labelWorld = new THREE.Vector3()

  useFrame((_, delta) => {
    if (planetRef.current) {
      planetRef.current.rotation.y += delta * 0.5
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
  const texture = useLoader(THREE.TextureLoader, mapSrc)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.ClampToEdgeWrapping
  texture.repeat.set(2, 1) // Repeat twice across width (longitude)
  return (
    <group ref={planetRef} position={position}>
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial /* color='skyblue' */ map={texture} />
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
const orbits = 4
const step = 360 / orbits
const planetData = [
  { radius: 3, angle: 0, mapSrc: '/src/assets/aylo-logo.png' },
  { radius: 3, angle: 180, mapSrc: '/src/assets/aylo-logo.png' },
  { radius: 8, angle: step + 0, mapSrc: '/src/assets/aylo-logo.png' },
  { radius: 8, angle: step + 180, mapSrc: '/src/assets/aylo-logo.png' },
  { radius: 8, angle: step + 270, mapSrc: '/src/assets/aylo-logo.png' },
  { radius: 21, angle: step + 0, mapSrc: '/src/assets/aylo-logo.png' },
  { radius: 21, angle: step + 60, mapSrc: '/src/assets/aylo-logo.png' },
  { radius: 21, angle: step + 120, mapSrc: '/src/assets/aylo-logo.png' },
  { radius: 21, angle: step + 180, mapSrc: '/src/assets/aylo-logo.png' },
  { radius: 21, angle: step + 240, mapSrc: '/src/assets/aylo-logo.png' },
  { radius: 21, angle: step + 300, mapSrc: '/src/assets/aylo-logo.png' },
  { radius: 33, angle: step * 2 + 0, mapSrc: '/src/assets/aylo-logo.png' },
  { radius: 33, angle: step * 2 + 45, mapSrc: '/src/assets/aylo-logo.png' },
  { radius: 33, angle: step * 2 + 90, mapSrc: '/src/assets/aylo-logo.png' },
  { radius: 33, angle: step * 2 + 125, mapSrc: '/src/assets/aylo-logo.png' },
  { radius: 33, angle: step * 2 + 180, mapSrc: '/src/assets/aylo-logo.png' },
  { radius: 33, angle: step * 2 + 270, mapSrc: '/src/assets/aylo-logo.png' },
  { radius: 33, angle: step * 2 + 335, mapSrc: '/src/assets/aylo-logo.png' }
  /*  { label: 'Build web apps', radius: 3, angle: 0 },
  { label: 'Build websites', radius: 3, angle: 180 },
  { label: 'Offer mentorship', radius: 8, angle: 60 },
  { label: 'Mobile apps', radius: 8, angle: 120 },
  { label: 'API Development', radius: 8, angle: 180 },
  { label: 'UI/UX Design', radius: 13, angle: 150 },
  { label: 'SEO Optimization', radius: 13, angle: 180 },
  { label: 'Cloud Services', radius: 13, angle: 210 },
  { label: 'DevOps', radius: 13, angle: 240 },
  { label: 'Database Management', radius: 13, angle: 270 },
  { label: 'Security Audits', radius: 21, angle: 300 },
  { label: 'Machine Learning', radius: 21, angle: 330 },
  { label: 'Blockchain', radius: 21, angle: 45 },
  { label: 'Consulting', radius: 21, angle: 75 },
  { label: 'Testing & QA', radius: 21, angle: 105 },
  { label: 'Training', radius: 21, angle: 135 },
  { label: 'Maintenance', radius: 21, angle: 165 },
  { label: 'Technical Writing', radius: 21, angle: 195 } */
]

export default function SolarSystemStack () {
  return (
    <Canvas camera={{ position: [0, 15, 30], fov: 90 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 0, 0]} intensity={2} />

      {/* Sun */}
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial emissive='orange' emissiveIntensity={1.2} />
      </mesh>

      {/* Planets */}
      {planetData.map((planet, idx) => {
        const rad = (planet.angle * Math.PI) / 180 // convert degrees to radians
        const x = Math.cos(rad) * planet.radius
        const z = Math.sin(rad) * planet.radius

        return (
          <Planet
            key={idx}
            position={[x, 0, z]}
            label={planet.label}
            mapSrc={planet.mapSrc}
          />
        )
      })}

      <OrbitControls />
    </Canvas>
  )
}
