'use client'
import React from 'react'
import { motion } from 'framer-motion'
type Props = {}
import ExperienceCard from './ExperienceCard'
function WorkExperience({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl ">Experience</h3>
     <div className='w-full flex space-x-4 overflow-x-scroll p-40 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A] '>
       
        <ExperienceCard/>
        <ExperienceCard/>
        <ExperienceCard/>
     </div>
    </motion.div>
  )
}

export default WorkExperience