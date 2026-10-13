import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function TorusScene(){
  return (
    <mesh rotation={[0.6,0.8,0]}>
      <torusKnotGeometry args={[1.8,0.45,256,32]} />
      <meshStandardMaterial color="#b7ff28" metalness={0.9} roughness={0.12} emissive="#083300" emissiveIntensity={0.08} />
    </mesh>
  )
}

export default function Hero3D(){
  const isWebGL = typeof window !== 'undefined' && !!(window.WebGLRenderingContext)
  return (
    <section className="hero-viewport">
      {isWebGL ? (
        <Canvas camera={{position:[0,0,6], fov:45}}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5,5,5]} intensity={1} />
          <Suspense fallback={null}>
            <TorusScene />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={0.6} />
        </Canvas>
      ) : (
        <img src="/src/assets/placeholder.svg" alt="hero fallback" style={{width:'100%',height:'100%',objectFit:'cover'}} />
      )}

      <div className="hero-content">
        <h1 className="hero-title">Ankush — Motion, Design & UI</h1>
        <div className="hero-sub">Cinematic visuals, motion design and interfaces crafted with care.</div>
        <button className="hero-cta" onClick={()=>{document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}}>View Work</button>
      </div>
    </section>
  )
}
