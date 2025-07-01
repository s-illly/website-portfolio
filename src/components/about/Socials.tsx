import { motion } from 'framer-motion'
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import Link from 'next/link'

export default function Socials() {
    return (
        <motion.div 
            className="w-36 h-6 absolute"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.10
            }}
        >
            <div>
                <div className="flex flex-col gap-4">
                    <Link href="https://www.instagram.com/s.illly?igsh=MWplcWFrb3VmZ25tZQ%3D%3D&utm_source=qr" target="_blank" className="social-link">    
                        <FaInstagram size={24} />
                    </Link>
                    <Link href="https://x.com/s_illlier?s=21&t=kVQ5ImgWwKciZgsU72FdYw" target="_blank" className="social-link">
                        <FaTwitter size={24} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/lily-song-b82a18284/" target="_blank" className="social-link">
                        <FaLinkedin size={24} />
                    </Link>
                    <Link href="https://github.com/s-illly" target="_blank" className="social-link">
                        <FaGithub size={24} />
                    </Link>
                </div>
            </div>
        </motion.div>
    )
} 