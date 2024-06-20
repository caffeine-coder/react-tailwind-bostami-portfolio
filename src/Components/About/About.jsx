import React from 'react'
import { FaCode } from "react-icons/fa6";
import {FaMobileAlt } from "react-icons/fa";
import { FaInfinity } from "react-icons/fa6";

const About = () => {
  return (
    <div className='flex flex-col bg-white m-5 mt-10 rounded-[18px] items-start'>
        <div className='flex flex-row  m-4 mt-10 items-center '>
            <h1 className='font-bold text-3xl font-robotoslab'>About</h1>
            <div className='bg-gradient-to-r to-pink-500 from-rose-500  w-[5rem] h-[0.2rem] rounded-lg ml-6'/>
        </div>
        <div className='flex flex-col  m-4 '>
           <p className='font-poppins text-gray-600 tracking-wide'>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. 
            I enjoy turning complex problems into simple, beautiful and intuitive designs.
            <br/>
            <br/>
            My aim is to bring across your message 
            and identity in the most creative way. I created web design for many famous brand companies.</p>
           
        </div>
        <div className='flex flex-col w-full'>
        <h1 className='font-medium text-2xl font-poppins mt-5 ml-4 mb-6'>What I Do!</h1>
        <div className='flex flex-col bg-rose-50 w-[95%] self-center p-2 rounded-2xl mb-5'>
            <div className='text-red-500 text-4xl m-3 mb-4'>
            <FaCode />
            </div>
            <h1 className='m-2 font-poppins font-medium text-2xl  mb-4'>Web Development</h1>
            <p className='m-2 font-poppins font-medium text-gray-500 tracking-wide mb-4'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.
            </p>
        </div>
        <div className='flex flex-col bg-sky-100 w-[95%] self-center p-2 rounded-2xl mb-5'>
            <div className='text-sky-500 text-4xl m-3  mb-4'>
            <FaMobileAlt />
            </div>
            <h1 className='m-2 font-poppins font-medium text-2xl  mb-4'>App Development</h1>
            <p className='m-2 font-poppins font-medium text-gray-500 tracking-wide mb-4'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.
            </p>
        </div>
        <div className='flex flex-col bg-sky-100 w-[95%] self-center p-2 rounded-2xl mb-5'>
            <div className='text-purple-500 text-4xl m-3  mb-4'>
            <FaInfinity />
            </div>
            <h1 className='m-2 font-poppins font-medium text-2xl  mb-4'>DevOps & Cloud</h1>
            <p className='m-2 font-poppins font-medium text-gray-500 tracking-wide mb-4'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.
            </p>
        </div>
        </div>
    </div>
  )
}

export default About