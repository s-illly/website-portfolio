import { motion, AnimatePresence } from 'framer-motion'
import { FaFolder, FaFolderOpen } from 'react-icons/fa'
import { useState } from 'react'

interface DesignCard {
    id: string
    image: string
    color1: string
    color2: string
    color3: string
}

interface DesignProps {
    onImageSelect: (designCard: DesignCard) => void;
}

export default function Design({ onImageSelect }: DesignProps) {
    const [isHovered, setIsHovered] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    // Example design images - replace these with your actual design images
    const designImages: DesignCard[] = [
        {
            id: 'design-cat',
            image: '/img/pantone-cat.png',
            color1: '#FF5733',
            color2: '255 87 51' ,
            color3: '0 66 80 0'

        },
        {
            id: 'design-fish',
            image: '/img/pantone-fish.png',
            color1: '#33FF57',
            color2: '51 255 87' ,
            color3: '80 0 66 0'

        },
        {
            id: 'design-flower',
            image: '/img/pantone-flower.png',
            color1: '#3357FF',
            color2: '51 87 255' ,
            color3: '80 66 0 0'

        },
        {
            id: 'design-kite',
            image: '/img/pantone-kite.png',
            color1: '#FFD700',
            color2: '255 215 0' ,
            color3: '0 16 100 0'

        },
        {
            id: 'design-window',
            image: '/img/pantone-window.png',
            color1: '#8A2BE2',
            color2: '138 43 226',
            color3: '39 80 0 11'

        },    
    ]

    return (
        <>
            <motion.div 
                className="absolute right-60 top-60 z-3 overflow-y-auto cursor-pointer"
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
                    <span className="text-black"> Design </span>
                </div>
            </motion.div>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center p-8 "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            className="bg-blue-50/50 rounded-lg w-100 h-100 mx-4 relative cursor-move overflow-y-auto overflow-scroll border-0 [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar-track]:bg-transparent"
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
                            <header className="w-full rounded-t-md h-8 p-3 bg-white flex flex-row items-center justify-between sticky top-0 z-30"> 
                                <div className="flex flex-row gap-2">
                                    <button className="h-2 w-2 bg-red-300" onClick={() => setIsModalOpen(false)} />
                                    <div className="h-2 w-2 bg-amber-300" />
                                    <div className="h-2 w-2 bg-green-300" />
                                </div>
                                <span className="text-sm font-medium !text-black">Designs</span>
                                <div className="w-[72px]"></div>
                            </header>
                            
                            <div className="p-6">
                                <div className="grid grid-cols-3 pl-8 gap-8">
                                    {designImages.map((image, index) => (
                                        <motion.div
                                            key={index}
                                            className="relative border-white border-3 cursor-pointer bg-white shadow-lg -ml-8 pb-6"
                                            whileHover={{ scale: 1.02, x: -10 }}
                                            onClick={() => {
                                                onImageSelect(image);
                                                setIsModalOpen(false);
                                            }}
                                        >
                                            <img
                                                src={image.image}
                                                alt={`Design ${image.id}`}
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