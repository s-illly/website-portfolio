'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { getContrastingTextColor } from '@/utils/colorUtils'
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
    purpose: string
    abstract: string
    awards: string[]
    skills: string[],
    video: string
    links: string[]

}

interface ExperienceCard {
    id: string
    image: string
    title: string
    description: string
    category: string
    skills: string[]
    duration: string
    location: string
    tasks: string[]
    work: string[]
}

interface Modal3Props {
    isOpen: boolean;
    onClose: () => void;
    designData: DesignCard | null;
    projectData: ProjectCard | null;
    experienceData: ExperienceCard | null;
}

export default function Modal3({ isOpen, designData, projectData, experienceData }: Modal3Props) {
    const [dragConstraints, setDragConstraints] = useState({ top: 0, bottom: 0, left: 0, right: 0 })
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setDragConstraints({
                top: -window.innerHeight / 8,
                bottom: window.innerHeight / 4,
                left: -window.innerWidth / 8,
                right: window.innerWidth / 8,
            })
        }
    }, [])

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div 
                className="cursor-move"
                drag
                dragMomentum={false}
                dragConstraints={dragConstraints}
                dragElastic={0.2}
            >
                {designData && designData.id.startsWith('design-') && (
                    <div className="w-60 h-30 flex flex-col items-center justify-start rounded-lg bg-white">
                        <div className="flex flex-col items-start w-full p-4 rounded-lg shadow-md" style={{ backgroundColor: designData.colorDetail3.hex }}>
                            <span className="text-xs uppercase tracking-widest self-end" style={{ color: getContrastingTextColor(designData.colorDetail3.hex) }}>Tertiary</span>

                            <div className="w-full mt-2">
                                <table className="w-full text-left text-sm" style={{ color: getContrastingTextColor(designData.colorDetail3.hex) }}>
                                    <thead>
                                        <tr className="border-b border-gray-400">
                                            <th className="py-2">HEX</th>
                                            <th className="py-2">RGB</th>
                                            <th className="py-2">CMYK</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="py-2">{designData.colorDetail3.hex}</td>
                                            <td className="py-2">{designData.colorDetail3.rgb}</td>
                                            <td className="py-2">{designData.colorDetail3.cmyk}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
                {projectData && (
                    <>
                        <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
                            <div className="space-y-2">
                                {projectData.awards.map((award, index) => (
                                    <div key={index} className="flex items-start space-x-2">
                                        <div className="flex-shrink-0 mt-0.5">
                                            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </div>
                                        <p className="!text-xs text-gray-700" style={{ fontSize: '0.625rem !important' }}>{award}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}   
                {experienceData && experienceData.skills.length > 0 && (
                    <div className="bg-white rounded-lg shadow-lg p-4 w-[280px]">
                        <div className="space-y-3">
                            <div>
                                <p className="text-xs font-medium text-gray-500 mb-1">Skills</p>
                                <div className="flex flex-wrap gap-1">
                                    {experienceData.skills.map((skill, index) => (
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
                )}
                {!designData && !projectData && !experienceData && (
                    <motion.div 
                        className="text-center text-gray-500 w-64 h-48 bg-[#BCD1E1] rounded-lg"
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
                    </motion.div>
                )}
            </motion.div>
        </AnimatePresence>
    );
}