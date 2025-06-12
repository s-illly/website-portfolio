'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface DesignCard {
    id: string;
    image: string;
    color1: string;
    color2: string;
    color3: string;
}

interface ProjectCard {
    id: string;
    image: string;
}

interface ExperienceCard {
    id: string;
    image: string;
    title: string;
    description: string;
}

interface Modal2Props {
    isOpen: boolean;
    onClose: () => void;
    designData: DesignCard | null;
    projectData: ProjectCard | null;
    experienceData: ExperienceCard | null;
}

export default function Modal2({ isOpen, onClose, designData, projectData, experienceData }: Modal2Props) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-md z-[100] flex items-center justify-center p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="bg-white/90 rounded-lg w-150 h-135 relative cursor-move overflow-y-auto overflow-scroll border-0 [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar-track]:bg-transparent"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
                    drag
                    dragMomentum={false}
                    dragConstraints={{
                        top: -window.innerHeight / 4,
                        bottom: window.innerHeight / 4,
                        left: -window.innerWidth / 4,
                        right: window.innerWidth / 4,
                    }}
                    dragElastic={0.2}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    whileDrag={{ scale: 1.05, zIndex: 1 }}
                >
                    <header className="w-full rounded-t-md h-8 p-3 bg-white flex flex-row items-center justify-between sticky top-0 z-30"> 
                        <div className="flex flex-row gap-2">
                            <button className="h-2 w-2 bg-red-300" onClick={onClose} />
                            <div className="h-2 w-2 bg-amber-300" />
                            <div className="h-2 w-2 bg-green-300" />
                        </div>
                        <span className="text-sm font-medium !text-black">
                            {designData ? `Modal 2 - Design Details: ${designData.id}` : "Modal 2"}
                        </span>
                        <div className="w-[72px]"></div>
                    </header>
                    
                    <div className="p-6">
                        {designData && (
                            <>
                                <div className="relative mb-4">
                                    <img 
                                        src={designData.image} 
                                        alt={`Design ${designData.id}`}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-lg font-bold">Details for {designData.id}</h3>
                                    <p className="text-sm text-gray-600">HEX: {designData.color1}</p>
                                    <p className="text-sm text-gray-600">RGB: {designData.color2}</p>
                                    <p className="text-sm text-gray-600">CMYK: {designData.color3}</p>
                                </div>
                            </>
                        )}
                        {!designData && (
                            <div className="p-4 text-center text-gray-500">
                                No design selected.
                            </div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
