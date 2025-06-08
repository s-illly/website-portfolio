import { motion } from 'framer-motion'

export default function Me() {
    return (
        <motion.div 
            className="b-0 absolute left-1/3  z-1"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.15
            }}
        >
            <div className="w-125 h-auto">
                <img className="w-full h-full object-contain" src="img/me.png" alt="Me" />
            </div>
        </motion.div>
    )
} 