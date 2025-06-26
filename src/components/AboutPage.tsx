'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Badminton from './about/Badminton'
import Volleyball from './about/Volleyball'
import Egg from './about/Egg'
import Intro from './about/Intro'
import Pantone from './about/Pantone'
import Socials from './about/Socials'
import Spotify from './about/Spotify'
import Book from './about/Book'
import Me from './about/Me'


export default function About() {
    const pathname = usePathname()
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
                <Intro />
                <Pantone />
                <Socials />
                <Spotify />
                <Book />
                <Me />
            </motion.main>
        </AnimatePresence>
    )
}