import React from 'react';
import { motion } from 'framer-motion';
import ResumeLink from './ResumeLink';
import WatercolorStroke from '../PageHeading/WatercolorStroke';
import { entrance, stroke } from '../ease';

function AboutHero() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col items-center gap-12 px-6 sm:px-10 lg:flex-row lg:items-center lg:gap-16">
      <motion.div
        className="relative shrink-0"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: entrance }}
      >
        <svg
          className="pointer-events-none absolute -inset-3 h-[calc(100%+1.5rem)] w-[calc(100%+1.5rem)]"
          viewBox="0 0 220 260"
          fill="none"
          aria-hidden="true"
        >
          <motion.path
            d="M10 22 C 8 10, 22 6, 40 6 L 180 5 C 200 4, 214 14, 213 32
               L 214 228 C 215 246, 200 254, 182 254 L 36 255
               C 16 256, 6 244, 7 226 L 9 40"
            stroke="#292524"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease: stroke }}
          />
        </svg>

        <img
          src="/assets/profilepicture.jpg"
          alt="Abhishek P"
          className="relative h-56 w-56 rounded-4xl object-cover sepia-[0.25] saturate-[0.65] brightness-105 sm:h-64 sm:w-64 lg:h-72 lg:w-72"
        />

        <motion.span
          className="absolute -bottom-10 -right-2 -rotate-6 whitespace-nowrap font-neucha text-2xl text-stone-500"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.35, ease: 'easeOut' }}
        >
          that's me
        </motion.span>
      </motion.div>

      <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: entrance }}
          className="font-cormorant text-4xl font-medium leading-tight text-stone-900 sm:text-5xl"
        >
          <span className="relative inline-block px-5 py-2">
            <WatercolorStroke />
            <span className="relative">Abhishek P</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: entrance }}
          className="font-manrope text-sm uppercase tracking-wide text-stone-500"
        >
          Full-Stack Engineer & Tech Lead · Bengaluru, India
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: entrance }}
          className="max-w-lg font-manrope text-base leading-relaxed text-stone-600 sm:text-lg"
        >
          I lead a team building web and cloud platforms at scale. Most days
          that still means writing the code myself. Every day it means way
          too much coffee.
        </motion.p>

        <div className="mt-4">
          <ResumeLink />
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
