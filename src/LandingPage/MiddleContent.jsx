import React from 'react';
import Socials from '../Socials/Socials';
import Hero from '../Hero/Hero';

function MiddleContent() {
  return (
    <div className="flex w-full items-stretch gap-x-16">
      <div className="ml-10 flex items-center">
        <Socials />
      </div>

      <div className="flex flex-1 items-center justify-center gap-x-16">
        <Hero />

        <img
          src="/assets/developer.gif"
          alt="Developer at work"
        />
      </div>
    </div>
  );
}

export default MiddleContent;
