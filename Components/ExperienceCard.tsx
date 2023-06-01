import React from 'react'
import {motion} from "framer-motion"
type Props = {}

function ExperienceCard ({}: Props)  {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
        initial={{
            y:-100,
            opacity:0,
        }}
        transition={{
            duration:1.2
        }}
        whileInView={{
            opacity:1,
            y:0
        }}
        viewport={{
            once:true
        }}
        className='w-32 h-32 mt-30 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center'
         src="https://www.sketchappsources.com/resources/source-image/weather-app-icons.jpg" alt="" />

        <div className='px-0 md:px-10'>
            <h4 className='text-2xl font-bold'>Live Weather data api app</h4>
            <p className='font-light text-1xl mt-1'>Weather</p>
       

        <div className='flex space-x-2 my-2'>
        <img className='h-10 w-10 rounded-full' src="https://camo.githubusercontent.com/eb72bb7485d6ba831e1d01f7e5f6be5985ae1c1eb93708d041aa56586b849e43/68747470733a2f2f6c6f676f73706e672e6f72672f646f776e6c6f61642f6a6176617363726970742f6c6f676f2d6a6176617363726970742d69636f6e2d313032342e706e67" alt="" />
        <img className='h-10 w-10 rounded-full' src="https://camo.githubusercontent.com/eb72bb7485d6ba831e1d01f7e5f6be5985ae1c1eb93708d041aa56586b849e43/68747470733a2f2f6c6f676f73706e672e6f72672f646f776e6c6f61642f6a6176617363726970742f6c6f676f2d6a6176617363726970742d69636f6e2d313032342e706e67" alt="" />
        <img className='h-10 w-10 rounded-full' src="https://camo.githubusercontent.com/eb72bb7485d6ba831e1d01f7e5f6be5985ae1c1eb93708d041aa56586b849e43/68747470733a2f2f6c6f676f73706e672e6f72672f646f776e6c6f61642f6a6176617363726970742f6c6f676f2d6a6176617363726970742d69636f6e2d313032342e706e67" alt="" />
            {/* Tech used */}
            {/* Tech used */}
            {/* Tech used */}
        </div>
        <p className='uppercase py-5 text-gray-300'>Started work... -Ended...</p>
        <ul className='list-disc space-y-1 ml-5  text-lg'>
            <li>Summary points Summary points </li>
            <li>Summary points Summary points </li>
            <li>Summary points Summary points </li>
        </ul>
        </div>
    </article>
  )
}

export default ExperienceCard