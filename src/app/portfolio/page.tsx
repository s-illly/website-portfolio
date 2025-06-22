'use client'


import Footer from '@/components/Footer'
import Portfolio from '@/components/PortfolioPage'

export default function Projects() {
    return (
        <main className="min-h-screen relative overflow-hidden">
            <div className="relative z-10">
                <Portfolio />
                <Footer />                            
            </div>
        </main>
    )
}