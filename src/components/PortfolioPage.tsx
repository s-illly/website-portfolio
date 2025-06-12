'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Project from './portfolio/Project'
import Design from './portfolio/Design'
import Experience from './portfolio/Experience'
import Modal1 from './modals/modal1'
import Modal2 from './modals/modal2'
import Modal3 from './modals/modal3'
import { useState } from 'react'


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

export default function Portfolio() {
    const pathname = usePathname()
    const [selectedDesignData, setSelectedDesignData] = useState<DesignCard | null>(null)
    const [selectedProjectData, setSelectedProjectData] = useState<ProjectCard | null>(null)
    const [selectedExperienceData, setSelectedExperienceData] = useState<ExperienceCard | null>(null)

    const [isModal1Open, setIsModal1Open] = useState(false)
    const [isModal2Open, setIsModal2Open] = useState(false)
    const [isModal3Open, setIsModal3Open] = useState(false)

    // Handler for when a design image is clicked from Design's internal modal
    const handleDesignImageClick = (designCard: DesignCard) => {
        setSelectedDesignData(designCard)
        setSelectedProjectData(null) // Clear other data
        setSelectedExperienceData(null) // Clear other data
        setIsModal1Open(true)
        setIsModal2Open(true)
        setIsModal3Open(true)
    }

    // Handler for when a project image is clicked from Project's internal modal
    const handleProjectImageClick = (projectCard: ProjectCard) => {
        setSelectedProjectData(projectCard)
        setSelectedDesignData(null) // Clear other data
        setSelectedExperienceData(null) // Clear other data
        setIsModal1Open(true)
        setIsModal2Open(true)
        setIsModal3Open(true)
    }

    // Handler for when an experience image is clicked from Experience's internal modal
    const handleExperienceImageClick = (experienceCard: ExperienceCard) => {
        setSelectedExperienceData(experienceCard)
        setSelectedDesignData(null) // Clear other data
        setSelectedProjectData(null) // Clear other data
        setIsModal1Open(true)
        setIsModal2Open(true)
        setIsModal3Open(true)
    }

    // Handlers to close modals
    const closeModal1 = () => setIsModal1Open(false)
    const closeModal2 = () => setIsModal2Open(false)
    const closeModal3 = () => setIsModal3Open(false)


    return (
        <AnimatePresence mode="wait">
            <motion.main 
                key={pathname}
                className="min-h-screen relative overflow-hidden flex flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}

            >
                {/* Main Info */}
                <motion.div 
                    className="absolute left-40 top-20 z-3 w-110 h-140 overflow-y-auto overflow-scroll border-0 [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar-track]:bg-transparent"
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
                        top: -window.innerHeight / 4,
                        bottom: window.innerHeight / 4,
                        left: -window.innerWidth / 4,
                        right: window.innerWidth / 4,
                    }}
                    dragElastic={0.2}
                >
                    <div className="rounded-lg bg-blue-200 flex-col items-center">
                        <header className="w-full rounded-t-md h-8 p-3 bg-white flex flex-row items-center justify-between sticky top-0 z-10"> 
                            <div className="flex flex-row gap-2">
                                <div className="h-2 w-2 bg-red-300" />
                                <div className="h-2 w-2 bg-amber-300" />
                                <div className="h-2 w-2 bg-green-300 " />
                            </div>
                            <span className="text-sm font-medium !text-black">Selected Design</span>
                            <div className="w-[72px]"></div>
                        </header>
                        {selectedDesignData && (
                            <div className="p-4 w-full h-full flex items-center justify-center flex-col">
                                <img 
                                    src={selectedDesignData.image} 
                                    alt={`Selected Design: ${selectedDesignData.id}`}
                                    className="max-w-full max-h-full object-contain"
                                />
                                <div className="mt-4 text-sm text-gray-600">
                                    <p>ID: {selectedDesignData.id}</p>
                                    <p>HEX: {selectedDesignData.color1}</p>
                                    <p>RGB: {selectedDesignData.color2}</p>
                                    <p>CMYK: {selectedDesignData.color3}</p>
                                </div>
                            </div>
                        )}
                        {selectedProjectData && (
                            <div className="p-4 w-full h-full flex items-center justify-center flex-col">
                                <img 
                                    src={selectedProjectData.image} 
                                    alt={`Selected Project: ${selectedProjectData.id}`}
                                    className="max-w-full max-h-full object-contain"
                                />
                                <div className="mt-4 text-sm text-gray-600">
                                    <p>ID: {selectedProjectData.id}</p>
                                
                                </div>
                            </div>
                        )}
                        {selectedExperienceData && (
                            <div className="p-4 w-full h-full flex items-center justify-center flex-col">
                                <img 
                                    src={selectedExperienceData.image} 
                                    alt={`Selected Experience: ${selectedExperienceData.id}`}
                                    className="max-w-full max-h-full object-contain"
                                />
                                <div className="mt-4 text-sm text-gray-600">
                                    <p>ID: {selectedExperienceData.id}</p>
                                    <p>Title: {selectedExperienceData.title}</p>
                                    <p>Description: {selectedExperienceData.description}</p>
                                </div>
                            </div>
                        )}
                        {!selectedDesignData && !selectedProjectData && !selectedExperienceData && (
                            <div className="p-4 text-center text-gray-500">
                                Click an item to see details here.
                            </div>
                        )}
                    </div>
                </motion.div>

                <Project onImageSelect={handleProjectImageClick} />
                <Design onImageSelect={handleDesignImageClick} />
                <Experience onImageSelect={handleExperienceImageClick} />

                <Modal1
                    isOpen={isModal1Open}
                    onClose={closeModal1}
                    designData={selectedDesignData}
                    projectData={selectedProjectData}
                    experienceData={selectedExperienceData}
                />
                <Modal2
                    isOpen={isModal2Open}
                    onClose={closeModal2}
                    designData={selectedDesignData}
                    projectData={selectedProjectData}
                    experienceData={selectedExperienceData}
                />
                <Modal3
                    isOpen={isModal3Open}
                    onClose={closeModal3}
                    designData={selectedDesignData}
                    projectData={selectedProjectData}
                    experienceData={selectedExperienceData}
                />

            </motion.main>
        </AnimatePresence>
    )
}