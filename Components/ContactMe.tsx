'use client'
import React from 'react'
import {PhoneIcon, MapPinIcon,EnvelopeIcon} from "@heroicons/react/24/solid"
import {useForm,SubmitHandler} from "react-hook-form"

type Props = {}
type Inputs = {
  name:string;
  email:string;
  subject: string,
  message: string,
};
const ContactMe = (props: Props) => {
  const { register, handleSubmit} = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:abdulquddoshafiz@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  }
  return (
    <div className='h-screen top-0 flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='uppercase absolute top-10 uppercse tracking-[20px] text-gray-500 text-2xl'>Contact</h3>
        <div className='mt-24 flex flex-col space-y-5'>
            <h4 className='text-2xl font-semibold text-center'>I have just what you need.{" "}
            <span className='decoration-[#F7AB0A]/50 underline'>Let's Talk</span>
            </h4>
           <div className='space-y-5'>
             <div className='flex items-center space-x-5 justify-center'>
                  <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />    
                  <p className='text-2xl'>+923437202992</p>      
             </div>
             <div className='flex items-center space-x-5 justify-center'>
                  <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />    
                  <p className='text-2xl'>abdulquddoshafiz@gmail.com</p>      
             </div>
             <div className='flex items-center space-x-5 justify-center'>
                  <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />    
                  <p className='text-2xl'>PO block 34/13 Majeed S.R.E Karachi</p>      
             </div>
           </div>
           <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
            <div className='flex space-x-2'>
              <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
              <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
            </div>
            <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
            <textarea {...register('message')} placeholder='Message' className='contactInput'/>
            <button type='submit' className='bg-[#F7AB0A] py-3 px-8 text-black font-bold text-lg'>Submit</button>
           </form>
        </div>
        </div>
  )
}

export default ContactMe