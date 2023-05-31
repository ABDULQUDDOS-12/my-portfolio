import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
    initial={{
        opacity:0,
    }}
    animate={{
       scale:[1,2,2,3,1],
        opacity: [0.1,0.2,0.2,0.3,0.1],
        borderRadius:["20%","20%","50%","80%","20%",]
    }}
    transition={{
        duration:2.5
    }}
    className='relative flex justify-center items-center'>
        <div className='rounded-full border  border-[#28f51e] h-[200px] w-[200px] absolute mt-52 animate-ping'/>
        <div className='rounded-full border  border-[#28f51e] h-[200px] w-[200px] absolute mt-52 animate-ping'/>
        <div className='rounded-full border  border-[#28f51e] h-[200px] w-[200px] absolute mt-52 animate-ping'/>
        <div className='rounded-full border  border-[#28f51e] h-[200px] w-[200px] absolute mt-52 animate-ping'/>
        <div className='rounded-full border  border-[#28f51e] h-[200px] w-[200px] absolute mt-52 animate-ping'/>
        <div className='rounded-full border  border-[#28f51e] h-[200px] w-[200px] absolute mt-52 animate-ping'/>
        <div className='rounded-full border border-[#ed1919] h-[200px] w-[200px] absolute mt-52 animate-ping'/>
        <div className='rounded-full border border-[#ed1919] h-[200px] w-[200px] absolute mt-52 animate-ping'/>
        <div className='rounded-full border border-[#ed1919] h-[200px] w-[200px] absolute mt-52 animate-ping'/>
        <div className='rounded-full border border-[#ed1919] h-[200px] w-[200px] absolute mt-52 animate-ping'/>
        <div className='rounded-full border border-[#ed1919] h-[200px] w-[200px] absolute mt-52 animate-ping'/>
        <div className='rounded-full border border-[#fcfbfd] h-[200px] w-[200px] absolute mt-52 animate-ping'/>
        <div className='rounded-full border border-[#e81095] h-[200px] w-[200px] absolute mt-52 animate-ping'/>
        <div className='rounded-full border border-[#e81095] h-[200px] w-[200px] absolute mt-52 animate-ping'/>
        <div className='rounded-full border border-[#e81095] h-[200px] w-[200px] absolute mt-52 animate-ping'/>
        <div className='rounded-full border border-[#e81095] h-[200px] w-[200px] absolute mt-52 animate-ping'/>
    </motion.div>
  )
}

export default BackgroundCircles