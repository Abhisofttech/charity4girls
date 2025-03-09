import React from 'react'
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const SupportContent = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                {...fadeIn}
            >
                {/* Header Section */}
                <motion.div 
                    className="bg-red-600 p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
                    animate={{ 
                        backgroundColor: ['#dc2626', '#ea580c', '#dc2626']
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-white animate-pulse" />
                    <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                        Current Status & Support Needed
                    </h2>
                </motion.div>

                {/* Content Section */}
                <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-[#5CA62D] to-[#4a8924]">
                    <motion.p 
                        className="text-white text-sm sm:text-base md:text-xl mb-6 sm:mb-8 text-center font-medium max-w-2xl mx-auto"
                        animate={{ scale: [1, 1.01, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        Our initiative is temporarily on hold due to financial constraints. 
                        We need support for:
                    </motion.p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {[
                            "Three months' advance rent for the learning center",
                            "Teacher salaries and staff compensation",
                            "Electricity bills and operational costs",
                            "Educational materials and computer equipment"
                        ].map((item, index) => (
                            <motion.div 
                                key={index}
                                className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-white/20"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <p className="text-white text-xs sm:text-sm lg:text-base flex items-center gap-2">
                                    <span className="min-w-[8px] w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full" />
                                    <span className="flex-1">{item}</span>
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SupportContent;
