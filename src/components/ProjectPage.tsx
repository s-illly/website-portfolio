'use client'

import { useEffect, useRef, useMemo, useState } from 'react'
import { motion, AnimatePresence, Transition } from 'framer-motion'

interface fishproject {
    id: string
    image: string
    project: string
}

const fishProject: fishproject[] = [
    {
        id: '1',
        image: 'fishfotos/fish1.png',
        project: 'Talk to the Hand',
    },
    {
        id: '2',
        image: 'fishfotos/fish2.png',
        project: 'Optimeyes',
    },
    {
        id: '3',
        image: 'fishfotos/fish3.png',
        project: 'LinkedIt',
    },
    {
        id: '4',
        image: 'fishfotos/fish4.png',
        project: 'A Cakey Situation',
    },
]

export default function Project() {
    const [isVisible, setIsVisible] = useState(true)
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
    const [hoveredProject, setHoveredProject] = useState<string | null>(null)
    const [selectedProject, setSelectedProject] = useState<fishproject | null>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setCursorPosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    const fishMotionSettings = useMemo(() => {
        return fishProject.map((fish, index) => {
            const startX = -150 - Math.random() * 200
            const endX = window.outerWidth + Math.random() * 200
            const baseY = 80 + index * 100 + Math.random() * 60
            const bobY = [baseY, baseY + 30 + Math.random() * 20, baseY]
            const duration = 15 + Math.random() * 4
            const bobDuration = 1.5 + Math.random()

            return {
                ...fish,
                motion: {
                    initial: {
                        x: startX,
                        y: baseY,
                        opacity: 1,
                        scale: 0.8,
                    },
                    animate: {
                        x: [startX, endX],
                        y: bobY,
                        opacity: 1,
                        scale: 1,
                    },
                    transition: {
                        duration,
                        repeat: Infinity,
                        repeatType: "loop" as const,
                        ease: "linear",
                        y: {
                            duration: bobDuration,
                            repeat: Infinity,
                            repeatType: "reverse" as const,
                            ease: "easeInOut",
                        },
                    },
                },
            }
        })
    }, [])

    return (
        <div className="fixed inset-0 overflow-hidden bg-[#005D57]">
            <AnimatePresence>
                {isVisible && (
                    <div className="relative w-full h-full">
                        {fishMotionSettings.map((fish) => (
                            <motion.img
                                key={fish.id}
                                src={fish.image}
                                className="absolute w-[240px] cursor-pointer"
                                initial={fish.motion.initial}
                                animate={fish.motion.animate}
                                transition={fish.motion.transition}
                                alt={`Swimming fish ${fish.id}`}
                                onMouseEnter={() => setHoveredProject(fish.project)}
                                onMouseLeave={() => setHoveredProject(null)}
                                onClick={() => setSelectedProject(fish)}
                            />
                        ))}
                    </div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 relative"
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                                onClick={() => setSelectedProject(null)}
                            >
                                ✕
                            </button>
                            <div className="flex flex-col items-center">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.project}
                                    className="w-48 h-48 object-contain mb-4"
                                />
                                <h2 className="text-2xl font-bold mb-4">{selectedProject.project}</h2>
                                <p className="text-gray-600 text-center">
                                    Click outside or the X button to close
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                className="fixed w-[50px] h-[50px] border-2 border-white pointer-events-none text-white text-center font-sans flex items-center justify-center"
                style={{
                    left: cursorPosition.x - 25,
                    top: cursorPosition.y - 25,
                }}
                animate={{
                    scale: hoveredProject ? 1.2 : 1,
                    width: hoveredProject ? 'auto' : '50px',
                    minWidth: '50px',
                    padding: hoveredProject ? '0 10px' : '0',
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                }}
            >
                {hoveredProject}
            </motion.div>
        </div>
    )
}