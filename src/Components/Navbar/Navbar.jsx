import React, { useState } from 'react';
import cc from '../../assets/images/cc.png'
import { IoMoonOutline } from "react-icons/io5";
import { LiaIdCard } from "react-icons/lia";
import { GrDocumentUser } from "react-icons/gr";
import { IoBriefcaseOutline } from "react-icons/io5";
import { RiContactsBookLine } from "react-icons/ri";




function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
  <div className='flex flex-col '>
    <div className="flex justify-between items-center m-10 ">
      <div className=' w-[10rem] h-[7rem]'>
       <img src={cc}/>
       </div>
      <div className="flex flex-row mr-2 justify-center items-center">
        <button   className="relative drop-shadow-xl w-12 h-12 text-gray-800  flex items-center justify-center rounded-full mr-3 hover:bg-red-400 hover:text-white bg-white focus:outline-none overflow-hidden">
        <IoMoonOutline  className='text-2xl '/>
        </button>
        <button
            className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-b from-rose-500 to-pink-500 focus:outline-none overflow-hidden"
            onClick={toggleMenu}
        >
            <div className={`absolute w-6 h-0.5 bg-white transition-transform duration-500 ${isOpen ? 'transform rotate-45' : '-translate-y-2'}`} />
            <div className={`absolute w-6 h-0.5 bg-white transition-transform duration-500 ${isOpen ? 'transform translate-x-12' : 'translate-x-0'}`} />
            <div className={`absolute w-6 h-0.5 bg-white transition-transform duration-500 ${isOpen ? 'transform -rotate-45' : 'translate-y-2'}`} />
        </button>
      </div>
    </div>
      <div className={` absolute top-[20%] mt-2 w-[95%] bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 transform origin-top ${isOpen ? 'scale-y-100' : 'scale-y-0'} self-center`}>
      <ul className="py-2 px-3">
          <li className={`py-1 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'} m-3 font-poppins text-gray-500 hover:text-red-500 cursor-pointer flex items-center`}> <LiaIdCard className='text-xl' /> <span className='ml-2 text-sm font-normal'>About</span></li>
          <li className={`py-1 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'} m-3 font-poppins text-gray-500 hover:text-red-500 cursor-pointer flex items-center`}> <GrDocumentUser className='text-base' /> <span className='ml-2 text-sm font-normal'>Resume</span></li>
          <li className={`py-1 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'} m-3 font-poppins text-gray-500 hover:text-red-500 cursor-pointer flex items-center`}> <IoBriefcaseOutline className='text-xl' /> <span className='ml-2 text-sm font-normal'>Works</span></li>
          <li className={`py-1 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'} m-3 font-poppins text-gray-500 hover:text-red-500 cursor-pointer flex items-center`}> <RiContactsBookLine className='text-xl' /> <span className='ml-2 text-sm font-normal'>Contact</span></li>
      </ul>
    </div>
</div>
  );
}

export default Navbar;
