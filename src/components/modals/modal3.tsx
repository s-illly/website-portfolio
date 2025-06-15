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

    const textColor = designData ? getContrastingTextColor(designData.colorDetail1.hex) : 'black';

    return (
        <AnimatePresence>
            <motion.div className="absolute  left-180 top-110"
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
                    <div className="w-60 h-30 flex flex-col items-center justify-start rounded-lg bg-white">
                        <div className="flex flex-col items-start w-full p-4 rounded-lg shadow-lg" style={{ backgroundColor: designData.colorDetail3.hex }}>
                            <span className="text-xs uppercase tracking-widest self-end" style={{ color: textColor }}>Tertiary</span>
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