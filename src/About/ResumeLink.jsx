import React from 'react';
import { motion } from 'framer-motion';
import { stroke } from '../ease';

const RESUME_URL = 'https://drive.google.com/uc?export=download&id=1c6LFhpz4eQl37EAH_gddpJsMHcCjUvHu';

function ResumeLink() {
  return (
    <motion.div
      className="flex flex-nowrap items-center justify-center gap-2 sm:gap-6 lg:justify-start"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
    >
      <span className="font-neucha text-lg text-stone-600 sm:text-2xl lg:text-3xl">
        lurking recruiter?
      </span>

      <span className="-rotate-6 font-neucha text-lg text-stone-500 sm:text-2xl lg:text-3xl" aria-hidden="true">
        →
      </span>

      <motion.a
        href={RESUME_URL}
        rel="noreferrer"
        className="group relative inline-flex cursor-pointer items-center px-3 py-2 sm:px-5"
        whileHover="hover"
        whileTap={{ scale: 0.96 }}
        initial="rest"
        animate={{
          y: [0, -6, 0],
          filter: [
            'drop-shadow(0 2px 3px rgba(41,37,36,0.12))',
            'drop-shadow(0 8px 10px rgba(41,37,36,0.22))',
            'drop-shadow(0 2px 3px rgba(41,37,36,0.12))',
          ],
        }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 160 60"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.path
            d="M14 8 C 60 2, 110 3, 148 10 C 156 22, 155 40, 149 51
               C 105 58, 55 57, 12 52 C 4 40, 5 20, 14 8 Z"
            stroke="#292524"
            strokeWidth="2"
            fill="none"
            vectorEffect="non-scaling-stroke"
            variants={{
              rest: { pathLength: 1, opacity: 1 },
              hover: { pathLength: [0, 1], opacity: 1 },
            }}
            transition={{ duration: 0.5, ease: stroke }}
          />
        </motion.svg>

        <span className="relative whitespace-nowrap font-neucha text-lg text-stone-800 sm:text-2xl lg:text-3xl">
          here's my resume
        </span>
      </motion.a>
    </motion.div>
  );
}

export default ResumeLink;
