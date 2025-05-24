'use client'

import Footer from '@/components/Footer'

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
            <div className="relative z-10">
                <h2>About</h2>
                <Footer colorDots={colorDots} navLinks={navLinks} />
            </div>
        </main>
    )
}