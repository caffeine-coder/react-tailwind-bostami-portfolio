import React from 'react';
import MiddleContent from './MiddleContent';
import NavBar from '../NavBar/NavBar';

function LandingPage() {
  return (
    <div className="flex h-svh flex-col">
      <header className="flex min-h-0 flex-1 flex-col items-start justify-start gap-2.5 px-10 pt-10">
        <span className="whitespace-nowrap font-cinzel text-2xl font-light tracking-[0.15em] text-stone-800">
          C/C
        </span>

        <div className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          <span className="font-manrope text-xs font-semibold tracking-wide text-stone-500">
            Available for work
          </span>
        </div>
      </header>

      <div className="flex min-h-0 flex-1 items-center justify-center">
        <MiddleContent />
      </div>

      <div className="flex min-h-0 flex-1 flex-col justify-end pb-10">
        <NavBar />
      </div>
    </div>
  );
}

export default LandingPage;
