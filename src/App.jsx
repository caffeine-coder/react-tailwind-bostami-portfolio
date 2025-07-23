import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ProfileContainer from './Components/ProfileContainer/ProfileContainer';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';
import LargeNav from './Components/LargeNav/LargeNav';
import { toggleTheme, setTheme } from './store/themeSlice';
import VanGoghNight from './Components/VanGoghNight/VanGoghNight'; // we'll create this next

function App() {
  const dispatch = useDispatch();
  const activePage = useSelector((state) => state.page.activePage);
  const themeMode = useSelector((state) => state.theme.mode);

  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }
    return 'light';
  };

  useEffect(() => {
    const initialTheme = getInitialTheme();
    dispatch(setTheme(initialTheme));
  }, [dispatch]);

  return (
    <div className={themeMode === 'dark' ? 'dark' : ''}>
      <Routes>
        {/* Existing SPA controlled by Redux */}
        <Route
          path="/"
          element={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <div>
              {/* Mobile Nav */}
              <div className="lg:hidden">
                <Navbar refs={{ aboutRef, resumeRef, contactRef }} />
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
                      {activePage === 'About' && <About />}
                    </section>
                    <section ref={resumeRef}>
                      {activePage === 'Resume' && <Resume />}
                    </section>
                    <section ref={contactRef}>
                      {activePage === 'Contact' && <Contact />}
                    </section>
                  </div>
                </div>

                {/* Theme toggle */}
                <div className="hidden md:block md:fixed md:bottom-10 md:right-10 md:z-10">
                  <button
                    type="button"
                    onClick={() => dispatch(toggleTheme())}
                    className="relative drop-shadow-xl w-12 h-12 text-gray-800 flex items-center justify-center rounded-full hover:bg-red-400 hover:text-white bg-white dark:bg-gray-800 dark:text-white focus:outline-none overflow-hidden"
                  >
                    {themeMode === 'light' ? (
                      <IoMoonOutline className="text-2xl" />
                    ) : (
                      <IoSunnyOutline className="text-2xl" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          }
        />

        {/* New Magical Experience Route */}
        <Route path="/vangogh-night" element={<VanGoghNight />} />
      </Routes>
    </div>
  );
}

export default App;
