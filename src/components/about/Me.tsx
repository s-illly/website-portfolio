import { motion } from 'framer-motion'

export default function Me() {
    return (
        <>
        <motion.div 
            className="b-0 absolute left-1/3  z-1"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.12
            }}
        >
            <div className="w-125 h-auto">
                <img className="w-full h-full object-contain" src="img/me.png" alt="Me" />
            </div>
        </motion.div>

        <motion.div 
            className="b-0 absolute left-190 -top-5 rotate-10 z-3"
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
            <div className="w-35 h-auto">
                <img className="w-full h-full object-contain" src="img/lines1.png" alt="Me" />
            </div>
        </motion.div>

        <motion.div 
            className="b-0 absolute left-40 bottom-30 z-3"
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
            <div className="w-20 h-auto">
                <img className="w-full h-full object-contain" src="img/rain1.png" alt="Me" />
            </div>
        </motion.div>

        <motion.div 
            className="b-0 absolute left-35 bottom-60 z-3"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.16
            }}
        >
            <div className="w-20 h-auto">
                <img className="w-full h-full object-contain" src="img/fish1.png" alt="Me" />
            </div>
        </motion.div>

        <motion.div 
            className="b-0 absolute left-35 bottom-90 z-3"
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
            <div className="w-20 h-auto">
                <img className="w-full h-full object-contain" src="img/fish3.png" alt="Me" />
            </div>
        </motion.div>

        <motion.div 
            className="b-0 absolute left-210 top-135 rotate-10 z-3"
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
            <div className="w-25 h-auto">
                <img className="w-full h-full object-contain" src="img/lines2.png" alt="Me" />
            </div>
        </motion.div>


        <motion.div 
            className="b-0 absolute right-50 bottom-110 z-3"
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
            <div className="w-20 h-auto">
                <img className="w-full h-full object-contain" src="img/fish2.png" alt="Me" />
            </div>
        </motion.div>

        <motion.div 
            className="b-0 absolute right-40 top-10 -rotate-10 z-3"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.13
            }}
        >
            <div className="w-20 h-auto">
                <img className="w-full h-full object-contain" src="img/fish4.png" alt="Me" />
            </div>
        </motion.div>

        <motion.div 
            className="b-0 absolute right-60 top-20 z-3"
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
            <div className="w-15 h-auto">
                <img className="w-full h-full object-contain" src="img/S.png" alt="Me" />
            </div>
        </motion.div>

        <motion.div 
            className="b-0 absolute left-60 bottom-20 z-3"
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
            <div className="w-15 h-auto">
                <img className="w-full h-full object-contain" src="img/L.png" alt="Me" />
            </div>
        </motion.div>

        <motion.div 
            className="b-0 absolute right-75 top-85 z-3"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.14
            }}
        >
            <div className="w-20 h-auto">
                <img className="w-full h-full object-contain" src="img/sunny.png" alt="Me" />
            </div>
        </motion.div>

        <motion.div 
            className="b-0 absolute left-110 bottom-30  z-10"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.13
            }}
        >
            <div className="w-40 h-auto">
                <img className="w-full h-full object-contain" src="img/hat.png" alt="Me" />
            </div>
        </motion.div>
        </>
    )
} 