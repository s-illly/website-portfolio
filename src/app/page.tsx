'use client'

import ModelViewer from '@/components/ModelViewer'
import Header from '@/components/Header'
import Footer from '@/components/Footer'



export default function Home() {
  const colorDots = [
    '#FFFFFF',
    '#99A098',
    '#353A2A',
    '#24281C',
    '#000000',
  ]
  const navLinks = [
    { label: 'about me', href: '/about' },
    { label: 'projects', href: '/projects' },
    { label: 'design', href: '/design' },
    { label: 'experience', href: '/experience' },
  ]

  return (
    <main className="min-h-screen relative overflow-hidden">
      <ModelViewer modelPath="/models/movingwater.glb" />
      <div className="relative z-10">
        <Header />
        <Footer colorDots={colorDots} navLinks={navLinks} />
      </div>
    </main> 
  )
}