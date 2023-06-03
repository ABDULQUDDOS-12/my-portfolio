'use client'
import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

const Projects = (props: Props) => {
    const projects = [1,2,3]
    return (
    <motion.div 
    initial={{
        opacity:0
    }}
    whileInView={{
opacity:1,
    }}
    transition={{
duration:1.5
    }}
    
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
         <h3 className='absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
                {projects.map((project,i)=>(
                  <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'><img src="https://seeklogo.com/images/A/amazon-logo-3F973DA9CA-seeklogo.com.png" alt="" />
                   <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center'>
                    <span className='underline decoration-[#F7AB01]/50'>Case study {i+1} of {projects.length}: Amazon clone</span> 
                    </h4>
                    <p className='text-lg text-center md:text-left'>Amazon-clone app that has a log In and Log Out authentication registration form. It has a beautifull-UI
                       there are different products in the home page then add to cart functionality and payment method verified with stripe. I uses HTML, CSS , JS , ContextAPI ,
                        Materiul-UI , react-hooks, stripe for making this website awesome
                         and there database is on firebase and deployment also on the firebase.</p>
                    </div>
                  </div>
                ))}
                  {/* Projects */}
                  {/* Projects */}
                  {/* Projects */}
                  {/* Projects */}
            </div>
        <div className='w-full absolute top-[30%] bg-[#F7AB01]/10 left-0 h-[500px] -skew-y-12'>

        </div>
        </motion.div>
  )
}

export default Projects