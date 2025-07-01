import { motion } from 'framer-motion'
import Socials from './Socials'

export default function Intro() {
    return (
        <div className="relative w-120 pt-10 h-auto">
            <motion.div 
                className="z-3 pl-8"
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
                <div className="w-95 h-60 pl-5 pt-5"> 
                    <h3 className="text-blue-400!"> s.illly ❚</h3>
                    <br></br>
                    <p> Hi, my name is <a className="underline decoration-sky-500/30">Lily Song</a>. 
                        I am a student at the <a className="underline decoration-sky-500/30">University of Waterloo</a> studying <a className="underline decoration-sky-500/30">Computer Science.</a> Catch me on campus drawing, reading, playing the piano, or probably studying :) </p>
                </div>
            </motion.div>

            <div className="absolute top-25 left-0 z-10">
                <Socials />
            </div>
        </div>
    )
} 