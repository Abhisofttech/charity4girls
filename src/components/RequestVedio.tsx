import React, { useState } from 'react'
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const RequestVedio = () => {
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  return (
    <div className="container mx-auto py-8">
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className=" text-xl lg:text-4xl font-bold bg-gradient-to-r from-[#89ed4b] to-[#5CA62D] text-transparent bg-clip-text animate-pulse">
          REQUESTED VIDEO
        </h2>
      </motion.div>

      <div className="relative w-full rounded-lg border-2 border-[#5CA62D] overflow-hidden">
        {isVideoLoading && (
          <div className="absolute inset-0 bg-black flex items-center justify-center">
            <div className="text-white text-lg">Loading Video...</div>
          </div>
        )}
        <video
          className="w-full h-auto"
          controls
          preload="metadata"
          playsInline
          poster="/images/video-thumbnail.jpg" // Add your thumbnail image here
          onLoadedData={() => setIsVideoLoading(false)}
        >
          <source src="/vedio/requestedVedio.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default RequestVedio
