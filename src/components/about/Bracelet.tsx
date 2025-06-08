import { motion } from 'framer-motion'

interface BraceletProps {
    onPhotoClick: (photoName: string) => void;
}

export default function Bracelet({ onPhotoClick }: BraceletProps) {
    return (
        <motion.div 
            className="absolute left-40 top-20 z-4 cursor-pointer"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.17
            }}
            whileHover={{ y: -20, scale: 1.05 }}
            onClick={() => onPhotoClick('bath')}
        >
            <img className="h-125" src="img/bracelet.png" alt="Bracelet" />
        </motion.div>
    )
} 