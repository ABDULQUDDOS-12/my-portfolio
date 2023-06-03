'use client'
import React from 'react'
import { motion } from 'framer-motion'
type Props = {
    directionLeft?: boolean;
}

const Skill = ({directionLeft}: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
     <motion.img
     initial={{
        x:directionLeft ? -200:200,
        opacity:0
     }}
     transition={{
        duration:1
     }}
     whileInView={{
        opacity:1,
        x:0
     }}
     src='data:image/png;base64,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'
     className='rounded-full border border-gray-500 object-cover w-20 h-20 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out md:w-24 md:h-24'>
     </motion.img>
     <div className='absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 rounded-full xl:w-20 xl:h-20 z-0 md:w-24 md:h-24'>
      <div className='flex transition items-center justify-center h-full'>
         <p className='text-2xl font-bold text-black opacity-100'>100%</p>
      </div>
     </div>
    </div>
  )
}

export default Skill