'use client'

import Footer from '@/components/Footer'
import AboutPage from '@/components/AboutPage'

export default function About() {
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
            <div className="relative flex flex-col">
                <AboutPage />
                <Footer colorDots={colorDots} navLinks={navLinks} />
            </div>
        </main>
    )
}