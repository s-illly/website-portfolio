'use client'


import Footer from '@/components/Footer'
import Portfolio from '@/components/PortfolioPage'

export default function Projects() {
    const colorDots = [
        '#FFFFFF',
        '#99A098',
        '#353A2A',
        '#24281C',
        '#000000',
      ]
      const navLinks = [
        { label: 'return', href: '/' },
      ]

    return (
        <main className="min-h-screen relative overflow-hidden">
            <div className="relative z-10">
                <Portfolio />
                <Footer colorDots={colorDots} navLinks={navLinks} />                
               
            </div>
        </main>
    )
}