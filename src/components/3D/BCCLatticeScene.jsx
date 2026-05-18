import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function BCCLatticeScene () {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current

    // Scene
    const scene = new THREE.Scene()
    scene.background = null /* new THREE.Color(0x111111) */

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.25,
      50
    )
    camera.position.set(2, 0, 3)
    camera.lookAt(0, 0, 0)
    //camera.rotateY(Math.PI)

    /* 
    camera.position.set(0, 2, -6)
camera.lookAt(0, 0, 0)
camera.rotateY(Math.PI)

    */

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor(0x000000, 0) // 0 is fully transparent
    mount.appendChild(renderer.domElement)

    // Strong lamp-style light
    /*     const keyLight = new THREE.PointLight(0xffffff, 5000, 0)
    keyLight.position.set(5, 5, 5)
    scene.add(keyLight) */

    const lamp = new THREE.SpotLight(0xffffff, 10000)
    lamp.position.set(5, 4, 10)
    lamp.angle = Math.PI / 6
    lamp.penumbra = 0.3
    lamp.decay = 2
    lamp.distance = 50
    //scene.add(lamp)

    const light = new THREE.DirectionalLight(0xffffff, 10000)
    light.position.set(-5, 5, 5)
    scene.add(light)

    // Optional softer ambient light (prevents harsh shadows)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75)
    scene.add(ambientLight)

    // Load GLTF Model
    let model
    const loader = new GLTFLoader()
    loader.load(
      '/assets/models/BCC-lattice-rendered.glb',
      gltf => {
        model = gltf.scene
        model.position.set(0, 0, 0)
        scene.add(model)
      },
      undefined,
      error => {
        console.error('Error loading model:', error)
      }
    )

    let targetRotY = 0
    let targetRotX = 0

    // Responsive resize
    const handleResize = () => {
      const width = mount.clientWidth
      const height = mount.clientHeight

      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    window.addEventListener('resize', handleResize)

    document
      .getElementById('canvas')
      .addEventListener('mousemove', handleMouseMove)

    function handleMouseMove (e) {
      if (!model) {
        return
      }
      const MAX_ROT_Y = 0.3
      const MAX_ROT_X = 0.25

      const x = (e.clientX / window.innerWidth) * 2 - 1

      const y = (e.clientY / window.innerHeight) * 2 - 1

      targetRotY = x * MAX_ROT_Y
      targetRotX = -y * MAX_ROT_X
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      if (model) {
        model.rotation.y += targetRotY - model.rotation.y * 0.06
        model.rotation.x = targetRotX - model.rotation.x * 0.06
      }

      renderer.render(scene, camera)
    }
    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      mount.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%'
      }}
      id='canvas'
    />
  )
}
