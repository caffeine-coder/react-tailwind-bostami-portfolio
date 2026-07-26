import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { stroke } from '../ease';

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Work', to: '/work' },
  { label: 'Contact', to: '/contact' },
];

function NavBar() {
  const [hovered, setHovered] = useState(null);
  const isOpen = hovered !== null;
  const activeWord = NAV_ITEMS.find((item) => item.to === hovered)?.label;

  return (
    <div className="relative flex h-auto min-h-20 w-full items-center justify-center overflow-hidden md:h-32">
      <motion.div
        className="absolute inset-x-0 origin-center bg-stone-900"
        style={{ top: 0, bottom: 0 }}
        initial={false}
        animate={{ scaleY: isOpen ? 1 : 0 }}
        transition={{ duration: 0.35, ease: stroke }}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.span
            key={activeWord}
            className="pointer-events-none absolute select-none whitespace-nowrap font-cormorant text-[16vw] font-medium leading-none text-stone-700/40"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.3, delay: 0.15, ease: 'easeOut' },
            }}
            exit={{ opacity: 0, transition: { duration: 0.15, ease: 'easeIn' } }}
          >
            {activeWord}
          </motion.span>
        )}
      </AnimatePresence>

      <nav
        className="relative flex w-full flex-col items-center px-4 py-4 sm:px-10"
        onMouseLeave={() => setHovered(null)}
      >
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-grotesk sm:gap-x-12">
          {NAV_ITEMS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onMouseEnter={() => setHovered(to)}
              className={({ isActive }) => {
                if (isOpen) {
                  const lit = isActive || hovered === to;
                  return `text-base tracking-wide transition-colors duration-200 sm:text-lg ${lit ? 'text-stone-100' : 'text-stone-500'}`;
                }
                const style = isActive ? 'font-semibold text-stone-900' : 'text-stone-500 hover:text-stone-900';
                return `text-base tracking-wide transition-colors duration-200 sm:text-lg ${style}`;
              }}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
