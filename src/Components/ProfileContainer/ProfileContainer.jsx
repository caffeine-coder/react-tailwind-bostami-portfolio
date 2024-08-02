/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { FaInstagram, FaLinkedinIn, FaMobileAlt } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';
import { LuCalendarDays } from 'react-icons/lu';
import { PiDownloadLight } from 'react-icons/pi';
import abhi from '../../assets/images/abhi.jpg';
import SocialCard from '../SocialCard/SocialCard';
import PersonalDetailCard from '../PersonalDetailCard/PersonalDetailCard';

function ProfileContainer() {
  return (
    <div className="flex flex-col bg-white m-5 mt-10 rounded-[18px] justify-center items-center p-5 lg:justify-start">
      <div className="mt-11 mb-7 w-[14rem] h-[14rem] rounded-lg md:w-[16rem] md:h-[16rem] lg:w-[10rem] lg:h-[10rem]">
        <img src={abhi} className="rounded-[18px] object-fill" alt="Profie" />
      </div>
      <div className=" text-2xl md:text-3xl lg:text-xl">
        <p className="font-robotoslab">Abhishek P</p>
      </div>
      <div className="bg-slate-100 rounded-lg mt-3 mb-4 p-1">
        <p className="font-poppins font-[550] m-2 md:text-lg lg:text-sm">
          {' '}
          Full Stack Developer
        </p>
      </div>
      <div className="flex flex-row w-[12rem] h-[2rem] mb-5 justify-around ">
        <div
          onClick={() => {
            window.open('https://www.instagram.com/caffeine_coder/', '_blank');
          }}
        >
          <SocialCard
            icon={
              <FaInstagram className="text-red-500 md:text-xl lg:text-sm" />
            }
            className="bg-gray-100 rounded-lg justify-center items-center w-[2.3rem] h-[2.3rem] flex md:w-[2.6rem] md:h-[2.6rem] lg:w-[2.2rem] lg:h-[2.2rem]"
          />
        </div>
        <div
          onClick={() => {
            window.open(
              'https://www.linkedin.com/in/abhishekhaptech/',
              '_blank',
            );
          }}
        >
          <SocialCard
            icon={
              <FaLinkedinIn className="text-blue-950 md:text-xl lg:text-sm" />
            }
            className="bg-gray-100 rounded-lg justify-center items-center w-[2.3rem] h-[2.3rem] flex md:w-[2.6rem] md:h-[2.6rem] lg:w-[2.2rem] lg:h-[2.2rem]"
          />
        </div>
      </div>
      <div className="bg-gray-100 mb-5 flex flex-col ml-8 mr-8 w-full rounded-2xl justify-items-start lg:m-0">
        <div className="flex flex-row items-center m-2 mb-1 ">
          <SocialCard
            icon={<FaMobileAlt className="text-red-500 text-2xl lg:text-xl" />}
            className="bg-white m-3 p-3 rounded-lg drop-shadow-xl  "
          />
          <PersonalDetailCard title="Phone" detail="+91 9538982029" />
        </div>
        <hr className="h-px self-center w-[90%] bg-gray-300 border-0" />
        <div className="flex flex-row items-center m-3">
          <SocialCard
            icon={
              <MdOutlineMail className="text-green-600 text-2xl lg:text-xl" />
            }
            className="bg-white m-3 p-3 rounded-lg drop-shadow-xl"
          />
          <PersonalDetailCard
            title="Email"
            detail="abhishek_haptech@Outlook.com"
          />
        </div>
        <hr className="h-px self-center w-[90%] bg-gray-300 border-0" />
        <div className="flex flex-row items-center m-3">
          <SocialCard
            icon={
              <IoLocationSharp className="text-red-400 text-2xl lg:text-xl" />
            }
            className="bg-white m-3 p-3 rounded-lg drop-shadow-xl"
          />
          <PersonalDetailCard title="Location" detail="Bangalore, India" />
        </div>
        <hr className="h-px self-center w-[90%] bg-gray-300 border-0" />
        <div className="flex flex-row items-center m-3">
          <SocialCard
            icon={
              <LuCalendarDays className="text-purple-500 text-2xl lg:text-xl" />
            }
            className="bg-white m-3 p-3 rounded-lg drop-shadow-xl"
          />
          <PersonalDetailCard title="Birthday" detail="April 5, 1998" />
        </div>
      </div>
      <div
        className="bg-gradient-to-r to-pink-500 from-rose-500  w-48 flex flex-row mb-5 justify-center items-center rounded-2xl p-2 mt-8 cursor-pointer "
        onClick={() => {
          window.open(
            'https://drive.google.com/u/1/uc?id=1fEwx0nzfCzSJFexJjB2ZhvlXsK7Js6aZ&export=download',
            '_blank',
          );
        }}
      >
        <PiDownloadLight className="m-2 ml-2 text-white text-4xl lg:text-xl animate-bounce" />
        <p className="text-white text-lg font-poppins mr-2 lg:text-sm">
          Download CV
        </p>
      </div>
    </div>
  );
}

export default ProfileContainer;
