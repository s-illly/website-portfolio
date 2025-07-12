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
                <Link href="https://cs.uwatering.com/#https://www.sillly.ca/?nav=prev" className="button text-black">←</Link>
                <Link href="https://cs.uwatering.com/#https://www.sillly.ca/" target="_blank">
                    <svg
                      width="36"
                      height="20"
                      viewBox="0 0 36 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-9 h-5"
                    >
                      {/* Left eye white (slightly irregular oval) */}
                      <ellipse cx="10" cy="10" rx="7" ry="7" fill="white" stroke="black" strokeWidth="2"/>
                      {/* Right eye white (slightly irregular oval) */}
                      <ellipse cx="26" cy="10" rx="7" ry="7" fill="white" stroke="black" strokeWidth="2"/>
                      {/* Left pupil, large and offset to lower right */}
                      <ellipse cx="11" cy="13" rx="5" ry="5" fill="black"/>
                      {/* Right pupil, large and offset to lower right */}
                      <ellipse cx="27" cy="13" rx="5" ry="5" fill="black"/>
                    </svg>
                </Link>
                <Link href="https://cs.uwatering.com/#https://www.sillly.ca/?nav=next" className="button text-black">→</Link>
                </div>
            </div>
      </div>
    </footer>
  )
}

