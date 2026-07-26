import React, { useId } from 'react';
import PropTypes from 'prop-types';

function WatercolorStroke({ className = '' }) {
  const id = useId();
  const grainId = `grain-${id}`;
  const blurId = `blur-${id}`;
  const fadeId = `fade-${id}`;

  return (
    <svg
      className={`absolute inset-x-0 top-0 h-full w-full ${className}`}
      viewBox="0 0 600 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={fadeId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#d9b48f" stopOpacity="0.55" />
          <stop offset="35%" stopColor="#c99a72" stopOpacity="0.42" />
          <stop offset="70%" stopColor="#d9b48f" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#c08e66" stopOpacity="0.3" />
        </linearGradient>

        <filter id={grainId}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="4"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="6"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        <filter id={blurId}>
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
      </defs>

      <g filter={`url(#${grainId})`}>
        <path
          d="M8 34 C 90 22, 210 30, 330 26 C 430 23, 520 31, 592 25
             C 596 45, 594 74, 590 92 C 500 99, 380 92, 268 96
             C 170 99, 78 93, 10 97 C 5 78, 4 52, 8 34 Z"
          fill={`url(#${fadeId})`}
        />
        <path
          d="M14 44 C 120 34, 240 42, 360 37 C 450 33, 530 41, 586 36
             C 589 52, 588 70, 585 84 C 500 89, 390 83, 280 87
             C 180 90, 90 85, 16 88 C 12 74, 11 56, 14 44 Z"
          fill="#c08e66"
          fillOpacity="0.18"
          filter={`url(#${blurId})`}
        />
      </g>
    </svg>
  );
}

WatercolorStroke.propTypes = {
  className: PropTypes.string,
};

export default WatercolorStroke;
