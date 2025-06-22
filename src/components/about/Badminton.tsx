import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Badminton() {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div 
            className="absolute right-85 bottom-30 z-4 cursor-pointer"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.10
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <img className="h-25" src="img/badminton.png" alt="Badminton" />
            </motion.div>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        className="absolute left-1/2 -translate-x-1/2 -top-14 w-48 bg-white rounded-3xl shadow-lg p-3 text-sm"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="relative">
                            <p className="text-gray-700">Comp girls doubles :)</p>
                            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45"></div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
} 