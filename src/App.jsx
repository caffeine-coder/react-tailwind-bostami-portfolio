import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { setTheme } from './store/themeSlice';
import LandingPage from './LandingPage/LandingPage';
import About from './About/About';
import Work from './Work/Work';
import Contact from './Contact/Contact';

function App() {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme.mode);

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
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
