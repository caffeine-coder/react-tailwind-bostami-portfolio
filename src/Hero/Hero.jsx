import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BREW_WORDS = ['coffee', 'code', 'ideas'];
const BREW_INTERVAL = 2200;
const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { delayChildren: 0.15, staggerChildren: 0.14 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
};

function BrewingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % BREW_WORDS.length);
    }, BREW_INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-3 font-cormorant text-4xl text-stone-800 sm:text-5xl">
      <span className="font-normal italic text-stone-400">Brewing</span>
      <span className="relative flex h-[1.1em] items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={BREW_WORDS[index]}
            className="block font-medium leading-none"
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            exit={{ y: '-110%' }}
            transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
          >
            {BREW_WORDS[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </div>
  );
}

function Hero() {
  return (
    <motion.div
      className="flex max-w-2xl flex-col items-start gap-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        variants={item}
        className="font-cormorant text-5xl font-medium leading-[1.05] text-stone-900 sm:text-6xl lg:text-7xl"
      >
        Your
        {' '}
        <span className="relative inline-block whitespace-nowrap">
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
          <span className="pointer-events-none absolute bottom-full left-1/2 hidden translate-y-6 items-start -translate-x-1/4 sm:flex">
            <motion.img
              src="/assets/curve-arrow.png"
              alt=""
              aria-hidden="true"
              className="w-20 opacity-70"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 0.7, scale: 1 }}
              transition={{ delay: 0.95, duration: 0.4, ease: 'easeOut' }}
            />
            <motion.span
              className="ml-1 block whitespace-nowrap font-neucha text-4xl text-stone-500"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.35, ease: 'easeOut' }}
            >
              debatable
            </motion.span>
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
        I build things that work, look good, and don&apos;t break.
      </motion.p>
    </motion.div>
  );
}

export default Hero;
