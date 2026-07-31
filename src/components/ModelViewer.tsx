import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ModelViewer() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current!
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000)
    camera.position.set(0, 1.5, 3)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    container.appendChild(renderer.domElement)

    const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1.0)
    scene.add(light)

    const grid = new THREE.GridHelper(10, 10)
    scene.add(grid)

    // Placeholder geometry as a pet placeholder
    const geometry = new THREE.SphereGeometry(0.5, 32, 32)
    const material = new THREE.MeshStandardMaterial({ color: 0x88cc88 })
    const pet = new THREE.Mesh(geometry, material)
    pet.position.y = 0.5
    scene.add(pet)

    function animate() {
      requestAnimationFrame(animate)
      pet.rotation.y += 0.01
      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    window.addEventListener('resize', onResize)

    // Clean up
    return () => {
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      container.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div ref={containerRef} style={{width: '100%', height: '100%'}}>
      {/* Drag & drop area will be layered here in the scaffold */}
    </div>
  )
}
