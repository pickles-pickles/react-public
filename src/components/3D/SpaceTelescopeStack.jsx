import { Canvas, useFrame } from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { useRef } from 'react'

// Labels for each hexagon
const stackLabels = [
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'MongoDB',
  'GraphQL',
  'TypeScript',
  'Tailwind',
  'Three.js',
  'Vite',
  'PostgreSQL',
  'Docker',
  'AWS',
  'Docker',
  'Kubernetes',
  'Redis',
  'Prisma',
  'Stripe'
]

// Single Hexagon Component
function Hexagon ({ position, label }) {
  return (
    <group position={position}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.6, 6]} />
        <meshStandardMaterial color='#ffcc00' roughness={0.3} metalness={0.8} />
      </mesh>
      <Html center>
        <div
          style={{
            color: '#222',
            fontWeight: 'bold',
            fontSize: '10px',
            textAlign: 'center'
          }}
        >
          {label}
        </div>
      </Html>
    </group>
  )
}

// Solar Panel
function SolarPanel ({ position }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.2, 4, 1]} />
      <meshStandardMaterial color='#1e3a8a' />
    </mesh>
  )
}

// Secondary Mirror
function SecondaryMirror () {
  return (
    <group position={[0, 2, 0]}>
      {/* Support arm */}
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 2, 16]} />
        <meshStandardMaterial color='gray' />
      </mesh>
      {/* Mirror */}
      <mesh>
        <circleGeometry args={[0.25, 32]} />
        <meshStandardMaterial color='silver' metalness={1} roughness={0.1} />
      </mesh>
    </group>
  )
}

// Full Telescope Model
function SpaceTelescope () {
  const groupRef = useRef()

  useFrame((_, delta) => {
    if (groupRef.current) {
      // groupRef.current.rotation.y += delta * 0.02
    }
  })

  const a = 1.04 // distance between centers (adjusted)

  // Correct honeycomb layout
  const hexPositions = [
    [0, 0, 0],
    [a, 0, 0],
    [-a, 0, 0],
    [a / 2, 0, (Math.sqrt(3) / 2) * a],
    [-a / 2, 0, (Math.sqrt(3) / 2) * a],
    [a / 2, 0, (-Math.sqrt(3) / 2) * a],
    [-a / 2, 0, (-Math.sqrt(3) / 2) * a],
    [a * 1.5, 0, (Math.sqrt(3) / 2) * a],
    [-a * 1.5, 0, (Math.sqrt(3) / 2) * a],
    [a * 1.5, 0, (-Math.sqrt(3) / 2) * a],
    [-a * 1.5, 0, (-Math.sqrt(3) / 2) * a],
    [0, 0, Math.sqrt(3) * a],
    [0, 0, -Math.sqrt(3) * a],
    [a, 0, Math.sqrt(3) * a],
    [-a, 0, Math.sqrt(3) * a],
    [a, 0, -Math.sqrt(3) * a],
    [-a, 0, -Math.sqrt(3) * a],
    [0, 0, Math.sqrt(3) * 1.5 * a]
  ]

  return (
    <group ref={groupRef}>
      {/* Base */}
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.2, 32]} />
        <meshStandardMaterial color='gray' />
      </mesh>

      {/* Hexagons */}
      {hexPositions.map((pos, idx) => (
        <Hexagon
          key={idx}
          position={[pos[0], pos[1] + 1, pos[2]]}
          label={stackLabels[idx] || ''}
        />
      ))}

      {/* Secondary Mirror */}
      <SecondaryMirror />

      {/* Solar Panels */}
      <SolarPanel position={[-4, 1, 0]} />
      <SolarPanel position={[4, 1, 0]} />
    </group>
  )
}

// Scene Canvas
export default function TelescopeScene () {
  return (
    <Canvas camera={{ position: [0, 5, 12], fov: 50 }}>
      <ambientLight intensity={0.7} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />

      <SpaceTelescope />

      <OrbitControls />
    </Canvas>
  )
}
