import React, { useEffect, useState } from 'react';
import MiddleContent from './MiddleContent';
import NavBar from '../NavBar/NavBar';
import MobileNav from '../NavBar/MobileNav';
import PageHeader from '../PageHeader/PageHeader';
import Seo from '../Seo/Seo';
import SplashScreen from '../Splash/SplashScreen';

let splashPlayed = false;

function LandingPage() {
  const [showSplash, setShowSplash] = useState(!splashPlayed);

  useEffect(() => {
    splashPlayed = true;
  }, []);

  return (
    <div className="flex min-h-svh flex-col">
      {showSplash && <SplashScreen onDone={() => setShowSplash(false)} />}

      <Seo
        title="Caffeine Coder"
        description="Full-stack engineer and tech lead in Bengaluru, building web and cloud products at scale. React, TypeScript, Java, Spring Boot and AWS."
        path="/"
      />
      <div className="lg:flex-1">
        <PageHeader />
      </div>

      <div className="flex items-center justify-center overflow-x-hidden py-12 lg:flex-1 lg:py-4">
        <MiddleContent />
      </div>

      <div className="hidden lg:flex lg:flex-col lg:flex-1 lg:justify-end lg:pb-10">
        <NavBar />
      </div>

      <MobileNav />
    </div>
  );
}

export default LandingPage;
