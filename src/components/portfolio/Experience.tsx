import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

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
            image: '/img/kuzu.png',
            title: 'Frontend Engineer & Graphic Designer',
            description: 'KuzuDB',
            category: 'work',
            skills: ['Tailwind', 'Python', 'Typescript', 'JS', 'HTML', 'Vue', 'Figma'],
            duration: 'May - August 2025',
            location: 'Waterloo, Hybrid',
            tasks: ['Front-end implementation of explorer UI redesign', 'Fullstack implementation of main page contact us page'],
            work: ['/img/kuzu1.png','/img/kuzu2.png',],

        },
        {
            id: 'experience-judge',
            image: '/img/basef.png',
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
            image: '/img/ignition.png',
            title: 'UI/UX Developer',
            description: 'Ignition Hacks',
            category: 'volunteerism',
            skills: ['Figma'],
            duration: 'January - August 2025',
            location: 'Remote',
            tasks: ['Gallary, FAQ, and Meet the Team website sections', 'Iggy designs', 'Stickers!'],
            work: ['/img/sticker.png','/img/iggy.png'],

        },
        
        {
            id: 'experience-piano',
            image: '/img/avalon.png', 
            title: 'Piano Teacher',
            description: 'Avalon Music Academy',
            category: 'work',
            skills: [],            
            duration: 'November 2023 - August 2024',
            location: 'Brantford - In-person',
            tasks: ['Managed lessons for 9 students', 'Worked on practical and theory lessons', 'Prepared for festival and concerts'],
            work: [],
        },
        {
            id: 'experience-shad',
            image: '/img/shad.png',
            title: 'SHAD Fellow & Ambassador',
            description: 'SHAD Canada',
            category: 'volunteerism',
            skills: [],            
            duration: 'June 2023 - June 2024',
            location: 'SHAD AU, North Park Collegiate',
            tasks: ['Classroom presentations, social media outreach, and sharing resources with teachers'],
            work: [],

        },
        {
            id: 'experience-biotecture',
            image: '/img/bio.png',
            title: 'Illustration Intern',
            description: 'Biotecture Inc.',
            category: 'work',
            skills: [],
            duration: 'September - December 2023',
            location: 'Remote',
            tasks: ['UI/UX decisions with company branding and image', 'Proposed the company sprite for usage of future elearning courses'],
            work: ['/img/light.png', '/img/biotech.png'],

        }, 
    ]

    const [selectedCategory, setSelectedCategory] = useState('all')

    return (
        <>
            <motion.div 
                className="absolute right-60 top-80 z-3 cursor-pointer"
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
                            src={isHovered ? '/img/close.png' : '/img/open.png'}
                            alt={isHovered ? "Open folder" : "Closed folder"}
                            width={96}
                            height={96}
                            className="object-contain"
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
                            className="bg-gray-50 rounded-2xl w-180 h-100 mx-4 relative cursor-move shadow-xl border border-gray-200"
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
                                <div className="w-[72px]"></div> {/* Placeholder to balance title */} 
                            </header>
                            
                            <div className="flex flex-row h-[calc(100%-32px)]">
                                {/* Sidebar */}
                                <div className="max-w-45 min-w-45 bg-gray-50 border-r border-gray-200 p-4 flex flex-col gap-2 overflow-y-auto">
                                 
                                    <div 
                                        className={`flex items-center gap-2 text-sm p-1 rounded cursor-pointer ${selectedCategory === 'all' ? 'bg-blue-100 text-blue-400' : 'text-gray-700 hover:bg-gray-100'}`}
                                        onClick={() => setSelectedCategory('all')}
                                    >
                                        <span>All</span>
                                    </div>
                                    <div 
                                        className={`flex items-center gap-2 text-sm p-1 rounded cursor-pointer ${selectedCategory === 'professional-projects' ? 'bg-blue-100 text-blue-400' : 'text-gray-700 hover:bg-gray-100'}`}
                                        onClick={() => setSelectedCategory('work')}
                                    >
                                        <span>Experience</span>
                                    </div>
                                    <div 
                                        className={`flex items-center gap-2 text-sm p-1 rounded cursor-pointer ${selectedCategory === 'volunteerism' ? 'bg-blue-100 text-blue-400' : 'text-gray-700 hover:bg-gray-100'}`}
                                        onClick={() => setSelectedCategory('volunteerism')}
                                    >
                                        <span>Volunteerism</span>
                                    </div>                                 
                                </div>

                                {/* Main Content */}
                                <div className="flex-grow p-6 overflow-y-auto">
                                    <div className="grid grid-cols-3 gap-6">
                                        {experienceImages
                                            .filter(experience => selectedCategory === 'all' || experience.category === selectedCategory)
                                            .map((experience) => (
                                            <motion.div
                                                key={experience.id}
                                                className="relative border border-gray-200 bg-white rounded-lg p-2 flex flex-col items-center justify-center text-center cursor-pointer shadow-sm"
                                                whileHover={{ scale: 1.02, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)" }}
                                                onClick={() => {
                                                    onImageSelect(experience);
                                                    setIsModalOpen(false);
                                                }}
                                            >
                                                <Image
                                                    src={experience.image}
                                                    alt={`Experience ${experience.id}`}
                                                    width={120}
                                                    height={120}
                                                    className="w-15 h-15 object-cover rounded-md mb-2"
                                                />
                                                <span className="text-sm font-medium text-gray-800">{experience.title}</span>
                                                <p className="text-2xs text-gray-500 mt-1">{experience.description}</p>
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