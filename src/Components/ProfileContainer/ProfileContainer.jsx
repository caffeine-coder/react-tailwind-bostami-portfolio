import React from 'react'
import abhi from '../../assets/images/abhi.jpg'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter,FaInstagram, FaLinkedinIn, FaMobileAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { PiDownloadLight } from "react-icons/pi";



const ProfileContainer = () => {
  return (
    <div className='flex flex-col bg-white m-5 mt-10 rounded-[18px] justify-center items-center'>
        <div className='mt-11 mb-7 w-[14rem] h-[14rem] rounded-lg'>
            <img src={abhi} className='rounded-[18px] object-fill'/>
        </div>
        <div className=' text-2xl'>
           <p className='font-robotoslab'>Abhishek P</p>
        </div>
        <div className='bg-slate-100 rounded-lg mt-3 mb-4 p-1'>
            <p className='font-poppins font-[550] m-2'> Full Stack Developer</p>
        </div>
        <div className='flex flex-row w-[12rem] h-[2rem] mb-5 justify-between '>
            <div className='bg-gray-100 rounded-lg justify-center items-center w-[2.3rem] h-[2.3rem] flex'>
                <FaFacebookF className='text-blue-600'/>
            </div>
            <div className='bg-gray-100 rounded-lg justify-center items-center w-[2.3rem] h-[2.3rem] flex'>
                <FaTwitter className='text-sky-500'/>
            </div>
            <div className='bg-gray-100 rounded-lg justify-center items-center w-[2.3rem] h-[2.3rem] flex'>
                <FaInstagram  className='text-red-500'/>
            </div>
            <div className='bg-gray-100 rounded-lg justify-center items-center w-[2.3rem] h-[2.3rem] flex'>
                <FaLinkedinIn  className='text-blue-950'/>
            </div>
        </div>
        <div className='bg-gray-100 mb-5 flex flex-col ml-8 mr-8 w-[90%] rounded-2xl justify-items-start '>
            <div className='flex flex-row items-center m-2 mb-1'>
                <div className='bg-white m-3 p-3 rounded-lg drop-shadow-xl' >
                <FaMobileAlt className='text-red-500 text-xl'/>
                </div>
                <div className='flex flex-col'>
                <p className='font-thin text-xs text-gray-500 font-poppins'>Phone</p>
                <p className='font-medium font-poppins'>+91 9538982029</p>
                </div>
                
            </div>
            <hr className="h-px self-center w-[90%] bg-gray-300 border-0"></hr>
            <div className='flex flex-row items-center m-3'>
                <div className='bg-white m-3 p-3 rounded-lg drop-shadow-xl' >
                <MdOutlineMail className='text-green-600 text-xl'/>
                </div>
                <div className='flex flex-col'>
                <p className='font-thin text-xs text-gray-500 font-poppins'>Email</p>
                <p className='font-medium font-poppins'>abhishek_haptech@Outlook.com</p>
                </div>
            </div>
            <hr className="h-px self-center w-[90%] bg-gray-300 border-0"></hr>
            <div className='flex flex-row items-center m-3'>
                <div className='bg-white m-3 p-3 rounded-lg drop-shadow-xl' >
                <IoLocationSharp className='text-red-400 text-xl'/>
                </div>
                <div className='flex flex-col'>
                <p className='font-thin text-xs text-gray-500 font-poppins'>Location</p>
                <p className='font-medium font-poppins'>Bangalore, India</p>
                </div>
            </div>
            <hr className="h-px self-center w-[90%] bg-gray-300 border-0"></hr>
            <div className='flex flex-row items-center m-3'>
                <div className='bg-white m-3 p-3 rounded-lg drop-shadow-xl' >
                <LuCalendarDays className='text-purple-500 text-xl'/>
                </div>
                <div className='flex flex-col'>
                <p className='font-thin text-xs text-gray-500 font-poppins'>Birthday</p>
                <p className='font-medium font-poppins'>April 5, 1998</p>
                </div>
            </div>
        </div>
        <div className='bg-gradient-to-r to-pink-500 from-rose-500  w-48 flex flex-row mb-5 justify-center items-center rounded-full p-1'>
            <PiDownloadLight className='m-2 ml-2 text-white text-3xl'/>
            <p className='text-white text-lg font-poppins mr-2'>Download CV</p>
        </div>
    </div>
  )
}

export default ProfileContainer