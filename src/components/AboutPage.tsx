'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

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
                className="min-h-screen bg-[#353A2A] relative overflow-hidden flex flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="relative flex-grow p-8 flex items-center justify-center">
                    <div className="relative w-full max-w-4xl min-h-[400px] bg-white/10 backdrop-blur-sm rounded-lg p-8 z-50 items-center">
                        <motion.div 
                            className="absolute w-90 h-80 -rotate-16 left-15 -top-15 cursor-pointer"
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
                            <img src="img/painting.png"></img>
                        </motion.div>
                        <motion.div 
                            className="absolute w-75 h-96 rotate-10 right-1/14 -top-10 cursor-pointer"
                            initial={{ y: "100vh", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "100vh", opacity: 0 }}
                            transition={{ 
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                                delay: 0.12
                            }}
                            whileHover={{ y: -20, scale: 1.05 }}
                            onClick={() => handlePhotoClick('fish')}
                        >
                            <img src="img/fish.png"></img>
                        </motion.div>
                        <motion.div 
                            className="absolute w-45 h-72 rotate-10 left-55 top-40 z-3 cursor-pointer"
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
                            <img src="img/stickers.png"></img>
                        </motion.div>
                        <motion.div 
                            className="absolute w-48 h-64 -rotate-14 right-1/100 top-40 z-60 cursor-pointer"
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
                            className="absolute w-40 h-40 -rotate-8 left-20 top-80 z-4 cursor-pointer"
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
                            className="absolute w-40 h-40 -rotate-8 right-50 top-70 z-4 filter saturate-0 cursor-pointer"
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
                            <img src="img/bath.png"></img>
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