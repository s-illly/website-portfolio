import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Pantone() {
    const [copiedColor, setCopiedColor] = useState<string | null>(null)

    const handleCopyColor = async (color: string) => {
        try {
            await navigator.clipboard.writeText(color);
            setCopiedColor(color);
            setTimeout(() => setCopiedColor(null), 2000);
        } catch (err) {
            console.error('Failed to copy color: ', err);
        }
    };

    return (
        <motion.div 
            className="w-40 h-20 absolute right-100 bottom-40 z-3"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.10
            }}
            whileHover={{ y: -5, scale: 1.05 }}
        >
            <div className="rounded-lg flex flex-col justify-center items-center bg-gray-100">
                <header className="w-full rounded-t-md h-8 p-3 bg-white flex flex-row items-center justify-between"> 
                    <div className="flex flex-row gap-2">
                        <div className="h-2 w-2 bg-red-300" />
                        <div className="h-2 w-2 bg-amber-300" />
                        <div className="h-2 w-2 bg-green-300 " />
                    </div>
                    <span className="text-sm font-medium p-4 !text-black">Pantone</span>
                    <div className="w-[72px]"></div>
                </header>
                
                <div className="flex flex-row gap-3 p-5 pl-2 pr-2">
                    <div className="relative flex flex-col items-center cursor-pointer border border-black rounded-md" onClick={() => handleCopyColor('#F7B7AA')}>
                        <div className="w-8 h-8 rounded-md bg-[#F7B7AA]"></div>
                        {copiedColor === '#F7B7AA' && (
                            <div className="absolute -top-8 bg-[#F7B7AA] text-black text-xs px-2 py-1 rounded whitespace-nowrap">
                                Copied: #F7B7AA
                            </div>
                        )}
                    </div>
                    <div className="relative flex flex-col items-center cursor-pointer border border-black rounded-md" onClick={() => handleCopyColor('#FFFFFF')}>
                        <div className="w-8 h-8 rounded-md bg-[#FFFFFF]"></div>
                        {copiedColor === '#FFFFFF' && (
                            <div className="absolute -top-8 bg-[#FFFFFF] text-black text-xs px-2 py-1 rounded whitespace-nowrap">
                                Copied: #FFFFFF
                            </div>
                        )}
                    </div>
                    <div className="relative flex flex-col items-center cursor-pointer border border-black rounded-md" onClick={() => handleCopyColor('#BCD1E1')}>
                        <div className="w-8 h-8 rounded-md bg-[#BCD1E1]"></div>
                        {copiedColor === '#BCD1E1' && (
                            <div className="absolute -top-8 bg-[#BCD1E1] text-black text-xs px-2 py-1 rounded whitespace-nowrap">
                                Copied: #BCD1E1
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    )
} 