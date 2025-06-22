'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { getContrastingTextColor } from '@/utils/colorUtils'
import { useState } from 'react'

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

interface Modal2Props {
    isOpen: boolean;
    onClose: () => void;
    designData: DesignCard | null;
    projectData: ProjectCard | null;
    experienceData: ExperienceCard | null;
    onWorkImageClick: (imagePath: string) => void;
}

export default function Modal2({ isOpen, onClose, designData, projectData, experienceData, onWorkImageClick }: Modal2Props) {
    const [isDragging, setIsDragging] = useState(false)

    const handleImageClick = (imagePath: string) => {
        if (experienceData) {
            onWorkImageClick(imagePath);
        }
    }

    if (!isOpen) return null;

    const textColor = designData ? getContrastingTextColor(designData.colorDetail1.hex) : 'black';

    return (
        <AnimatePresence>
            <motion.div 
                className="absolute left-160 top-70 cursor-move"
                drag
                dragMomentum={false}
                dragConstraints={{
                    top: -window.innerHeight / 8,
                    bottom: window.innerHeight / 4,
                    left: -window.innerWidth / 8,
                    right: window.innerWidth / 8,
                }}
                dragElastic={0.2}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setIsDragging(false)}
            >
                {designData && designData.id.startsWith('design-') && (
                    <div className="w-60 h-30 flex flex-col items-center justify-start rounded-lg bg-white">
                        <div className="flex flex-col items-start w-full p-4 rounded-lg shadow-md" style={{ backgroundColor: designData.colorDetail2.hex }}>
                            <span className="text-xs uppercase tracking-widest self-end" style={{ color: textColor }}>Secondary</span>

                            <div className="w-full mt-2">
                                <table className="w-full text-left text-sm" style={{ color: textColor }}>
                                    <thead>
                                        <tr className="border-b border-gray-400">
                                            <th className="py-2">HEX</th>
                                            <th className="py-2">RGB</th>
                                            <th className="py-2">CMYK</th>
                                        </tr>
                                    </thead>
                                    <tbody>    
                                        <tr>
                                            <td className="py-2">{designData.colorDetail2.hex}</td>
                                            <td className="py-2">{designData.colorDetail2.rgb}</td>
                                            <td className="py-2">{designData.colorDetail2.cmyk}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
                {projectData && (
                    <>
                        <div className="bg-white rounded-lg shadow-lg p-4 w-[400px]">
                            <div className="space-y-3">
                                <div>
                                    <p className="text-xs font-medium text-gray-500 mb-0.5">Purpose</p>
                                    <p className="!text-xs text-gray-700" style={{ fontSize: '0.625rem !important' }}>{projectData.purpose}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-gray-500 mb-0.5">Abstract</p>
                                    <p className="!text-xs text-gray-700" style={{ fontSize: '0.625rem !important' }}>{projectData.abstract}</p>
                                </div>
                                
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-xs font-medium text-gray-500 mb-1">Skills</p>
                                        <div className="flex flex-wrap gap-1">
                                            {projectData.skills.map((skill, index) => (
                                                <span 
                                                    key={index}
                                                    className="px-2 py-0.5 bg-blue-100 text-blue-400 rounded-full !text-xs"
                                                    style={{ fontSize: '0.625rem !important' }}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                
                {experienceData && (
                    <>
                        <div className="bg-white rounded-lg shadow-lg p-4 w-[280px]">
                            <div className="space-y-3">
                                <div>
                                    <p className="text-xs font-medium text-gray-500 mb-1">Key Tasks</p>
                                    <div className="space-y-1">
                                        {experienceData.tasks.map((task, index) => (
                                            <div key={index} className="flex items-start space-x-2">
                                                <div className="flex-shrink-0 mt-0.5">
                                                    <svg className="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <p className="!text-xs text-gray-700" style={{ fontSize: '0.625rem !important' }}>{task}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {experienceData.work && experienceData.work.length > 0 && (
                                    <div>
                                        <div className="grid grid-cols-2 gap-2">
                                            {experienceData.work.map((imagePath, index) => (
                                                <div 
                                                    key={index} 
                                                    className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                                                    onClick={() => !isDragging && handleImageClick(imagePath)}
                                                >
                                                    <img 
                                                        src={imagePath} 
                                                        alt={`Work image ${index + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )}
                {!designData && !projectData && !experienceData && (
                    <motion.div 
                        className="text-center text-gray-500 w-64 h-48 bg-white rounded-lg"
                        initial={{ y: "100vh", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "100vh", opacity: 0 }}
                        transition={{ 
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            delay: 0.12
                        }}
                    >
                    </motion.div>
                )}
            </motion.div>
        </AnimatePresence>
    );
}