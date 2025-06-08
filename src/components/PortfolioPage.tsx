'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Project from './portfolio/Project'
import Design from './portfolio/Design'
import Experience from './portfolio/Experience'
import { useState } from 'react'

export default function Portfolio() {
    const pathname = usePathname()
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

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
                    className="absolute left-40 top-20 z-3 overflow-y-auto"
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
                        <header className="w-full rounded-t-md h-8 p-3 bg-white flex flex-row items-center justify-between"> 
                            <div className="flex flex-row gap-2">
                                <div className="h-2 w-2 bg-red-300" />
                                <div className="h-2 w-2 bg-amber-300" />
                                <div className="h-2 w-2 bg-green-300 " />
                            </div>
                            <span className="text-sm font-medium !text-black">Recent Reads</span>
                            <div className="w-[72px]"></div>
                        </header>
                        {selectedImage && (
                            <div className="p-4 w-full h-full flex items-center justify-center">
                                <img 
                                    src={selectedImage} 
                                    alt="Selected design" 
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        )}
                    </div>
                </motion.div>

                <Project />
                <Design onImageSelect={setSelectedImage} />
                <Experience />
            </motion.main>
        </AnimatePresence>
    )
}