import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import fish2Img from '../../imgs/fish2.webp'
import fish4Img from '../../imgs/fish4.webp'
import SImg from '../../imgs/S.webp'
import sunnyImg from '../../imgs/sunny.webp'


export default function Spotify() {
  
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0)

    const tracks = [
        { id: 'track-1', image: '/imgs/summit.jpeg', title: 'Summit - Reworked', artist: 'Seb Wery' },
        { id: 'track-2', image: '/imgs/id.jpeg', title: 'I Don\'t Understand But I Luv U', artist: 'SEVENTEEN' },
        { id: 'track-3', image: '/imgs/frak.jpeg', title: 'Fraktsiya', artist: 'MARK, Lee Young Ji' },
        { id: 'track-4', image: '/imgs/blackmemory.jpeg', title: 'BLACK MEMORY', artist: 'THE ORAL CIGARETTES' },
        { id: 'track-5', image: '/imgs/tatsuya.jpeg', title: 'パノプティコン', artist: 'Tatsuya Kitani' },
    ];

    const currentTrack = tracks[currentTrackIndex];

    const handleForward = () => {
        setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
    };

    const handleBackward = () => {
        setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length);
    };

    return (
        <>
        <div className="relative w-120 pt-12 h-auto">
        <motion.div
            className="-translate-x-10 z-3 w-60 h-80 overflow-hidden"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.13
            }}
            whileHover={{ y: -5, scale: 1.05 }}
        >
            <div className="rounded-2xl h-full w-full bg-white flex flex-col items-center p-4 relative border border-gray-200">
                {/* Album Cover Section */}
                <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center overflow-hidden relative">
                    <Image src={currentTrack.image} alt="Album Cover" className="w-full h-full object-cover rounded-md" width={100} height={100} loading="lazy" />
                </div>

                {/* Song Info */}
                <div className="w-full mt-2">
                    <p className="text-gray-900 font-bold !text-[0.9rem] mt-1">{currentTrack.title}</p>
                    <p className="!text-[0.625rem] text-gray-700">{currentTrack.artist}</p>
                </div>

                {/* Progress Bar */}
                <div className="w-full flex items-center mt-4">
                    <span className="text-xs text-gray-500 mr-2">0:00</span> {/* Placeholder time */}
                    <div className="flex-grow h-1 bg-gray-300 rounded-full">
                        <div className="h-full w-1/4 bg-gray-800 rounded-full"></div> {/* Placeholder progress */}
                    </div>
                    <span className="text-xs text-gray-500 ml-2">3:30</span> {/* Placeholder total time */}
                </div>

                {/* Controls */}
                <div className="w-full flex items-center justify-center gap-6 mt-4 text-gray-800">
                    <button onClick={handleForward}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 cursor-pointer">
                            <path fillRule="evenodd" d="M13.242 15.22a.75.75 0 000-1.06L9.53 10H22.5a.75.75 0 000-1.5H9.53l3.712-3.712a.75.75 0 00-1.06-1.06l-5.25 5.25a.75.75 0 000 1.06l5.25 5.25a.75.75 0 001.06 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                   
                    <button className="text-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                        </svg>
                    </button>
                     <button onClick={handleBackward}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 cursor-pointer">
                            <path fillRule="evenodd" d="M10.758 15.22a.75.75 0 010-1.06L14.47 10H1.5a.75.75 0 010-1.5h12.97l-3.712-3.712a.75.75 0 011.06-1.06l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 01-1.06 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                    
                </div> 
            </div>
        </motion.div>

        <motion.div 
            className="b-0 absolute -bottom-10 left-35 z-3"
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
            <div className="w-30 h-auto">
                <Image className="w-full h-auto object-contain" src={sunnyImg} alt="Me" width={100} />
            </div>
        </motion.div>
        <motion.div 
            className="b-0 absolute top-18 left-50 z-3"
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
                <Image className="w-full h-auto object-contain" src={SImg} alt="Me" width={60} />
            </div>
        </motion.div>

        <motion.div 
            className="b-0 absolute top-15 left-65 z-3"
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
                <Image className="w-full h-auto object-contain" src={fish2Img} alt="Me" width={80} />
            </div>
        </motion.div>

        <motion.div 
            className="b-0 absolute -rotate-10 top-45 left-55 z-3"
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
                <Image className="w-full h-auto object-contain" src={fish4Img} alt="Me" width={80} />
            </div>
        </motion.div>
        </div>
        </>
    )
} 