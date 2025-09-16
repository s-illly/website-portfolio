import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import closeImg from '../../imgs/close.webp';
import openImg from '../../imgs/open.webp';

interface ProjectCard{
    id: string
    image: string
    purpose: string
    abstract: string
    awards: string[]
    skills: string[],
    video: string
    links: string[]

}

interface ProjectProps {
    onImageSelect: (projectCard: ProjectCard) => void;
}

export default function Project({ onImageSelect }: ProjectProps) {
    const [isHovered, setIsHovered] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const projectImages: ProjectCard[] = [

        {
            id: 'project-mit',
            image: '/imgs/mit.jpeg',
            purpose: 'HackMIT 2025',
            abstract: 'Stud.ly is a study tool that allows students to learn actively with agentic models. Choose from pyschology based learning methods like Feynman Technique, mnemonic devices, and more.',
            awards: [],
            skills:['Next.js', 'TailwindCSS', 'OpenAI', 'Figma'],
            video: 'https://www.youtube.com/watch?v=9UTBieYaG3I',
            links: ['https://github.com/eamongordon/studly', 'https://plume.hackmit.org/project/fvlsg-kbcup-vuuok-ihsxp'],
        },

        {
            id: 'project-terra',
            image: '/imgs/terra.jpg',
            purpose: 'Terrahacks 2025',
            abstract: 'AgeWell helps caregivers remotely monitor and support seniors, especially those with Alzheimers or Dementia, ensuring their safety and well-being at all times',
            awards: [],
            skills:['Python', 'Mediapipe', 'JS'],
            video: 'https://www.youtube.com/watch?v=ogrwIZQ40bQ',
            links: ['https://github.com/MatthewMo520/Terrahacks2025', 'https://devpost.com/software/elderlyassist?ref_content=user-portfolio&ref_feature=in_progress'],
        },

        {
            id: 'project-flow',
            image: '/imgs/sent.jpeg',
            purpose: 'FLOW 2025',
            abstract: 'Sentasaurs is a physical card game designed to help elementary school students build language skills in a fun, collaborative, and entirely screen-free way',
            awards: ['2nd Place Design'],
            skills: ['Figma'],
            video: '',
            links: ['/pdfs/FLOW.pdf'],
        },

        {
            id: 'project-hand',
            image: '/imgs/handtrack.jpeg',
            purpose: 'AI Hand Tracking Game',
            abstract: 'An unconventional way to play video games: using hand gestures. This project tracks your hands to control your player. WIP',
            awards: [],
            skills: ['GDScript', '3D Graphics', 'Python', 'Mediapipe'],
            video: 'https://youtu.be/xcclxN2ob54',
            links: ['https://github.com/s-illly/Hand-Tracking-Game'],
        },

        {
            id: 'project-404',
            image: '/imgs/fillerimg.jpeg',
            purpose: 'Hack404 Project 2025',
            abstract: 'YangNews is a positive news aggregator that filters and displays uplifting news articles from various unbias, credible sources.',
            awards: [],
            skills: ['TailwindCSS', 'Project Management', 'React', 'NewsAPI'],
            video: 'https://youtu.be/MrTxrh4xTpY',
            links: ['https://devpost.com/software/yang-news', 'https://github.com/dundeezhang/hack404'],
        },
        
        {
            id: 'project-link',
            image: '/imgs/linkedit.jpeg',
            purpose: 'Geese Hacks Project 2025',
            abstract: 'LinkedIt is a program that allows users to input two simple search terms, returning profiles from LinkedIn that match. This includes the profile name as well as the contact headline, and most importantly, a quick access to their email.',
            awards: ['Best Beginner Hack'],
            skills: ['TailwindCSS', 'Project Management'],
            video: 'https://www.youtube.com/watch?v=2oPLkAotjng',
            links: ['https://devpost.com/software/linkedit?ref_content=user-portfolio&ref_feature=in_progress', 'https://github.com/kevinli5371/LinkedIt'],
        },
        
        {
            id: 'project-tech',
            image: '/imgs/technova.jpeg',
            purpose: 'Technova Project 2025',
            abstract: 'Based on the 20-20-20 Rule, OptimEyes allows users to set a 20-minute timer. When time is up, the website notifies the user of a break and suggests a simple wellness activity (each popup designed by budding female artists around the world).',
            awards: ['Best Beginner Hack'],
            skills: ['HTML/CSS', 'JavaScript', 'UI/UX Design', 'Web Development'],
            video: 'https://www.youtube.com/watch?v=nlEk53M1n4k',
            links: ['https://devpost.com/software/optimeyes', 'https://github.com/s-illly/Project-Technova'],
        },
        {
            id: 'project-glove',
            image: '/imgs/glove.jpeg',
            purpose: 'Bay Area Science and Engineering & International Science and Engineering Fair Project',
            abstract: 'The purpose of this project is to facilitate communication between the verbally able and the deaf blind. By using a speech recognizer, this project can translate spoken words and emulate tactile sign language on a glove.',
            awards: ['ISEF Trip Award', 'Gold Merit Award', 'McMaster University Faculty of Engineering Entrance Award', 'ArcelorMittal Dofasco Commercial Department Award'],
            skills: ['Python', 'Arduino', 'Hardware Integration'],
            video: 'https://www.youtube.com/watch?v=6Fy4zqPOzWw',
            links: ['https://isef.net/project/teca008-translator-of-verbal-communication-to-tactile-sign', 'https://www.basef.ca/fair/project-view.php?PN=P16&ProjectID=14791'],
        },
        {
            id: 'project-game',
            image: '/imgs/game.jpeg',
            purpose: 'Grade 10 Final Project Coding Assignment: Godot Video Game',
            abstract: 'Betty wants to bake a cake. Help her find the various ingrediants scattered around the house. Using WASD and E to collect, navigate your way around her place in search of collectables.',
            awards: ['Grade 10 Computer Science Award'],
            skills: ['GDScript', 'Game Development', '2D Graphics'],
            video: 'https://www.youtube.com/watch?v=NyKVAYCJFmA',
            links: ['https://github.com/s-illly/A-Cakey-Situation'],
        },
    ]

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
                    delay: 0.13
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
                        />
                    </div>
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
                                    {projectImages.map((project) => (
                                        <motion.div
                                            key={project.id}
                                            className="relative cursor-pointer bg-white shadow-sm rounded-lg overflow-hidden flex flex-col"
                                            whileHover={{ scale: 1.02, x: -10 }}
                                            onClick={() => {
                                                onImageSelect(project);
                                                setIsModalOpen(false);
                                            }}
                                        >
                                            <div className="relative">
                                                <Image
                                                    src={project.image}
                                                    alt={`Project ${project.id}`}
                                                    width={120}
                                                    height={120}
                                                    className="w-full h-32 object-cover"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="p-3">
                                                <span className="text-xs font-light text-gray-800 truncate block"> {project.purpose} </span>
                                            </div>
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