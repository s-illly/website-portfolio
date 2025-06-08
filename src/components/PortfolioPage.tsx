'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Project from './portfolio/Project'

export default function Portfolio() {
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
                {/* Main Info */}
                <motion.div 
                    className="absolute left-30 top-20 z-3 overflow-y-auto"
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
                >
                    <div className="rounded-lg w-150 h-135 bg-blue-200 flex flex-col items-center">
                        <header className="rounded-t-lg h-12 w-full bg-white">
                        </header>
                    </div>
                </motion.div>

                <Project />
            </motion.main>
        </AnimatePresence>
    )
}