import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { entrance } from '../ease';

const holdFor = 1200;

function SplashScreen({ onDone }) {
  const [leaving, setLeaving] = useState(false);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {!leaving && (
        <motion.div
          className="fixed inset-0 z-100 flex origin-bottom flex-col items-center justify-center bg-stone-900"
          initial={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1.1, ease: entrance }}
        >
          <motion.div
            className="flex flex-col items-center gap-3 px-6 text-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <motion.h1
              className="font-cormorant text-3xl font-medium leading-tight text-stone-100 sm:text-4xl md:text-5xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 1, ease: entrance }}
              onAnimationComplete={() => {
                setTimeout(() => setLeaving(true), holdFor);
              }}
            >
              good things brewing.
            </motion.h1>

            <motion.p
              className="-rotate-2 font-neucha text-2xl text-stone-400 sm:text-3xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7, ease: entrance }}
            >
              from India, with love
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

SplashScreen.propTypes = {
  onDone: PropTypes.func.isRequired,
};

export default SplashScreen;
