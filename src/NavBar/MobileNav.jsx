import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { menuOpen, menuClose } from '../ease';

const NAV_ITEMS = [
  { number: '01', label: 'Home', to: '/' },
  { number: '02', label: 'About', to: '/about' },
  { number: '03', label: 'Work', to: '/work' },
  { number: '04', label: 'Contact', to: '/contact' },
];

function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="absolute right-6 top-8 z-50 flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5"
      >
        <motion.span
          className="block h-px w-6 bg-stone-800"
          animate={{ rotate: open ? 45 : 0, y: open ? 3.5 : 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        />
        <motion.span
          className="block h-px w-6 bg-stone-800"
          animate={{ rotate: open ? -45 : 0, y: open ? -3.5 : 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-40 overflow-hidden">
            <motion.div
              className="absolute right-0 top-0 aspect-square w-[300vmax] -translate-y-1/2 translate-x-1/2 rounded-full bg-[#efe9e3]"
              initial={{ scale: 0 }}
              animate={{ scale: 1, transition: { duration: 0.6, ease: menuOpen } }}
              exit={{ scale: 0, transition: { duration: 0.5, ease: menuClose } }}
            />

            <motion.div
              className="relative flex h-full flex-col items-start justify-center gap-8 px-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.35, duration: 0.3 } }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
            >
              {NAV_ITEMS.map(({ number, label, to }, index) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.08, duration: 0.4, ease: 'easeOut' }}
                >
                  <NavLink
                    to={to}
                    end={to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => `flex items-baseline gap-3 font-grotesk text-4xl transition-colors duration-200 ${isActive ? 'font-semibold text-stone-900' : 'text-stone-500'
                    }`}
                  >
                    <span className="text-sm text-stone-400">{number}</span>
                    {label}
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileNav;
