import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import hatImg from '../../imgs/hat.webp'
import fish1Img from '../../imgs/fish1.webp'
import fish3Img from '../../imgs/fish3.webp'
import LImg from '../../imgs/L.webp'

export default function Book() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [dragConstraints, setDragConstraints] = useState({ top: 0, bottom: 0, left: 0, right: 0 })

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setDragConstraints({
                top: -window.innerHeight / 2,
                bottom: window.innerHeight / 2,
                left: -window.innerWidth / 2,
                right: window.innerWidth / 2,
            })
        }
    }, [])

    return (
        <>
        
        <div className="relative w-125 pl-5 h-auto">
            <motion.div 
                className="z-3 w-75 h-72 overflow-y-auto cursor-pointer"
                initial={{ y: "100vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100vh", opacity: 0 }}
                transition={{ 
                    type: "spring",
                    stiffness: 100, 
                    damping: 15,
                    delay: 0.13
                }}
                whileHover={{ y: -5, scale: 1.05 }}
                onClick={() => setIsModalOpen(true)}
            >
                <div className="rounded-lg h-full w-full bg-white flex flex-col items-center border border-gray-200 shadow-lg">
                    <header className="w-full rounded-t-lg h-8 p-3 bg-gray-50 flex flex-row items-center justify-between border-b border-gray-200"> 
                        <div className="flex flex-row gap-2">
                            <div className="h-2 w-2 bg-red-300" />
                            <div className="h-2 w-2 bg-amber-300" />
                            <div className="h-2 w-2 bg-green-300" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">Recent Reads</span>
                        <div className="w-[72px]"></div>
                    </header>
                    <main className="w-full flex flex-col gap-2 items-start pt-2 p-4">
                        <div className="flex items-center w-full">
                            <Image src="/imgs/death.jpeg" alt="Cover Art" className="w-12 h-16 rounded-md mr-3 shadow-sm" width={48} height={64} />
                            <div className="flex-grow">
                                <p className="text-sm font-bold text-gray-800">Death&apos;s End</p>
                                <p className="!text-[12px] text-gray-600">Cixin Liu</p>
                                <div className="flex gap-1 mt-1">
                                    <span className="text-blue-400 text-sm">★</span>
                                    <span className="text-blue-400 text-sm">★</span>
                                    <span className="text-blue-400 text-sm">★</span>
                                    <span className="text-blue-400 text-sm">★</span>
                                    <span className="text-gray-400 text-sm">☆</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex items-center w-full">
                            <Image src="/imgs/devils.jpeg" alt="Cover Art" className="w-12 h-16 rounded-md mr-3 shadow-sm" width={48} height={64} />
                            <div className="flex-grow">
                                <p className="text-sm font-bold text-gray-800">All the Devils Are Here</p>
                                <p className="!text-[12px] text-gray-600">Louise Penny</p>
                                <div className="flex gap-1 mt-1">
                                    <span className="text-blue-400 text-sm">★</span>
                                    <span className="text-blue-400 text-sm">★</span>
                                    <span className="text-blue-400 text-sm">★</span>
                                    <span className="text-blue-200 text-sm">☆</span>
                                    <span className="text-gray-400 text-sm">☆</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center w-full">
                            <Image src="/imgs/seven.jpeg" alt="Cover Art" className="w-12 h-16 rounded-md mr-3 shadow-sm" width={48} height={64} />
                            <div className="flex-grow">
                                <p className="text-sm font-bold text-gray-800">Seven and a Half Lessons About the Brain</p>
                                <p className="!text-[12px] text-gray-600">Lisa Feldman Barrett</p>
                                <div className="flex gap-1 mt-1">
                                    <span className="text-blue-400 text-sm">★</span>
                                    <span className="text-blue-400 text-sm">★</span>
                                    <span className="text-blue-400 text-sm">★</span>
                                    <span className="text-blue-200 text-sm">☆</span>
                                    <span className="text-gray-400 text-sm">☆</span>
                                </div>
                            </div>   
                        </div>
                    </main>
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
                            className="bg-white rounded-lg w-100 h-80 mx-4 relative cursor-move overflow-scroll border border-gray-200 shadow-lg [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar-track]:bg-transparent"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            drag
                            dragMomentum={false}
                            dragConstraints={dragConstraints}
                            dragElastic={0.1}
                        >
                            <header className="w-full rounded-t-lg h-8 p-3 bg-gray-50 flex flex-row items-center justify-between sticky top-0 z-10 border-b border-gray-200"> 
                                <div className="flex flex-row gap-2">
                                    <button className="h-2 w-2 bg-red-300" onClick={() => setIsModalOpen(false)} />
                                    <div className="h-2 w-2 bg-amber-300" />
                                    <div className="h-2 w-2 bg-green-300" />
                                </div>
                                <span className="text-sm font-medium text-gray-700">Favourites</span>
                                <div className="w-[72px]"></div>
                            </header>
                            
                            <div className="p-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="flex items-center w-full">
                                        <Image src="/imgs/devils.jpeg" alt="Cover Art" className="w-12 h-16 rounded-md mr-3 shadow-sm" width={48} height={64} />
                                        <div className="flex-grow">
                                            <p className="text-sm font-bold text-gray-800">All the Devils Are Here</p>
                                            <p className="!text-[12px] text-gray-600">Louise Penny</p>
                                            <div className="flex gap-1 mt-1">
                                                <span className="text-blue-400 text-sm">★</span>
                                                <span className="text-blue-400 text-sm">★</span>
                                                <span className="text-blue-400 text-sm">★</span>
                                                <span className="text-blue-200 text-sm">☆</span>
                                                <span className="text-gray-400 text-sm">☆</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center w-full">
                                        <Image src="/imgs/darkforest.jpeg" alt="Cover Art" className="w-12 h-16 rounded-md mr-3 shadow-sm" width={48} height={64} />
                                        <div className="flex-grow">
                                            <p className="text-sm font-bold text-gray-800">The Dark Forest</p>
                                            <p className="!text-[12px] text-gray-600">Cixin Liu</p>
                                            <div className="flex gap-1 mt-1">
                                                <span className="text-blue-400 text-sm">★</span>
                                                <span className="text-blue-400 text-sm">★</span>
                                                <span className="text-blue-400 text-sm">★</span>
                                                <span className="text-blue-400 text-sm">★</span>
                                                <span className="text-blue-200 text-sm">☆</span>
                                            </div>
                                        </div>   
                                    </div>

                                    <div className="flex items-center w-full">
                                        <Image src="/imgs/call.jpeg" alt="Cover Art" className="w-12 h-16 rounded-md mr-3 shadow-sm" width={48} height={64} />
                                        <div className="flex-grow">
                                            <p className="text-sm font-bold text-gray-800">Call of the Wild</p>
                                            <p className="!text-[12px] text-gray-600">Jack London</p>
                                            <div className="flex gap-1 mt-1">
                                                <span className="text-blue-400 text-sm">★</span>
                                                <span className="text-blue-400 text-sm">★</span>
                                                <span className="text-blue-400 text-sm">★</span>
                                                <span className="text-blue-200 text-sm">☆</span>
                                                <span className="text-gray-400 text-sm">☆</span>
                                            </div>
                                        </div>   
                                    </div>

                                    <div className="flex items-center w-full">
                                        <Image src="/imgs/murder.jpeg" alt="Cover Art" className="w-12 h-16 rounded-md mr-3 shadow-sm" width={48} height={64} />
                                        <div className="flex-grow">
                                            <p className="text-sm font-bold text-gray-800">Murder on the Orient Express</p>
                                            <p className="!text-[12px] text-gray-600">Agatha Christie</p>
                                            <div className="flex gap-1 mt-1">
                                                <span className="text-blue-400 text-sm">★</span>
                                                <span className="text-blue-400 text-sm">★</span>
                                                <span className="text-blue-400 text-sm">★</span>
                                                <span className="text-blue-400 text-sm">★</span>
                                                <span className="text-blue-400 text-sm">★</span>
                                            </div>
                                        </div>   
                                    </div>

                                    <div className="flex items-center w-full">
                                        <Image src="/imgs/silent.jpeg" alt="Cover Art" className="w-12 h-16 rounded-md mr-3 shadow-sm" width={48} height={64} />
                                        <div className="flex-grow">
                                            <p className="text-sm font-bold text-gray-800">The Silent Patient</p>
                                            <p className="!text-[12px] text-gray-600">Alex Michaelides</p>
                                            <div className="flex gap-1 mt-1">
                                                <span className="text-blue-400 text-sm">★</span>
                                                <span className="text-blue-400 text-sm">★</span>
                                                <span className="text-blue-400 text-sm">★</span>
                                                <span className="text-gray-400 text-sm">☆</span>
                                                <span className="text-gray-400 text-sm">☆</span>
                                            </div>
                                        </div>   
                                    </div>
                                    <div className="flex items-center w-full">
                                        <Image src="/imgs/eyre.jpeg" alt="Cover Art" className="w-12 h-16 rounded-md mr-3 shadow-sm" width={48} height={64} />
                                        <div className="flex-grow">
                                            <p className="text-sm font-bold text-gray-800">Jane Eyre</p>
                                            <p className="!text-[12px] text-gray-600">C.S. Lewis</p>
                                            <div className="flex gap-1 mt-1">
                                                <span className="text-blue-400 text-sm">★</span>
                                                <span className="text-blue-400 text-sm">★</span>
                                                <span className="text-blue-400 text-sm">★</span>
                                                <span className="text-gray-400 text-sm">☆</span>
                                                <span className="text-gray-400 text-sm">☆</span>
                                            </div>
                                        </div>   
                                    </div>

                                    <div className="flex items-center w-full">
                                        <Image src="/imgs/narnia.jpeg" alt="Cover Art" className="w-12 h-16 rounded-md mr-3 shadow-sm" width={48} height={64} />
                                        <div className="flex-grow">
                                            <p className="text-sm font-bold text-gray-800">The Chronicles of Narnia</p>
                                            <p className="!text-[12px] text-gray-600">C.S. Lewis</p>
                                            <div className="flex gap-1 mt-1">
                                                <span className="text-blue-400 text-sm">★</span>
                                                <span className="text-blue-400 text-sm">★</span>
                                                <span className="text-blue-400 text-sm">★</span>
                                                <span className="text-blue-400 text-sm">★</span>
                                                <span className="text-blue-200 text-sm">☆</span>
                                            </div>
                                        </div>   
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div 
                className="-bottom-15 left-50 absolute  z-10"
                initial={{ y: "100vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100vh", opacity: 0 }}
                transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.13
                }}
            >
                <div className="w-40 h-auto">
                    <Image className="w-full h-full object-contain" src={hatImg} alt="Me" width={160} height={160} />
                </div>
            </motion.div>

            <motion.div 
                className="absolute -bottom-20 translate-x-1/2   z-3"
                initial={{ y: "100vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100vh", opacity: 0 }}
                transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.15
                }}
            >
                <div className="w-15 h-auto">
                    <Image className="w-full h-full object-contain" src={LImg} alt="Me" width={60} height={60} />
                </div>
            </motion.div>
            
            <motion.div 
                className="absolute -top-5 -left-15 z-3"
                initial={{ y: "100vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100vh", opacity: 0 }}
                transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.16
                }}
            >
                <div className="w-20 h-auto">
                    <Image className="w-full h-full object-contain" src={fish1Img} alt="Me" width={80} height={80} />
                </div>
            </motion.div>

            <motion.div 
                className="absolute bottom-10 -left-15 z-3"
                initial={{ y: "100vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100vh", opacity: 0 }}
                transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.15
                }}
            >
                <div className="w-20 h-auto">
                    <Image className="w-full h-full object-contain" src={fish3Img} alt="Me" width={80} height={80} />
                </div>
            </motion.div>


            </div>
        </>
    )
} 