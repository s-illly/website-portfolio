import { motion } from 'framer-motion'
import { FaFolder, FaFolderOpen } from 'react-icons/fa'
import { useState } from 'react'

export default function Project() {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div 
            className="absolute right-30 top-20 z-3 overflow-y-auto"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.11
            }}
            whileHover={{ y: -20, scale: 1.05 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="rounded-lg bg-blue-200 flex flex-col items-center">
                {isHovered ? (
                    <FaFolderOpen className="text-4xl text-blue-600" />
                ) : (
                    <FaFolder className="text-4xl text-blue-600" />
                )}
            </div>
        </motion.div>
    )
} 