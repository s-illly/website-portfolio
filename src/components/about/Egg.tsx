import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Egg() {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div 
            className="absolute left-140 top-75 z-4 cursor-pointer"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.11
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                whileHover={{ y: -15, scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <img className="h-25" src="img/egg.png" alt="Egg" />
            </motion.div>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        className="absolute left-1/2 -translate-x-1/2 -top-24 w-48 bg-white rounded-lg shadow-lg p-3 text-sm"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="relative">
                            <p className="text-gray-700">Waterloo CS '29</p>
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45"></div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
} 