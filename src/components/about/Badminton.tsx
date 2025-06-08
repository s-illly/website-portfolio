import { motion } from 'framer-motion'

export default function Badminton() {
    return (
        <motion.div 
            className="absolute right-62 top-78 z-4 cursor-pointer"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.10
            }}
        >
            <motion.div
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <img className="h-30" src="img/badminton.png" alt="Badminton" />
            </motion.div>
        </motion.div>
    )
} 