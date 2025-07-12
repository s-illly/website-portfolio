'use client'
import Link from 'next/link'

export default function Footer() {

  return (
    <footer className="fixed bottom-0 left-0 w-full px-8 py-2 z-50 bg-gradient-to-t from-white via-white/80 to-transparent">     
      <div className="max-w-6xl mx-auto relative"> 
          <div className="flex flex-col items-center">       
                <Link href="/" className="button">
                  about me
                </Link>
                <Link href="/portfolio" className="button">
                  portfolio
                </Link>
                <div className="flex flex-row mt-1 justify-center align-middle">
                <Link href="https://cs.uwatering.com/#https://www.sillly.ca/?nav=prev" className="button text-black pr-1">←</Link>
                <Link href="https://cs.uwatering.com/#https://www.sillly.ca/" target="_blank">
                  <img src="https://cs.uwatering.com/icon.black.svg" alt="CS Webring" className="w-4 h-auto"/>
                </Link>
                <Link href="https://cs.uwatering.com/#https://www.sillly.ca/?nav=next" className="button text-black">→</Link>
                </div>
            </div>
      </div>
    </footer>
  )
}

