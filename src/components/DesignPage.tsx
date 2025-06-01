'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface DesignCard {
    id: string
    image: string
    description: string
    color: string
}

const designCards: DesignCard[] = [
    {
        id: '1',
        image: 'img/pantone-cat.png',
        description: 'A minimalist design approach',
        color: '#FF5733'
    },
    {
        id: '2',
        image: 'img/pantone-fish.png',
        description: 'Exploring geometric patterns',
        color: '#33FF57'
    },
    {
        id: '3',
        image: 'img/pantone-flower.png',
        description: 'Abstract composition',
        color: '#3357FF'
    },
    {
        id: '4',
        image: 'img/pantone-kite.png',
        description: 'Abstract composition',
        color: '#3357FF'
    },
    {
        id: '5',
        image: 'img/pantone-window.png',
        description: 'Abstract composition',
        color: '#3357FF'
    },
    // Add more cards as needed
]

export default function Design() {
    const [selectedCard, setSelectedCard] = useState<string | null>(null)

    return (
        <main className="min-h-screen bg-[#353A2A] relative overflow-hidden flex flex-col">
            <div className="relative flex-grow p-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {designCards.map((card) => (
                        <motion.div
                            key={card.id}
                            className="relative cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            onClick={() => setSelectedCard(card.id)}
                        >
                            {/* Pantone-style card */}
                            <div className="bg-white overflow-hidden shadow-lg">
                                
                                {/* Image container */}
                                <div className="relative aspect-[9/10] overflow-hidden">
                                    <img 
                                        src={card.image} 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Info section */}
                                <div className="h-15 p-2px m-2">
                                    <p className="text-base! text-black! font-bold!">PANTONE</p>
                                    <p className="text-sm! text-black! font-light! "> {card.color} </p>
                                    <p className="text-sm! text-black! font-light! ">{card.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal for selected card */}
                <AnimatePresence>
                    {selectedCard && (
                        <motion.div
                            className="absolute inset-0 bg-black/50 backdrop-blur-md z-[100] flex items-center justify-center p-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCard(null)}
                        >
                            <motion.div
                                className="bg-white/90 p-6 max-w-md h-100 w-100"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {(() => {
                                    const card = designCards.find(c => c.id === selectedCard)
                                    if (!card) return null
                                    return (
                                        <>
                                            <div className="p-6 m-10">
                                                <div className="relative mb-4 ">
                                                    <img 
                                                        src={card.image} 
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )
                                })()}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    )
}