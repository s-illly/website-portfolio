import { motion } from 'framer-motion'

export default function Volleyball() {
    return (
        <motion.div 
            className="absolute right-100 bottom-30 z-4 cursor-pointer"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.11
            }}
        >
            <motion.div
                whileHover={{ y: -15, scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <img className="h-30" src="img/volleyball.png" alt="Volleyball" />
            </motion.div>
        </motion.div>
    )
} 