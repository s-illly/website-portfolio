'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { getContrastingTextColor } from '@/utils/colorUtils'

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

interface Modal1Props {
    isOpen: boolean;
    onClose: () => void;
    designData: DesignCard | null;
    projectData: ProjectCard | null;
    experienceData: ExperienceCard | null;
}

export default function Modal1({ isOpen, onClose, designData, projectData, experienceData }: Modal1Props) {
    if (!isOpen) return null;

    const textColor = designData ? getContrastingTextColor(designData.colorDetail1.hex) : 'black';

    return (
        <AnimatePresence>
            <motion.div className="absolute left-200 top-40"
            whileHover={{scale: 1.05 }}
            drag
            dragMomentum={false}
            dragConstraints={{
                top: -window.innerHeight / 8,
                bottom: window.innerHeight / 4,
                left: -window.innerWidth / 8,
                right: window.innerWidth / 8,
            }}
            dragElastic={0.2}
            >
                {designData && designData.id.startsWith('design-') && (
                    <div className="w-60 h-30 flex flex-col items-center justify-start bg-white">
                        <div className="flex flex-col items-start w-full rounded-lg shadow-md p-4" style={{ backgroundColor: designData.colorDetail1.hex }}>
                            <span className="text-xs uppercase tracking-widest self-end" style={{ color: textColor }}>Primary</span>
                            
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
                                                src={projectData.video}
                                                className="w-full h-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
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
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
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
                    <div className="p-4 text-center text-gray-500">
                        No item selected.
                    </div>
                )}
            </motion.div>
        </AnimatePresence>
    );
}