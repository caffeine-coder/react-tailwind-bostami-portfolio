/* eslint-disable jsx-a11y/control-has-associated-label */

import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { IoMoonOutline } from 'react-icons/io5';
import Navbar from './Components/Navbar/Navbar';
import ProfileContainer from './Components/ProfileContainer/ProfileContainer';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';
import LargeNav from './Components/LargeNav/LargeNav';

function App() {
  const activePage = useSelector((state) => state.page.activePage);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const worksRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <div className="lg:hidden">
        <Navbar
          refs={{
            aboutRef,
            resumeRef,
            worksRef,
            contactRef,
          }}
        />
      </div>
      <div className="flex flex-col justify-around lg:flex-row lg:justify-center lg:pl-40 lg:pr-40">
        <div>
          <ProfileContainer />
        </div>
        <div className="lg:flex-2 lg:flex lg:flex-col lg:items-center lg:justify-center lg:mt-10">
          <div className="hidden lg:flex">
            <LargeNav />
          </div>
          <div>
            <section ref={aboutRef}>
              {activePage === 'About' && <About ref={aboutRef} />}
            </section>
            <section ref={resumeRef}>
              {activePage === 'Resume' && <Resume ref={resumeRef} />}
            </section>
            <section ref={contactRef}>
              {activePage === 'Contact' && <Contact ref={contactRef} />}
            </section>
          </div>
        </div>
        <div className="hidden md:block md:fixed md:bottom-10 md:right-10 md:z-10">
          <button
            type="button"
            className="relative drop-shadow-xl w-12 h-12 text-gray-800 flex items-center justify-center rounded-full hover:bg-red-400 hover:text-white bg-white focus:outline-none overflow-hidden"
          >
            <IoMoonOutline className="text-2xl" />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
