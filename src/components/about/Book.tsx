import { motion } from 'framer-motion'

interface BookProps {
    onPhotoClick: (photoName: string) => void;
}

export default function Book({ onPhotoClick }: BookProps) {
    return (
        <motion.div 
            className="absolute left-60 bottom-45 z-3 w-75 h-70 overflow-y-auto"
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
            <header className="w-full rounded-t-md h-8 p-3 bg-white flex flex-row items-center justify-between"> 
                <div className="flex flex-row gap-2">
                    <div className="h-2 w-2 bg-red-300" />
                    <div className="h-2 w-2 bg-amber-300" />
                    <div className="h-2 w-2 bg-green-300 " />
                </div>
                    <span className="text-sm font-medium !text-black">Recent Reads</span>
                <div className="w-[72px]"></div>
            
            </header>
                <main className="w-full flex flex-col gap-2 items-start pt-2 p-4">
                    <div className="flex items-center w-full">
                        <img src="/img/death.png" alt="Cover Art" className="w-12 h-16 rounded-md mr-3" />
                        <div className="flex-grow">
                            <p className="text-sm font-bold text-gray-800">Death's End</p>
                            <p className="!text-[12px] text-gray-600">Cixin Liu</p>
                            <div className="flex gap-1 mt-1">
                                <span className="text-blue-600 text-sm">★</span>
                                <span className="text-blue-600 text-sm">★</span>
                                <span className="text-blue-600 text-sm">★</span>
                                <span className="text-blue-600 text-sm">★</span>
                                <span className="text-gray-400 text-sm">☆</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex items-center w-full">
                        <img src="/img/devils.png" alt="Cover Art" className="w-12 h-16 rounded-md mr-3" />
                        <div className="flex-grow">
                            <p className="text-sm font-bold text-gray-800">All the Devils Are Here</p>
                            <p className="!text-[12px] text-gray-600">Louise Penny</p>
                            <div className="flex gap-1 mt-1">
                                <span className="text-blue-600 text-sm">★</span>
                                <span className="text-blue-600 text-sm">★</span>
                                <span className="text-blue-600 text-sm">★</span>
                                <span className="text-blue-400 text-sm">☆</span>
                                <span className="text-gray-400 text-sm">☆</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center w-full">
                        <img src="/img/seven.png" alt="Cover Art" className="w-12 h-16 rounded-md mr-3" />
                        <div className="flex-grow">
                            <p className="text-sm font-bold text-gray-800"> Seven and a Half Lessons About the Brain</p>
                            <p className="!text-[12px] text-gray-600">Lisa Feldman Barrett</p>
                            <div className="flex gap-1 mt-1">
                                <span className="text-blue-600 text-sm">★</span>
                                <span className="text-blue-600 text-sm">★</span>
                                <span className="text-blue-600 text-sm">★</span>
                                <span className="text-blue-400 text-sm">☆</span>
                                <span className="text-gray-400 text-sm">☆</span>
                            </div>
                        </div>   
                    </div>
                    
                </main>
                
            </div>
        </motion.div>
    )
} 