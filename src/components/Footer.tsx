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

  return (
    <footer className="fixed bottom-0 left-0 w-full p-8 z-50">     
      <div className="max-w-6xl mx-auto relative"> 
          <div className="flex flex-col items-center text-sm">       
                <Link href="/" className="button">
                  about me
                </Link>
                <Link href="/experience" className="button">
                  experience
                </Link>
                <Link href="/portfolio" className="button">
                  portfolio
                </Link>
            </div>
      </div>
    </footer>
  )
}

