import { motion, AnimatePresence } from 'framer-motion'
import { FaFolder, FaFolderOpen } from 'react-icons/fa'
import { useState } from 'react'

interface ExperienceCard{
    id: string
    image: string
    title: string
    description: string


}

interface ExperienceProps {
    onImageSelect: (experienceCard: ExperienceCard) => void;
}

export default function Experience({ onImageSelect }: ExperienceProps) {
    const [isHovered, setIsHovered] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    // Example experience images - replace these with your actual experience images
    const experienceImages: ExperienceCard[] = [
        {
            id: 'experience-volunteer',
            image: '/img/exp1.png',
            title: 'Volunteer Work',
            description: 'Contributed to community service projects.',

        },
        {
            id: 'experience-internship',
            image: '/img/exp2.png',
            title: 'Software Development Internship',
            description: 'Gained practical experience in software engineering.',

        },
        {
            id: 'experience-research',
            image: '/img/exp3.png',
            title: 'Academic Research',
            description: 'Participated in a research project at university.',

        },
        {
            id: 'experience-freelance',
            image: '/img/exp4.png',
            title: 'Freelance Web Design',
            description: 'Designed and developed websites for clients.',

        },
        {
            id: 'experience-leadership',
            image: '/img/exp5.png',
            title: 'Student Leadership',
            description: 'Led a student organization and managed events.',

        },
    ]

    return (
        <>
            <motion.div 
                className="absolute right-60 top-100 z-3 overflow-y-auto cursor-pointer"
                initial={{ y: "100vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100vh", opacity: 0 }}
                transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.11
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsModalOpen(true)}
            >
                <div className="rounded-lg flex flex-col items-center">
                    {isHovered ? (
                        <FaFolderOpen className="text-8xl text-blue-400" />
                    ) : (
                        <FaFolder className="text-8xl text-blue-400"/>
                    )}
                    <span className="text-black"> Experience </span>
                </div>
            </motion.div>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center p-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            className="bg-blue-50/50 rounded-lg max-w-xl w-full mx-4 relative cursor-move"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            drag
                            dragMomentum={false}
                            dragConstraints={{
                                top: -window.innerHeight / 2,
                                bottom: window.innerHeight / 2,
                                left: -window.innerWidth / 2,
                                right: window.innerWidth / 2,
                            }}
                            dragElastic={0.1}
                        >
                            <header className="w-full rounded-t-md h-8 p-3 bg-white flex flex-row items-center justify-between"> 
                                <div className="flex flex-row gap-2">
                                    <button className="h-2 w-2 bg-red-300" onClick={() => setIsModalOpen(false)} />
                                    <div className="h-2 w-2 bg-amber-300" />
                                    <div className="h-2 w-2 bg-green-300" />
                                </div>
                                <span className="text-sm font-medium !text-black">Experience</span>
                                <div className="w-[72px]"></div>
                            </header>
                            
                            <div className="p-6">
                                <div className="grid grid-cols-3 gap-6">
                                    {experienceImages.map((experience, index) => (
                                        <motion.div
                                            key={experience.id}
                                            className="relative border-white border-3 cursor-pointer overflow-hidden"
                                            whileHover={{ scale: 1.02 }}
                                            onClick={() => {
                                                onImageSelect(experience);
                                                setIsModalOpen(false);
                                            }}
                                        >
                                            <img
                                                src={experience.image}
                                                alt={`Experience ${experience.id}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
} 