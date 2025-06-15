import { motion , AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface SpotifyProps {
    onPhotoClick: (photoName: string) => void;
}

export default function Spotify({ onPhotoClick }: SpotifyProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0)

    const tracks = [
        { id: 'track-1', image: '/img/summit.png', title: 'Summit - Reworked', artist: 'Seb Wery' },
        { id: 'track-2', image: '/img/id.png', title: 'I Don\'t Understand But I Luv U', artist: 'SEVENTEEN' },
        { id: 'track-3', image: '/img/frak.png', title: 'Fraktsiya', artist: 'MARK, Lee Young Ji' },
        { id: 'track-4', image: '/img/blackmemory.png', title: 'BLACK MEMORY', artist: 'THE ORAL CIGARETTES' },
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
        <motion.div
            className="absolute right-80 top-15 z-3 w-60 h-80 overflow-hidden"
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
            onClick={() => {
                onPhotoClick(currentTrack.id); // Assuming onPhotoClick expects the ID of the current track
                setIsModalOpen(true);
            }}
        >
            <div className="rounded-2xl h-full w-full bg-white flex flex-col items-center p-4 relative border border-gray-200">
                {/* Album Cover Section */}
                <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center overflow-hidden relative">
                    <img src={currentTrack.image} alt="Album Cover" className="w-full h-full object-cover rounded-md" />
                </div>

                {/* Song Info */}
                <div className="w-full mt-2">
                    <p className="text-gray-900 font-bold text-md mt-1">{currentTrack.title}</p>
                    <p className="text-2xs! text-gray-700">{currentTrack.artist}</p>
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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M13.242 15.22a.75.75 0 000-1.06L9.53 10H22.5a.75.75 0 000-1.5H9.53l3.712-3.712a.75.75 0 00-1.06-1.06l-5.25 5.25a.75.75 0 000 1.06l5.25 5.25a.75.75 0 001.06 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                   
                    <button className="text-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                        </svg>
                    </button>
                     <button onClick={handleBackward}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M10.758 15.22a.75.75 0 010-1.06L14.47 10H1.5a.75.75 0 010-1.5h12.97l-3.712-3.712a.75.75 0 011.06-1.06l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 01-1.06 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                    
                </div>

                
            </div>
        </motion.div>
        </>
    )
} 