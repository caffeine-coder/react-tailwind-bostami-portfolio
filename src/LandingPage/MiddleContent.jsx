import React from 'react';
import Socials from '../Socials/Socials';
import Hero from '../Hero/Hero';

function MiddleContent() {
  return (
    <div className="flex w-full flex-col items-center gap-y-8 px-6 py-8 sm:gap-y-14 sm:px-10 sm:py-10 lg:flex-row lg:items-stretch lg:gap-x-24 lg:px-0 lg:py-0">
      <div className="order-last mt-14 flex items-center sm:mt-10 lg:order-0 lg:mt-0 lg:ml-10">
        <Socials />
      </div>

      <div className="order-first flex flex-col items-center gap-y-8 sm:gap-y-14 lg:order-0 lg:flex-1 lg:flex-row lg:items-center lg:justify-center lg:gap-x-16">
        <Hero />

        <video
          src="/assets/developer.webm"
          width="800"
          height="450"
          autoPlay
          loop
          muted
          playsInline
          aria-label="Developer at work"
          className="w-full max-w-sm shrink-0 sm:max-w-xl lg:max-w-xl xl:max-w-200"
        />
      </div>
    </div>
  );
}

export default MiddleContent;
