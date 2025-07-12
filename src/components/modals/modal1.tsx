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
    purpose: string;
    abstract: string;
    awards: string[];
    skills: string[];
    video: string;
    links: string[];
}

interface ExperienceCard {
    id: string;
    image: string;
    title: string;
    description: string;
    category: string;
    skills: string[];
    duration: string;
    location: string;
    tasks: string[];
    work: string[];
}

interface Modal1Props {
    isOpen: boolean;
    onClose: () => void;
    designData: DesignCard | null;
    projectData: ProjectCard | null;
    experienceData: ExperienceCard | null;
}

export default function Modal1({ isOpen, designData, projectData, experienceData }: Modal1Props) {
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

    // Helper to convert YouTube URL to embed format
    function getYouTubeEmbedUrl(url: string) {
        const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]+)/);
        return match ? `https://www.youtube.com/embed/${match[1]}` : url;
    }

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
                {designData && (
                    <div className="w-60 h-30 flex flex-col items-center justify-start rounded-lg bg-white">
                        <div className="flex flex-col items-start w-full p-4 rounded-lg shadow-md" style={{ backgroundColor: designData.colorDetail1.hex }}>
                            <span className="text-xs uppercase tracking-widest self-end" style={{ color: getContrastingTextColor(designData.colorDetail1.hex) }}>Primary</span>

                            <div className="w-full mt-2">
                                <table className="w-full text-left text-sm" style={{ color: getContrastingTextColor(designData.colorDetail1.hex) }}>
                                    <thead>
                                        <tr className="border-b border-gray-400">
                                            <th className="py-2">HEX</th>
                                            <th className="py-2">RGB</th>
                                            <th className="py-2">CMYK</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="py-2">{designData.colorDetail1.hex}</td>
                                            <td className="py-2">{designData.colorDetail1.rgb}</td>
                                            <td className="py-2">{designData.colorDetail1.cmyk}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
                {projectData && (
                    <>
                        <div className="bg-white rounded-lg shadow-lg p-4 w-[280px]">
                            <div className="space-y-3">
                                {projectData.video && (
                                    <div>
                                        <p className="text-xs font-medium text-gray-500 mb-1">Video</p>
                                        <div className="w-[250px] aspect-video bg-gray-100 rounded-lg overflow-hidden">
                                            <iframe 
                                                src={getYouTubeEmbedUrl(projectData.video)}
                                                className="w-full h-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                )}
                                {projectData.links && projectData.links.length > 0 && (
                                    <div>
                                        <p className="text-xs font-medium text-gray-500 mb-1">Related Links</p>
                                        <div className="space-y-1">
                                            {projectData.links.map((link, index) => (
                                                <a 
                                                    key={index}
                                                    href={link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center space-x-1.5 text-blue-400 hover:text-blue-800 transition-colors"
                                                >
                                                    
                                                    <span className="text-xs">{link}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )}
                
                {experienceData && (
                    <>
                        <div className="bg-white rounded-lg shadow-lg p-4 w-[280px]">
                            <div className="space-y-3">
                                <div>
                                    <p className="text-xs font-medium text-gray-500 mb-0.5">{experienceData.description}</p>
                                    <p className="!text-xs text-gray-700" style={{ fontSize: '0.625rem !important' }}>{experienceData.title}</p>
                                </div>
                                <div>
                                    <p className="!text-xs text-gray-700" style={{ fontSize: '0.625rem !important' }}>{experienceData.duration}</p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {!designData && !projectData && !experienceData && (
                    <motion.div 
                        className="text-center text-gray-500 w-64 h-48 bg-[#F7B7AA] rounded-lg"
                        initial={{ y: "100vh", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "100vh", opacity: 0 }}
                        transition={{ 
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            delay: 0.10
                        }}
                    >
                    </motion.div>
                )}
            </motion.div>
        </AnimatePresence>
    );
}