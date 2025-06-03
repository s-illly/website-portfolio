'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export default function About() {
    const pathname = usePathname()
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)
    
    const photoDescriptions = {
        'painting': 'A beautiful painting I created during my art class.',
        'fish': 'My favorite fish from the aquarium.',
        'stickers': 'Collection of stickers I\'ve gathered over the years.',
        'badminton': 'Playing badminton with friends at the park.',
        'me': 'A recent photo of myself.',
        'bunny': 'My pet bunny enjoying some carrots.',
        'bath': 'Relaxing bath time with essential oils.'
    }

    const handlePhotoClick = (photoName: string) => {
        setSelectedPhoto(photoName)
    }

    const handleOverlayClick = () => {
        setSelectedPhoto(null)
    }
    
    return (
        <AnimatePresence mode="wait">
            <motion.main 
                key={pathname}
                className="min-h-screen relative overflow-hidden flex flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="relative flex-grow p-8 flex items-center justify-center">
                    <div className="relative w-full max-w-4xl min-h-[400px] bg-white/10 backdrop-blur-sm rounded-lg p-8 z-50 items-center">
                        
                        // Introduction
                        <motion.div 
                            className="absolute -left-50 -top-30 cursor-pointer"
                            initial={{ y: "100vh", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "100vh", opacity: 0 }}
                            transition={{ 
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                                delay: 0.10
                            }}
                            whileHover={{ y: -20, scale: 1.05 }}
                            onClick={() => handlePhotoClick('painting')}
                        >
                            <div className="w-105 h-65 p-10"> 
                                <h3 className="text-blue-400!"> s.illly ❚</h3>
                                <br></br>
                                <p> Hi, my name is <a className="underline decoration-sky-500/30">Lily Song</a>. 
                                    I am a student at the University of Waterloo studying Computer Science. 
                                    Catch me on campus drawing, reading, playing the piano, or probably studying :) </p>
                            </div>
                        </motion.div>

                        // Social media links 
                        <motion.div 
                            className="absolute -left-40 top-40 cursor-pointer"
                            initial={{ y: "100vh", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "100vh", opacity: 0 }}
                            transition={{ 
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                                delay: 0.12
                            }}
                        >
                            <div className="w-36 h-6">
                            <div className="flex flex-row gap-4">
                                    <Link href="https://www.instagram.com/s.illly?igsh=MWplcWFrb3VmZ25tZQ%3D%3D&utm_source=qr" target = "_blank" className="social-link">    
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
                        </motion.div>

                        // Spotify
                        <motion.div 
                            className="absolute -right-40 -top-30 z-3 cursor-pointer"
                            initial={{ y: "100vh", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "100vh", opacity: 0 }}
                            transition={{ 
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                                delay: 0.13
                            }}
                            whileHover={{ y: -20, scale: 1.05 }}
                            onClick={() => handlePhotoClick('stickers')}
                        >
                            <div className="h-80 w-80 bg-amber-50">
                                <h6 className="font-32px!"> Tune In :)</h6>

                            </div>

                        </motion.div>
                        <motion.div 
                            className="absolute w-48 h-64 right-1/100 top-40 z-60 cursor-pointer"
                            initial={{ y: "100vh", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "100vh", opacity: 0 }}
                            transition={{ 
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                                delay: 0.14
                            }}
                            whileHover={{ y: -20, scale: 1.05 }}
                            onClick={() => handlePhotoClick('badminton')}
                        >
                            <img src="img/badminton.png"></img>
                        </motion.div>
                        <motion.div 
                            className="absolute w-55 h-56 right-1/3 -top-10 z-2 cursor-pointer"
                            initial={{ y: "100vh", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "100vh", opacity: 0 }}
                            transition={{ 
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                                delay: 0.15
                            }}
                            whileHover={{ y: -20, scale: 1.05 }}
                            onClick={() => handlePhotoClick('me')}
                        >
                            <img src="img/me.png"></img>
                        </motion.div>
                        <motion.div 
                            className="absolute w-40 h-40 left-20 top-80 z-4 cursor-pointer"
                            initial={{ y: "100vh", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "100vh", opacity: 0 }}
                            transition={{ 
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                                delay: 0.16
                            }}
                            whileHover={{ y: -20, scale: 1.05 }}
                            onClick={() => handlePhotoClick('bunny')}
                        >
                            <img src="img/bunny.png"></img>
                        </motion.div>

                        <motion.div 
                            className="absolute w-40 h-40 right-50 top-70 z-4 filter saturate-0 cursor-pointer"
                            initial={{ y: "100vh", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "100vh", opacity: 0 }}
                            transition={{ 
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                                delay: 0.17
                            }}
                            whileHover={{ y: -20, scale: 1.05 }}
                            onClick={() => handlePhotoClick('bath')}
                        >
                            <div className="w-40 h-40 bg-black"> 
                                <img src="img/bath.png"></img>
                            </div>

                        </motion.div>

                        {/* Overlay for selected photo */}
                        <AnimatePresence>
                            {selectedPhoto && (
                                <motion.div
                                    className="absolute inset-0 bg-black/50 backdrop-blur-md z-[100] flex items-center justify-center p-8"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={handleOverlayClick}
                                >
                                    <motion.div
                                        className="bg-white/90 p-6 rounded-lg max-w-md text-center"
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.8, opacity: 0 }}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <h3 className="text-2xl font-bold mb-4 text-gray-800">
                                            {selectedPhoto.charAt(0).toUpperCase() + selectedPhoto.slice(1)}
                                        </h3>
                                        <p className="text-gray-600">
                                            {photoDescriptions[selectedPhoto as keyof typeof photoDescriptions]}
                                        </p>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.main>
        </AnimatePresence>
    )
}