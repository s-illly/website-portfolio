import { motion, AnimatePresence } from 'framer-motion'
import { FaFolder, FaFolderOpen } from 'react-icons/fa'
import { useState } from 'react'

interface ProjectCard{
    id: string
    image: string
    //purpose: string
    //abstract: string
    //awards: string
    //duration: string
    //video: string
    //links: string

}

interface ProjectProps {
    onImageSelect: (projectCard: ProjectCard) => void;
}

export default function Project({ onImageSelect }: ProjectProps) {
    const [isHovered, setIsHovered] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    // Example project images - replace these with your actual project images
    const projectImages: ProjectCard[] = [
        {
            id: 'project-glove',
            image: '/img/glove.png',

        },
        {
            id: 'project-link',
            image: '/img/linkedit.png',

        },
        {
            id: 'project-game',
            image: '/img/game.png',

        },
        {
            id: 'project-tech',
            image: '/img/technova.png',

        },
    ]

    return (
        <>
            <motion.div 
                className="absolute right-60 top-20 z-3 overflow-y-auto cursor-pointer"
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
                    <span className="text-black"> Projects </span>
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
                            className="bg-white rounded-lg w-100 h-100 mx-4 relative cursor-move overflow-y-auto overflow-scroll border border-gray-200 shadow-lg [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar-track]:bg-transparent"
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
                            <header className="w-full rounded-t-lg h-8 p-3 bg-gray-50 flex flex-row items-center justify-between sticky top-0 z-30 border-b border-gray-200"> 
                                <div className="flex flex-row gap-2">
                                    <button className="h-2 w-2 bg-red-300" onClick={() => setIsModalOpen(false)} />
                                    <div className="h-2 w-2 bg-amber-300" />
                                    <div className="h-2 w-2 bg-green-300" />
                                </div>
                                <span className="text-sm font-medium text-gray-700">Projects</span>
                                <div className="w-[72px]"></div>
                            </header>
                            
                            <div className="p-6 bg-white">
                                <div className="grid grid-cols-3 gap-8">
                                    {projectImages.map((project, index) => (
                                        <motion.div
                                            key={project.id}
                                            className="relative cursor-pointer bg-white shadow-sm rounded-lg overflow-hidden"
                                            whileHover={{ scale: 1.02, x: -10 }}
                                            onClick={() => {
                                                onImageSelect(project);
                                                setIsModalOpen(false);
                                            }}
                                        >
                                            <img
                                                src={project.image}
                                                alt={`Project ${project.id}`}
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