import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WatercolorStroke from '../PageHeading/WatercolorStroke';
import { entrance } from '../ease';

const words = ['coffee', 'code', 'ideas'];
const longestWord = words.reduce(
  (longest, word) => (word.length > longest.length ? word : longest),
  '',
);
const ROTATE_EVERY = 2200;

const container = {
  hidden: {},
  show: { transition: { delayChildren: 0.15, staggerChildren: 0.14 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: entrance },
  },
};

function BrewingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, ROTATE_EVERY);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-3 font-cormorant text-4xl text-stone-800 sm:text-4xl md:text-5xl">
      <span className="font-medium text-stone-400">Brewing</span>
      <span className="relative inline-flex justify-center px-4 py-1.5">
        <WatercolorStroke className="translate-y-[5%]" />

        <span
          aria-hidden="true"
          className="invisible font-normal italic leading-none"
        >
          {longestWord}
        </span>

        <span className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              className="block font-normal italic leading-none"
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              exit={{ y: '-110%' }}
              transition={{ duration: 0.45, ease: entrance }}
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </span>
      </span>
    </div>
  );
}

function Hero() {
  return (
    <motion.div
      className="flex max-w-2xl flex-col items-center gap-6 text-center lg:items-start lg:gap-8 lg:text-left"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        variants={item}
        className="mt-14 font-cormorant text-5xl font-medium leading-[1.1] text-stone-900 sm:mt-16 md:mt-20 md:text-6xl md:leading-[1.05] lg:text-7xl"
      >
        <span className="whitespace-nowrap">
          Your
          {' '}
          <span className="relative inline-block">
            average
            <motion.img
              src="/assets/strike.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 h-[0.6em] w-[calc(100%+1.4rem)] translate-x-[-0.7rem] translate-y-[-20%] object-cover object-center"
              style={{ left: 0 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.4, ease: 'easeOut' }}
            />
            <span className="pointer-events-none absolute bottom-full left-1/2 flex translate-y-6 items-start -translate-x-1/4">
              <motion.img
                src="/assets/curve-arrow.png"
                alt=""
                aria-hidden="true"
                className="w-16 opacity-70 sm:w-20"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 0.7, scale: 1 }}
                transition={{ delay: 0.95, duration: 0.4, ease: 'easeOut' }}
              />
              <motion.span
                className="ml-1 block whitespace-nowrap font-neucha text-3xl text-stone-500 sm:text-4xl"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.35, ease: 'easeOut' }}
              >
                debatable
              </motion.span>
            </span>
          </span>
        </span>
        {' '}
        developer.
      </motion.h1>

      <motion.div variants={item}>
        <BrewingText />
      </motion.div>

      <motion.p
        variants={item}
        className="max-w-md font-manrope text-base leading-relaxed text-stone-500 sm:text-lg"
      >
        I build things that work, look good, and don't break.
      </motion.p>
    </motion.div>
  );
}

export default Hero;
