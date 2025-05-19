'use client'

import Link from 'next/link';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full p-8 z-50 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-2">
          <h1 className="text-[64px] font-light tracking-[20px]">s.illly</h1>
          <p className="text-2xl text-white/80 font-primary">hello, my name is lily song</p>
          <div className="flex gap-4 mt-2">
            <Link href="https://www.instagram.com/s.illly?igsh=MWplcWFrb3VmZ25tZQ%3D%3D&utm_source=qr" target = "_blank"className="social-link">
              <FaInstagram size={24} />
            </Link>
            <Link href="https://x.com/s_illlier?s=21&t=kVQ5ImgWwKciZgsU72FdYw" target = "_blank" className="social-link">
              <FaTwitter size={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/lily-song-b82a18284/" target = "_blank" className="social-link">
              <FaLinkedin size={24} />
            </Link>
            <Link href="https://github.com/s-illly" target = "_blank"className="social-link">
              <FaGithub size={24} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 