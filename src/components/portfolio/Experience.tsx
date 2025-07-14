import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import closeImg from '../../imgs/close.webp';
import openImg from '../../imgs/open.webp';

interface ExperienceCard{
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

interface ExperienceProps {
    onImageSelect: (experienceCard: ExperienceCard) => void;
}

export default function Experience({ onImageSelect }: ExperienceProps) {
    const [isHovered, setIsHovered] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    // Example experience images - replace these with your actual experience images
    const experienceImages: ExperienceCard[] = [
        {
            id: 'experience-kuzu',
            image: '/imgs/kuzu.jpeg',
            title: 'Frontend Engineer & Graphic Designer',
            description: 'KuzuDB',
            category: 'work',
            skills: ['Tailwind', 'Python', 'Typescript', 'JS', 'HTML', 'Vue', 'Figma', 'Docker'],
            duration: 'May - August 2025',
            location: 'Waterloo, Hybrid',
            tasks: ['Shipped full explorer UI improvements for V.10 release', 'Ownership over internal downloads dashboard on remote docker containers'],
            work: ['/imgs/kuzu3.jpeg','/imgs/kuzu2.jpeg',],

        },
        {
            id: 'experience-judge',
            image: '/imgs/basef.jpeg',
            title: 'Special Awards Judge',
            description: 'BASEF',
            category: 'volunteerism',
            skills: [],
            duration: 'March 2025',
            location: '',
            tasks: ['Judging for ISEF Awards'],
            work: [],

        },
        {
            id: 'experience-ignition',
            image: '/imgs/ignition.jpeg',
            title: 'UI/UX Developer',
            description: 'Ignition Hacks',
            category: 'volunteerism',
            skills: ['Figma'],
            duration: 'January - August 2025',
            location: 'Remote',
            tasks: ['Gallary, FAQ, and Meet the Team website sections', 'Iggy designs', 'Stickers!'],
            work: ['/imgs/sticker.jpeg','/imgs/iggy.jpeg'],

        },
        
        {
            id: 'experience-piano',
            image: '/imgs/avalon.jpeg', 
            title: 'Piano Teacher',
            description: 'Avalon Music Academy',
            category: 'work',
            skills: [],            
            duration: 'November 2023 - August 2024',
            location: 'Brantford - In-person',
            tasks: ['Personal student enrollement increase of 80% through outreach', 'Worked on practical and theory lessons in preparation for festival and concerts'],
            work: [],
        },
        {
            id: 'experience-shad',
            image: '/imgs/shad.jpeg',
            title: 'SHAD Fellow & Ambassador',
            description: 'SHAD Canada',
            category: 'volunteerism',
            skills: [],            
            duration: 'June 2023 - June 2024',
            location: 'SHAD AU, North Park Collegiate',
            tasks: ['Classroom presentations, social media outreach, and sharing resources with teachers', 'Lead to 500% increase of SHAD participants from NPC'],
            work: [],

        },
        {
            id: 'experience-biotecture',
            image: '/imgs/bio.jpeg',
            title: 'Illustration Intern',
            description: 'Biotecture Inc.',
            category: 'work',
            skills: [],
            duration: 'September - December 2023',
            location: 'Remote',
            tasks: ['UI/UX decisions with company branding and image', 'Proposed the company sprite for usage of future elearning courses'],
            work: ['/imgs/light.jpeg', '/imgs/biotech.jpeg'],

        }, 
    ]

    const [selectedCategory, setSelectedCategory] = useState('all')

    return (
        <>
            <motion.div 
                className="z-3 cursor-pointer"
                initial={{ y: "100vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100vh", opacity: 0 }}
                transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.15
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsModalOpen(true)}
            >
                <div className="rounded-lg flex flex-col items-center">
                    <div className="relative w-24 h-24">
                        <Image
                            src={isHovered ? closeImg : openImg}
                            alt={isHovered ? "Open folder" : "Closed folder"}
                            width={96}
                            height={96}
                            className="object-contain"
                            loading="lazy"
                        />
                    </div>
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
                            className="bg-gray-50 rounded-2xl w-[80vw] sm:w-[20rem] md:w-[26rem] lg:w-[30rem] xl:w-[34rem] h-100 mx-2 sm:mx-4 relative cursor-move shadow-xl border border-gray-200"
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
                            <header className="w-full rounded-t-2xl h-8 p-3 bg-gray-100 flex flex-row items-center justify-between sticky top-0 z-10 border-b border-gray-200"> 
                                <div className="flex flex-row gap-2">
                                    <button className="h-2 w-2 bg-red-300" onClick={() => setIsModalOpen(false)} />
                                    <div className="h-2 w-2 bg-amber-300" />
                                    <div className="h-2 w-2 bg-green-300" />
                                </div>
                                <span className="text-sm font-medium !text-gray-700">Experience</span>
                                <div className="w-8 sm:w-12 md:w-16 lg:w-[72px]"></div> {/* Placeholder to balance title */} 
                            </header>
                            
                            <div className="flex flex-row h-[calc(100%-32px)]">
                                {/* Sidebar */}
                                <div className="min-w-[5rem] max-w-[5.5rem]  bg-gray-50 border-r border-gray-200 p-1 sm:p-2 flex flex-col gap-0.5 sm:gap-1 overflow-y-auto">
                                 
                                    <div 
                                        className={`flex items-center gap-0.5 sm:gap-1 text-[10px] p-0.5 sm:p-1 rounded cursor-pointer ${selectedCategory === 'all' ? 'bg-blue-100 text-blue-400' : 'text-gray-700 hover:bg-gray-100'}`}
                                        onClick={() => setSelectedCategory('all')}
                                    >
                                        <span>All</span>
                                    </div>
                                    <div 
                                        className={`flex items-center gap-0.5 sm:gap-1 text-[10px] p-0.5 sm:p-1 rounded cursor-pointer ${selectedCategory === 'work' ? 'bg-blue-100 text-blue-400' : 'text-gray-700 hover:bg-gray-100'}`}
                                        onClick={() => setSelectedCategory('work')}
                                    >
                                        <span>Experience</span>
                                    </div>
                                    <div 
                                        className={`flex items-center gap-0.5 sm:gap-1 text-[10px] p-0.5 sm:p-1 rounded cursor-pointer ${selectedCategory === 'volunteerism' ? 'bg-blue-100 text-blue-400' : 'text-gray-700 hover:bg-gray-100'}`}
                                        onClick={() => setSelectedCategory('volunteerism')}
                                    >
                                        <span>Volunteerism</span>
                                    </div>                                 
                                </div>

                                {/* Main Content */}
                                <div className="flex-grow p-2 sm:p-4 md:p-6 overflow-y-auto">
                                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
                                        {experienceImages
                                            .filter(experience => selectedCategory === 'all' || experience.category === selectedCategory)
                                            .map((experience) => (
                                            <motion.div
                                                key={experience.id}
                                                className="relative border border-gray-200 bg-white rounded-lg p-1 sm:p-2 flex flex-col items-center justify-center text-center cursor-pointer shadow-sm"
                                                whileHover={{ scale: 1.02, boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)' }}
                                                onClick={() => {
                                                    onImageSelect(experience);
                                                    setIsModalOpen(false);
                                                }}
                                            >
                                                <Image
                                                    src={experience.image}
                                                    alt={`Experience ${experience.id}`}
                                                    width={80}
                                                    height={80}
                                                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-cover rounded-md mb-1 sm:mb-2"
                                                    loading="lazy"
                                                />
                                                <span className="text-[10px] font-medium text-gray-800">{experience.title}</span>
                                                <p className="text-[9px] sm:text-[11px] md:text-xs lg:text-sm text-gray-500 mt-0.5 sm:mt-1">{experience.description}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
} 