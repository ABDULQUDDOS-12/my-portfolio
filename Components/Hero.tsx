'use client'
import React from 'react'
import Link from 'next/link'
import {Cursor,useTypewriter} from "react-simple-typewriter"
import BackgroundCircles from './BackgroundCircles'
type Props = {}

const Hero = (props: Props) => {
     const [text,count] = useTypewriter({
        words:["Hi, I am Abdul Quddos","full-stack developer","Guy-who-loves-Basketball","<But code is my life/>",],
        loop:true,
        delaySpeed:2000,

     })
    return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
         <BackgroundCircles/>
         <img
         className='relative rounded-full h-32 w-32 mx-auto object-cover'
         src="https://avatars.githubusercontent.com/u/76174028?s=400&u=2b9507a9936753a26d390d06e7a078cf979acad0&v=4" alt="" />
        
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
        </div>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#F7AB0A'/>
        </h1>
        <div className="pt-5">
            <Link href="/About">
            <button className='heroButton'>About</button>
            </Link>
             {/* <Link href="#experience">
             <button className='heroButton' id='experience'>Experience</button>
             </Link> */}
                <Link href="#skills">
                <button className='heroButton'>Skills</button>
                </Link>
                <Link href="projects">
                <button className='heroButton'>Projects</button>
                </Link>
        </div>
    </div>
  )
}

export default Hero