import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import PageNav from '../NavBar/PageNav';
import MobileNav from '../NavBar/MobileNav';
import AboutHero from './AboutHero';
import AboutDetails from './AboutDetails';
import Seo from '../Seo/Seo';

function About() {
  return (
    <div className="flex min-h-svh flex-col">
      <Seo
        title="About · Caffeine Coder"
        description="Tech lead in Bengaluru leading web and cloud engineering. Working mostly in React, TypeScript, Java, Spring Boot, AWS and Terraform."
        path="/about"
      />

      <PageHeader />

      <main className="flex flex-1 flex-col justify-center gap-20 py-16 sm:gap-28 sm:py-20">
        <AboutHero />
        <AboutDetails />
      </main>

      <PageNav />
      <MobileNav />
    </div>
  );
}

export default About;
