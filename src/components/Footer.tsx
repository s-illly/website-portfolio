'use client'
import Link from 'next/link'

export default function Footer() {

  return (
    <footer className="fixed bottom-0 left-0 w-full p-8 z-50">     
      <div className="max-w-6xl mx-auto relative"> 
          <div className="flex flex-col items-center text-sm">       
                <Link href="/" className="button">
                  about me
                </Link>
                <Link href="/portfolio" className="button">
                  portfolio
                </Link>
            </div>
      </div>
    </footer>
  )
}

