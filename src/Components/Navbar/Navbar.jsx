/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// src/Components/Navbar/Navbar.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IoMoonOutline, IoBriefcaseOutline } from 'react-icons/io5';
import { LiaIdCard } from 'react-icons/lia';
import { GrDocumentUser } from 'react-icons/gr';
import { RiContactsBookLine } from 'react-icons/ri';
import { setActivePage } from '../../store/pageSlice';
import cc from '../../assets/images/cc.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (page) => {
    dispatch(setActivePage(page));
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center m-10">
        <div className="w-[10rem] h-[7rem]">
          <img src={cc} alt="Profile" />
        </div>
        <div className="flex flex-row mr-2 justify-center items-center">
          <button
            type="button"
            className="relative shadow-xl w-12 h-12 text-gray-800 flex items-center justify-center rounded-full mr-3 hover:bg-red-400 hover:text-white bg-white focus:outline-none overflow-hidden"
          >
            <IoMoonOutline className="text-2xl" />
          </button>
          <button
            type="button"
            className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-b from-rose-500 to-pink-500 focus:outline-none overflow-hidden lg:hidden"
            onClick={toggleMenu}
          >
            <div
              className={`absolute w-6 h-0.5 bg-white transition-transform duration-500 ${isOpen ? 'transform rotate-45' : '-translate-y-2'}`}
            />
            <div
              className={`absolute w-6 h-0.5 bg-white transition-transform duration-500 ${isOpen ? 'transform translate-x-12' : 'translate-x-0'}`}
            />
            <div
              className={`absolute w-6 h-0.5 bg-white transition-transform duration-500 ${isOpen ? 'transform -rotate-45' : 'translate-y-2'}`}
            />
          </button>
        </div>
      </div>
      <div
        className={`absolute top-[20%] mt-2 w-[95%] bg-white rounded-lg lg:hidden shadow-lg overflow-hidden transition-all duration-500 transform origin-top ${isOpen ? 'scale-y-100' : 'scale-y-0'} self-center`}
      >
        <ul className="py-2 px-3">
          <li
            onClick={() => handleMenuItemClick('About')}
            className={`py-1 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'} m-3 font-poppins text-gray-500 hover:text-red-500 cursor-pointer flex items-center`}
          >
            <LiaIdCard className="text-xl" />
            <span className="ml-2 text-sm font-normal">About</span>
          </li>
          <li
            onClick={() => handleMenuItemClick('Resume')}
            className={`py-1 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'} m-3 font-poppins text-gray-500 hover:text-red-500 cursor-pointer flex items-center`}
          >
            <GrDocumentUser className="text-base" />
            <span className="ml-2 text-sm font-normal">Resume</span>
          </li>
          <li
            onClick={() => handleMenuItemClick('Works')}
            className={`py-1 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'} m-3 font-poppins text-gray-500 hover:text-red-500 cursor-pointer flex items-center`}
          >
            <IoBriefcaseOutline className="text-xl" />
            <span className="ml-2 text-sm font-normal">Works</span>
          </li>
          <li
            onClick={() => handleMenuItemClick('Contact')}
            className={`py-1 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'} m-3 font-poppins text-gray-500 hover:text-red-500 cursor-pointer flex items-center`}
          >
            <RiContactsBookLine className="text-xl" />
            <span className="ml-2 text-sm font-normal">Contact</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
