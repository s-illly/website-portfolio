'use client'
import Link from 'next/link'
import { useState } from 'react'


interface NavLink {
  label: string
  href: string
}

interface FooterProps {
  colorDots: string[]
  navLinks: NavLink[]
}

export default function Footer({ colorDots, navLinks }: FooterProps) {
  const [copiedColor, setCopiedColor] = useState<string | null>(null)

  const handleCopy = async (color: string) => {
    try {
      await navigator.clipboard.writeText(color)
      setCopiedColor(color)
      setTimeout(() => setCopiedColor(null), 1000)
    } catch (err) {
      console.error('Failed to copy!', err)
    }
  }

  return (
    <footer className="fixed bottom-0 left-0 w-full p-8 z-50">
      {/* Gradient blur background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#353A2A] via-[#353A2A]/95 to-transparent backdrop-blur-[2px]"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-row justify-between flex-wrap">     
          <div className="flex gap-8 text-lg pt-2 pb-2 pl-8 pr-8">
              {navLinks.map((link, idx) => (
                <Link key={idx} href={link.href} className="button">
                  {link.label}
                </Link>
              ))}
            </div>

          <div className="flex gap-2 items-center relative">
            {colorDots.map((color, idx) => (
              <div
                key={idx}
                onClick={() => handleCopy(color)}
                onMouseLeave={() => setCopiedColor(null)}
                className="nav-dot w-5 h-5 rounded-full border border-gray-300 cursor-pointer relative"
                style={{ backgroundColor: color }}
              >
                {copiedColor === color && (
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-800 rounded shadow-md z-10">
                    Copied!
                    <div className="absolute w-2 h-2 bg-gray-800 rotate-45 bottom-[-4px] left-1/2 -translate-x-1/2" />
                  </div>
                )}
                {copiedColor !== color && (
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-800 rounded shadow-md opacity-0 hover:opacity-100 transition-opacity z-10">
                    {color}
                    <div className="absolute w-2 h-2 bg-gray-800 rotate-45 bottom-[-4px] left-1/2 -translate-x-1/2" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>  
      </div>
    </footer>
  )
}

