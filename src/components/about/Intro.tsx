import { motion } from 'framer-motion'

interface IntroProps {
    onPhotoClick: (photoName: string) => void;
}

export default function Intro({ onPhotoClick }: IntroProps) {
    return (
        <motion.div 
            className="absolute left-65 top-10 z-3 cursor-pointer"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.10
            }}
            whileHover={{ y: -20, scale: 1.05 }}
            onClick={() => onPhotoClick('painting')}
        >
            <div className="w-95 h-60 pl-5 pt-5"> 
                <h3 className="text-blue-400!"> s.illly ❚</h3>
                <br></br>
                <p> Hi, my name is <a className="underline decoration-sky-500/30">Lily Song</a>. 
                    I am a student at the University of Waterloo studying Computer Science. 
                    Catch me on campus drawing, reading, playing the piano, or probably studying :) </p>
            </div>
        </motion.div>
    )
} 