'use client'

import Footer from '@/components/Footer'
import AboutPage from '@/components/AboutPage'


export default function Home() {

  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="relative z-10">
        <AboutPage />
        <Footer />
      </div>
    </main> 
  )
}