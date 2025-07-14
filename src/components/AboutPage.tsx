'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

import Intro from './about/Intro'
import Pantone from './about/Pantone'
import Spotify from './about/Spotify'
import Book from './about/Book'
import Me from './about/Me'

export default function About() {
    const pathname = usePathname()
    return (
        <>
        <AnimatePresence mode="wait">
            <motion.main 
                key={pathname}
                className="min-h-screen relative flex flex-col items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  
                                    xl:pl-16 lg:pl-0 md:pl-0  sm:pl-12 pl-0
                                    xl:overflow-hidden lg:overflow-hidden">
                    <div className="lg:pl-36 md:pl-24 sm:pl-20">
                        <Intro />
                        <Book />   
                    </div>

                    <div className="pr-40">
                        <Me />      
                    </div>

                    <div className="md:pl-80 sm:pl-40 pl-10 lg:pl-0 xl:pl-0">
                        <Spotify />
                        <Pantone />
                    </div>
                </div>
            </motion.main>
        </AnimatePresence>
        </>
    )
}