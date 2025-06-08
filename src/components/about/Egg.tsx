import { motion } from 'framer-motion'

export default function Egg() {
    return (
        <motion.div 
            className="absolute right-105 top-85 z-4 cursor-pointer"
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
                <img className=" h-25" src="img/egg.png" alt="Egg" />
            </motion.div>
        </motion.div>
    )
} 