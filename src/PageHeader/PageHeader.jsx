import React from 'react';
import WatercolorStroke from '../PageHeading/WatercolorStroke';

function PageHeader() {
  return (
    <header className="flex flex-col items-start justify-start gap-2.5 px-6 pt-8 sm:px-10 sm:pt-10">
      <div className="flex items-baseline gap-3">
        <span className="relative inline-block -rotate-3 whitespace-nowrap px-3 py-1 font-neucha text-lg text-stone-600">
          <WatercolorStroke />
          <span className="relative">open to work and collabs !</span>
        </span>
      </div>
    </header>
  );
}

export default PageHeader;
