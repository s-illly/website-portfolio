'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Project from './portfolio/Project'
import Design from './portfolio/Design'
import Experience from './portfolio/Experience'
import Modal1 from './modals/modal1'
import Modal2 from './modals/modal2'
import Modal3 from './modals/modal3'
import { useState, useEffect } from 'react'

interface ColorDetail {
    hex: string;
    rgb: string;
    cmyk: string;
}

interface DesignCard {
    id: string;
    image: string;
    name: string;
    colorDetail1: ColorDetail;
    colorDetail2: ColorDetail;
    colorDetail3: ColorDetail;
}

interface ProjectCard {
    id: string;
    image: string;
    purpose: string;
    abstract: string;
    awards: string[];
    skills: string[],
    video: string;
    links: string[];
}

interface ExperienceCard {
    id: string;
    image: string;
    title: string;
    description: string;
    category: string;
    skills: string[]
    duration: string
    location: string
    tasks: string[]
    work: string[]
}

export default function Portfolio() {
    const pathname = usePathname()
    const [selectedDesignData, setSelectedDesignData] = useState<DesignCard | null>(null)
    const [selectedProjectData, setSelectedProjectData] = useState<ProjectCard | null>(null)
    const [selectedExperienceData, setSelectedExperienceData] = useState<ExperienceCard | null>(null)
    const [dragConstraints, setDragConstraints] = useState({
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    })

    const [isModal1Open, setIsModal1Open] = useState(true)
    const [isModal2Open, setIsModal2Open] = useState(true)
    const [isModal3Open, setIsModal3Open] = useState(true)

    useEffect(() => {
        setDragConstraints({
            top: -window.innerHeight / 6,
            bottom: window.innerHeight / 2,
            left: -window.innerWidth / 6,
            right: window.innerWidth / 2,
        })
    }, [])

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

    // Handler for when a work image is clicked in Modal2
    const handleWorkImageClick = (imagePath: string) => {
        if (selectedExperienceData) {
            const updatedExperience = {
                ...selectedExperienceData,
                image: imagePath
            };
            setSelectedExperienceData(updatedExperience);
        }
    }

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
                    className="absolute left-40 top-20 z-0"
                    initial={{ y: "100vh", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "100vh", opacity: 0 }}
                    transition={{ 
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: 0.13
                    }}
                    onClick={(e) => e.stopPropagation()}
                    drag
                    dragMomentum={false}
                    dragConstraints={dragConstraints}
                    dragElastic={0.1}
                >
                    <div className="rounded-t-2xl bg-white w-110 h-120 flex-col items-center shadow-lg border cursor-move border-gray-200">
                        <header className="w-full rounded-t-2xl h-8 p-3 bg-gray-50 flex flex-row items-center justify-between sticky top-0 z-10 border-b border-gray-200"> 
                            <div className="flex flex-row gap-2">
                                <div className="h-2 w-2 bg-red-300" />
                                <div className="h-2 w-2 bg-amber-300" />
                                <div className="h-2 w-2 bg-green-300" />
                            </div>
                            <span className="text-sm font-medium text-gray-700">Photo Booth</span>
                            <div className="w-[72px]"></div>
                        </header>
                        {selectedDesignData && (
                            <div className="p-4 w-full h-full flex items-center justify-center flex-col bg-white rounded-2xl">
                                <img 
                                    src={selectedDesignData.image} 
                                    alt={`Selected Design: ${selectedDesignData.id}`}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        )}
                        {selectedProjectData && (
                            <div className="p-4 w-full h-full flex items-center justify-center flex-col bg-white rounded-t-2xl ">
                                <img 
                                    src={selectedProjectData.image} 
                                    alt={`Selected Project: ${selectedProjectData.id}`}
                                    className="max-w-full max-h-full object-contain"
                                />
                                
                            </div>
                        )}
                        {selectedExperienceData && (
                            <div className="p-4 w-full h-full flex items-center justify-center flex-col bg-white rounded-t-2xl">
                                <img 
                                    src={selectedExperienceData.image} 
                                    alt={`Selected Experience: ${selectedExperienceData.id}`}
                                    className="max-w-full max-h-full object-contain"
                                />
                                
                            </div>
                        )}
                        {!selectedDesignData && !selectedProjectData && !selectedExperienceData && (
                            <div className="p-4 w-full h-full flex items-center justify-center flex-col bg-white rounded-t-2xl">
                                <img 
                                    src='/img/portfolio.png'
                                    alt="Portfolio"
                                    className="max-w-full max-h-full object-contain mt-59 z-20"
                                />
                            </div>
                        )}

                        <div className="sticky bottom-0 left-0 right-0 h-16 bg-[#4A4A4A] flex items-center justify-center px-4 space-x-4 rounded-b-2xl">
                            <div className="flex items-center space-x-2">
                                <button className="p-2 rounded bg-gray-600 text-white flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75A2.25 2.25 0 0 1 15.75 13.5H18a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
                                    </svg>
                                </button>
                                <button className="p-2 rounded bg-gray-600 text-white flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175m0 0a2.25 2.25 0 0 1-2.244 2.244W9.75v.69C3.003 12.217 5.114 13.5 7.72 13.5h.721m-6.083 0h2.253M13.5 10.5h.008v.008H13.5V10.5ZM12 18.75a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 .75.75Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.353 16.119A2.716 2.716 0 0 1 16.5 11.25c0-1.776-.703-3.45-1.988-4.653M9.75 14.25a3 3 0 0 0 3-3V9.563m-1.5 3.75a3 3 0 0 1-3-3V6A3 3 0 0 1 6 3h.282c.28-.711.9-1.292 1.637-1.468A2.998 2.998 0 0 1 12 2.25c.915 0 1.794.344 2.478.961C15.07 3.842 15.5 4.755 15.5 5.772v.631o-.005.003A3.004 3.004 0 0 1 18 9.75v.75a6.75 6.75 0 0 1-6.75 6.75h-1.5a2.25 2.25 0 00-2.25 2.25v.375c0 .621.504 1.125 1.125 1.125h.375M12 10.5a.75.75 0 00.75-.75V7.5a.75.75 0 00-1.5 0v2.25c0 .414.336.75.75.75Z" />
                                    </svg>
                                </button>
                                <button className="p-2 rounded bg-gray-600 text-white flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                                    </svg>
                                </button>
                            </div>
                            <button className="h-8 w-8 rounded-full bg-blue-400 flex items-center justify-center shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.69a1.5 1.5 0 00-2.12 0L9.47 16.06a1.5 1.5 0 01-2.12 0L3 10.59v5.47zM6 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75-5.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <button className=" rounded bg-gray-600 text-white flex items-center justify-center px-4">
                                s.illly
                            </button>
                        </div>
                        
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
                    onWorkImageClick={handleWorkImageClick}
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