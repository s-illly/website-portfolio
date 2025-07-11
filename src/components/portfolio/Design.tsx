import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import closeImg from '../../imgs/close.webp';
import openImg from '../../imgs/open.webp';

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
            id: 'design-light',
            image: '/imgs/pantone-light.jpeg',
            name: 'Pantone Light',
            colorDetail1: { hex: '#FB8A16', rgb: '251 138 22', cmyk: '0 45 91 2' },
            colorDetail2: { hex: '#524846', rgb: '82 72 70', cmyk: '0 12 15 68' },
            colorDetail3: { hex: '#F2E1DB', rgb: '242 225 219', cmyk: '0 7 10 5' },
        },

        {
            id: 'design-cat',
            image: '/imgs/pantone-cat.jpeg',
            name: 'Pantone Cat',
            colorDetail1: { hex: '#D3C9B8', rgb: '211 201 184', cmyk: '0 5 13 17' },
            colorDetail2: { hex: '#B0B670', rgb: '176 182 112', cmyk: '3 0 39 29' },
            colorDetail3: { hex: '#4A433D', rgb: '74 67 61', cmyk: '0 9 18 71' },
        },
        {
            id: 'design-fish',
            image: '/imgs/pantone-fish.jpeg',
            name: 'Pantone Fish',
            colorDetail1: { hex: '#AAECFD', rgb: '170 236 253', cmyk: '33 7 0 1' },
            colorDetail2: { hex: '#FCA58D', rgb: '252 165 141', cmyk: '0 35 44 1' },
            colorDetail3: { hex: '#F5FAFE', rgb: '245 250 254', cmyk: '4 2 0 0' },
        },
        {
            id: 'design-flower',
            image: '/imgs/pantone-flower.jpeg',
            name: 'Pantone Flower',
            colorDetail1: { hex: '#C6EAFD', rgb: '198 234 253', cmyk: '22 8 0 1' },
            colorDetail2: { hex: '#F6C3D8', rgb: '246 195 216', cmyk: '0 21 12 4' },
            colorDetail3: { hex: '#CAC9ED', rgb: '202 201 237', cmyk: '15 15 0 7' },
        },
        {
            id: 'design-kite',
            image: '/imgs/pantone-kite.jpeg',
            name: 'Pantone Kite',
            colorDetail1: { hex: '#FDA699', rgb: '253 166 153', cmyk: '0 34 40 1' },
            colorDetail2: { hex: '#C4ECEB', rgb: '196 236 235', cmyk: '17 0 0 8' },
            colorDetail3: { hex: '#85C1D6', rgb: '133 193 214', cmyk: '38 10 0 16' },
        },
        {
            id: 'design-window',
            image: '/imgs/pantone-window.jpeg',
            name: 'Pantone Window',
            colorDetail1: { hex: '#EBAFC1', rgb: '235 175 193', cmyk: '0 26 18 8' },
            colorDetail2: { hex: '#B1CFFF', rgb: '177 207 255', cmyk: '31 19 0 0' },
            colorDetail3: { hex: '#5C92AC', rgb: '92 146 172', cmyk: '47 15 0 33' },
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
                    delay: 0.12
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
                                            <Image
                                                src={image.image}
                                                alt={`Design ${image.id}`}
                                                width={120}
                                                height={120}
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