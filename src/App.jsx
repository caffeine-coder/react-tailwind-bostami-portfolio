import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import About from './About/About';
import StillBrewing from './Work/StillBrewing';
import Contact from './Contact/Contact';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<StillBrewing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
