import { motion } from 'framer-motion'

interface SpotifyProps {
    onPhotoClick: (photoName: string) => void;
}

export default function Spotify({ onPhotoClick }: SpotifyProps) {
    return (
        <motion.div 
            className="absolute right-60 top-15 z-3 w-80 h-80 overflow-y-auto"
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
            onClick={() => onPhotoClick('stickers')}
        >
            <div className="rounded-md h-full w-full bg-blue-50/50 flex flex-col items-center">
            <header className="w-full rounded-t-md h-8 p-3 bg-white flex flex-row gap-2"> 
                <div className="h-2 w-2 bg-red-300" />
                <div className="h-2 w-2 bg-amber-300" />
                <div className="h-2 w-2 bg-green-300" />
            
            </header>
                <div className="w-full flex flex-col gap-2 items-start p-4">
                    <div className="flex items-center w-full">
                        <img src="/img/blackmemory.png" alt="Album Art" className="w-12 h-12 rounded-md mr-3" />
                        <div className="flex-grow">
                            <p className="text-sm font-bold text-gray-800">BLACK MEMORY</p>
                            <p className="!text-[12px] font-light text-gray-600">THE ORAL CIGARETTES</p>
                        </div>
                        <span className="ml-2 text-blue-600 text-sm">★</span>
                    </div>

                    <div className="flex items-center w-full">
                        <img src="/img/id.png" alt="Album Art" className="w-12 h-12 rounded-md mr-3" />
                        <div className="flex-grow">
                            <p className="text-sm font-bold text-gray-800">I Don't Understand But I Luv U</p>
                            <p className="!text-[12px] text-gray-600">SEVENTEEN</p>
                        </div>
                        <span className="ml-2 text-gray-400 text-sm">☆</span>
                    </div>
                    
                    <div className="flex items-center w-full">
                        <img src="/img/frak.png" alt="Album Art" className="w-12 h-12 rounded-md mr-3" />
                        <div className="flex-grow">
                            <p className="text-sm font-bold text-gray-800">Fraktsiya</p>
                            <p className="!text-[12px] text-gray-600">MARK, Lee Young Ji</p>
                        </div>
                        <span className="ml-2 text-blue-600 text-sm">★</span>
                    </div>

                    <div className="flex items-center w-full">
                        <img src="/img/summit.png" alt="Album Art" className="w-12 h-12 rounded-md mr-3" />
                        <div className="flex-grow">
                            <p className="text-sm font-bold text-gray-800">Summit - Reworked</p>
                            <p className="!text-[12px] text-gray-600">Seb Wery</p>
                        </div>
                        <span className="ml-2 text-blue-600 text-sm">★</span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
} 