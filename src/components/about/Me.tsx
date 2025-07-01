import Image from 'next/image'
import meImg from '../../imgs/me.webp'
import lines1Img from '../../imgs/lines1.webp'
import lines2Img from '../../imgs/lines2.webp'
import Egg from './Egg'


import { motion} from 'framer-motion'


export default function Me() {

    return (
        <>
       
        <div className="relative w-125 h-auto">
            
            <motion.div 
                className="z-1"
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
                <Image className="w-full h-full object-contain" src={meImg} alt="Me" width={450} height={450} />
            </motion.div>

            <div className="absolute top-1/2 left-0 translate-x-2/3 -translate-y-1/3 z-10">
                <Egg />
            </div>

            <motion.div 
                className="absolute -top-5 right-25 rotate-10 z-3"
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
                    <Image className="w-full h-full object-contain" src={lines1Img} alt="Me" width={140} height={140} />
                </div>
            </motion.div>

            <motion.div 
                className="absolute bottom-12 right-12 rotate-10 z-3"
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
                    <Image className="w-full h-full object-contain" src={lines2Img} alt="Me" width={100} height={100} />
                </div>
            </motion.div>
        </div>
        </>
    )
} 