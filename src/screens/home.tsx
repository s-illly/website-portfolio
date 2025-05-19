'use client'

import ModelViewer from '@/components/ModelViewer'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <ModelViewer modelPath="/models/movingwater.glb" />
      <div className="relative z-10">
        <Header />
        <Footer />
      </div>
    </main> 
  )
}