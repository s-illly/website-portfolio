'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Badminton from './about/Badminton'
import Volleyball from './about/Volleyball'
import Egg from './about/Egg'
import Intro from './about/Intro'
import Pantone from './about/Pantone'
import Socials from './about/Socials'
import Spotify from './about/Spotify'
import Book from './about/Book'
import Me from './about/Me'
import Bracelet from './about/Bracelet'

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
                <Badminton />
                <Volleyball />
                <Egg />
                <Intro onPhotoClick={handlePhotoClick} />
                <Pantone />
                <Socials />
                <Spotify onPhotoClick={handlePhotoClick} />
                <Book onPhotoClick={handlePhotoClick} />
                <Me />
                <Bracelet onPhotoClick={handlePhotoClick} />

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
            </motion.main>
        </AnimatePresence>
    )
}