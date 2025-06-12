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
}

interface Modal3Props {
    isOpen: boolean;
    onClose: () => void;
    designData: DesignCard | null;
    projectData: ProjectCard | null;
    experienceData: ExperienceCard | null;
}

export default function Modal3({ isOpen, onClose, designData, projectData, experienceData }: Modal3Props) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div className="absolute h-40 w-80 left-100 top-40 bg-amber-100"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.13
            }}
            whileHover={{ y: -20, scale: 1.05 }}
            drag
            dragMomentum={false}
            dragConstraints={{
                top: -window.innerHeight / 2,
                bottom: window.innerHeight / 2,
                left: -window.innerWidth / 2,
                right: window.innerWidth / 2,
            }}
            dragElastic={0.2}
            >
                {designData && designData.id.startsWith('design-') && (
                    <div className="p-6">
                        <div className="mt-4">
                            <p className="text-sm text-gray-600">HEX: {designData.color1}</p>
                            <p className="text-sm text-gray-600">RGB: {designData.color2}</p>
                            <p className="text-sm text-gray-600">CMYK: {designData.color3}</p>
                        </div>
                    </div>
                )}
                {projectData && (
                    <>
                        <div className="relative mb-4">
                            <img 
                                src={projectData.image} 
                                alt={`Project ${projectData.id}`}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="mt-4">

                        </div>
                    </>
                )}
                {experienceData && (
                    <>
                        <div className="relative mb-4">
                            <img 
                                src={experienceData.image} 
                                alt={`Experience ${experienceData.id}`}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="mt-4">

                        </div>
                    </>
                )}
                {!designData && !projectData && !experienceData && (
                    <div className="p-4 text-center text-gray-500">
                        No item selected.
                    </div>
                )}
            </motion.div>
        </AnimatePresence>
    );
}