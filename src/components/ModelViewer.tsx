'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Center } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import * as THREE from 'three'

function Model({ url }: { url: string }) {
  const group = useRef<THREE.Group>(null)
  const { scene } = useGLTF(url)

  return (
    <Center>
      <primitive 
        ref={group} 
        object={scene} 
        position={[0, 0, 0]}
        scale={1.0}
      />
    </Center>
  )
}

export default function ModelViewer({ modelPath }: { modelPath: string }) {
  return (
    <div className="fixed inset-0 w-full h-full bg-transparent z-0">
      <Canvas
        camera={{ 
          position: [0, 0, 10], 
          fov: 45,
          near: 0.1,
          far: 1000
        }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Model url={modelPath} />
          <OrbitControls 
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            autoRotate={false}
            autoRotateSpeed={0.5}
            minDistance={10}
            maxDistance={20}
          />
        </Suspense>
      </Canvas>
    </div>
  )
} 