import { motion, AnimatePresence } from 'framer-motion'
import { FaFolder, FaFolderOpen } from 'react-icons/fa'
import { useState } from 'react'

interface ExperienceCard{
    id: string
    image: string
    title: string
    description: string
    category: string


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
            description: 'n',
            category: 'work',

        },
        {
            id: 'experience-ignition',
            image: '/img/ignition.png',
            title: 'UI/UX Developer',
            description: 'n',
            category: 'volunteerism',

        },
        {
            id: 'experience-shad',
            image: '/img/shad.png',
            title: 'SHAD Fellow & Ambassador',
            description: 'n',
            category: 'all',

        },
        {
            id: 'experience-biotecture',
            image: '/img/bio.png',
            title: 'Illustration Intern',
            description: 'n',
            category: 'work',

        },
        {
            id: 'experience-judge',
            image: '/img/basef.png',
            title: 'Special Awards Judge',
            description: 'n',
            category: 'volunteerism',

        },
        {
            id: 'experience-awards',
            image: '/img/exp_award.png', // You'll need to provide an image for awards
            title: 'Awards & Recognition',
            description: 'Received recognition for various achievements.',
            category: 'awards',
        },
    ]

    const [selectedCategory, setSelectedCategory] = useState('all')

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
                                <div className="w-54 bg-gray-50 border-r border-gray-200 p-4 flex flex-col gap-2 overflow-y-auto">
                                 
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
                                    <div 
                                        className={`flex items-center gap-2 text-sm p-1 rounded cursor-pointer ${selectedCategory === 'awards' ? 'bg-blue-100 text-blue-400' : 'text-gray-700 hover:bg-gray-100'}`}
                                        onClick={() => setSelectedCategory('awards')}
                                    >
                                        <span>Awards</span>
                                    </div>
                                    
                                </div>

                                {/* Main Content */}
                                <div className="flex-grow p-6 overflow-y-auto">
                                    <div className="grid grid-cols-3 gap-6">
                                        {experienceImages
                                            .filter(experience => selectedCategory === 'all' || experience.category === selectedCategory)
                                            .map((experience, index) => (
                                            <motion.div
                                                key={experience.id}
                                                className="relative border border-gray-200 bg-white rounded-lg p-2 flex flex-col items-center justify-center text-center cursor-pointer shadow-sm"
                                                whileHover={{ scale: 1.02, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)" }}
                                                onClick={() => {
                                                    onImageSelect(experience);
                                                    setIsModalOpen(false);
                                                }}
                                            >
                                                <img
                                                    src={experience.image}
                                                    alt={`Experience ${experience.id}`}
                                                    className="w-15 h-15 object-cover rounded-md mb-2"
                                                />
                                                <span className="text-sm font-medium text-gray-800">{experience.title}</span>
                                                <p className="text-xs text-gray-500 mt-1">{experience.description}</p>
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