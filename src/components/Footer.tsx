'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full p-8 z-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-row justify-between flex-wrap">     
            <div className="flex gap-8 text-lg">
              <Link href="/about" className="button">about me</Link>
              <Link href="/experience" className="button">experience</Link>
              <Link href="/education" className="button">education</Link>
              <Link href="/projects" className="button">projects</Link>
            </div>
            <div className="flex gap-2 items-center">
              <div className="nav-dot bg-white" />
              <div className="nav-dot bg-[#99A098]" />
              <div className="nav-dot border-1 border-[#99A098] bg-[#353A2A]" />
              <div className="nav-dot bg-[#24281C]" />
              <div className="nav-dot bg-black" />  
          </div>
        </div>  
      </div>
    </footer>
  )
} 
