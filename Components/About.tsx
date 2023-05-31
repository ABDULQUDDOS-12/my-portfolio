'use client'
import React from 'react';
import {motion} from "framer-motion";
type Props = {}

const about = (props: Props) => {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2-xl'>About</h3>
        <motion.img 
        initial={{
            x:-200,
            opacity:0,

        }}
        transition={{
            duration:1.2
        }}
        whileInView={{
            opacity:1,
            x:0,
        }}
        viewport={{
            once:true
        }}
        src='https://avatars.githubusercontent.com/u/76174028?s=400&u=2b9507a9936753a26d390d06e7a078cf979acad0&v=4'
        className="relative rounded-full h-50 w-50 mt-10 mx-auto object-cover"/>
           <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:2}}
        className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>Here is a <span className="underline decoration-[#F7AB01]/50">little</span>{" "} background</h4>
        <p className='text-base'>
        Hi, this is Abdul Quddos here, Basically, I'm doing a bachelor's degree in software engineering from Bahria University Karachi Campus. I am an enthusiastic and keen learner and the field of interest is full-stack web development. For this purpose, I learned HTML, CSS, JAVASCRIPT,Bootstrap,Material UI,REACT, and Redux.
Furthermore, I also love to learn programming skills for this I already learned some of the important programming languages like C, C#, Python, Java (OOP), and some important techniques to tackle problems in programming. for this instance, I learned Data structures for minimizing code complexity, and for analyzing the program I learned (DAA) Design and analysis of Algorithms 
course.
 Behind all this, I also have some skills of  managment. I learned the course engineering management. I also did the Business in Forever Living Products company and achieved the level of Senior Supervisor.
        </p>
        </motion.div>
        </div>
        
  )
}

export default about