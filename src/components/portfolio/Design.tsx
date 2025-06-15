import { motion, AnimatePresence } from 'framer-motion'
import { FaFolder, FaFolderOpen } from 'react-icons/fa'
import { useState } from 'react'

interface ColorDetail {
    hex: string;
    rgb: string;
    cmyk: string;
}

interface DesignCard {
    id: string
    image: string
    name: string
    colorDetail1: ColorDetail
    colorDetail2: ColorDetail
    colorDetail3: ColorDetail
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
            name: 'Pantone Cat',
            colorDetail1: { hex: '#FF5733', rgb: '255 87 51', cmyk: '0 66 80 0' },
            colorDetail2: { hex: '#C70039', rgb: '199 0 57', cmyk: '0 100 71 22' },
            colorDetail3: { hex: '#900C3F', rgb: '144 12 63', cmyk: '0 92 56 43' },
        },
        {
            id: 'design-fish',
            image: '/img/pantone-fish.png',
            name: 'Pantone Fish',
            colorDetail1: { hex: '#33FF57', rgb: '51 255 87', cmyk: '80 0 66 0' },
            colorDetail2: { hex: '#1ABC9C', rgb: '26 188 156', cmyk: '86 0 17 26' },
            colorDetail3: { hex: '#16A085', rgb: '22 160 133', cmyk: '86 0 17 37' },
        },
        {
            id: 'design-flower',
            image: '/img/pantone-flower.png',
            name: 'Pantone Flower',
            colorDetail1: { hex: '#3357FF', rgb: '51 87 255', cmyk: '80 66 0 0' },
            colorDetail2: { hex: '#3498DB', rgb: '52 152 219', cmyk: '76 31 0 14' },
            colorDetail3: { hex: '#2980B9', rgb: '41 128 185', cmyk: '78 31 0 27' },
        },
        {
            id: 'design-kite',
            image: '/img/pantone-kite.png',
            name: 'Pantone Kite',
            colorDetail1: { hex: '#FFD700', rgb: '255 215 0', cmyk: '0 16 100 0' },
            colorDetail2: { hex: '#F1C40F', rgb: '241 196 15', cmyk: '0 19 94 5' },
            colorDetail3: { hex: '#F39C12', rgb: '243 156 18', cmyk: '0 36 93 5' },
        },
        {
            id: 'design-window',
            image: '/img/pantone-window.png',
            name: 'Pantone Window',
            colorDetail1: { hex: '#8A2BE2', rgb: '138 43 226', cmyk: '39 80 0 11' },
            colorDetail2: { hex: '#9B59B6', rgb: '155 89 182', cmyk: '15 51 0 29' },
            colorDetail3: { hex: '#8E44AD', rgb: '142 68 173', cmyk: '18 60 0 32' },
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
                                <span className="text-sm font-medium text-gray-700">Designs</span>
                                <div className="w-[72px]"></div>
                            </header>
                            
                            <div className="p-6 bg-white">
                                <div className="grid grid-cols-3 gap-8">
                                    {designImages.map((image, index) => (
                                        <motion.div
                                            key={index}
                                            className="relative cursor-pointer bg-white shadow-sm rounded-lg overflow-hidden"
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