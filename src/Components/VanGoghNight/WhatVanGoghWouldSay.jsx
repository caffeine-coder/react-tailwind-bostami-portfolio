/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const letterFromVincent = {
  date: 'From the ethereal realm, with quiet wonder',
  content: `My Curious Companions Under the Stars,

From beyond the veil of this painted world, I glimpsed your night the way you sat beside each other, not saying everything, yet somehow speaking volumes. It reminded me of brushstrokes coming together for the first time hesitant, unsure, but already beginning to form something extraordinary.

What you share holds its own rare magic the kind found in early dawns and lingering sunsets, in the spaces between words and the warmth of unspoken understanding. That evening, you made the night shimmer not because of the stars above, but because of the light you carried within.

When I painted 'The Starry Night', I wasn’t just painting a sky. I was painting the feeling of wonder, of movement, of something larger than us swirling overhead. That same feeling echoed around you two souls meeting in a quiet moment, under a universe that seemed to lean in and listen.

I always believed that beauty hides in the gentle, the almost, the becoming. In shared silences. In laughter that feels like a secret only the two of you understand. In a night that feels like it was meant just for your kind of connection.

Let your story unfold with patience and boldness. Let it swirl, let it rest, let it surprise you. Even a single star can light the sky.

Yours in gentle awe and stardust,

Vincent van Gogh

P.S. — “The heart of man is very much like the sea it has its storms, it has its tides, and in its depths, it has its pearls too.” Perhaps what you’ve found is the glimmer of a pearl something rare, forming quietly in the deep.`,
};

function WhatVanGoghWouldSay() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [showLetter, setShowLetter] = useState(false);
  const [letterVisible, setLetterVisible] = useState(false);

  const openLetter = () => {
    setShowLetter(true);
    setTimeout(() => setLetterVisible(true), 300);
  };

  const closeLetter = () => {
    setLetterVisible(false);
    setTimeout(() => setShowLetter(false), 300);
  };

  return (
    <section className="relative min-h-screen py-20 px-6 flex flex-col items-center justify-center">
      {/* Subtle overlay to blend with existing starry night background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent" />

      {/* Additional subtle stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-yellow-200/40 animate-pulse"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 3}s`,
              opacity: Math.random() * 0.3 + 0.1,
            }}
          />
        ))}
      </div>

      {/* Artistic studio ambiance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-amber-500/8 via-yellow-400/4 to-transparent" />
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-yellow-200/6 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-1/2 right-1/4 w-32 h-32 bg-blue-200/4 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-serif mb-4">
          <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-400 bg-clip-text text-transparent drop-shadow-lg">
            What Van Gogh Would Say
          </span>
        </h2>
      </motion.div>

      <div className="relative z-10 w-full max-w-6xl space-y-16">
        {/* Letter from Vincent Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h3 className="text-2xl font-merienda text-yellow-200 mb-6">
            A Personal Letter from Vincent
          </h3>
          <p className="text-yellow-100/80 mb-8 max-w-2xl mx-auto">
            The master artist has written you a personal letter about us. <br />{' '}
            Click the envelope to read his heartfelt words.
          </p>

          <motion.button
            onClick={openLetter}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-32 h-24 bg-gradient-to-br from-amber-100 to-yellow-200 rounded-lg shadow-xl border-2 border-yellow-400 transform transition-transform group-hover:rotate-1">
              <div className="absolute inset-2 border border-amber-300 rounded" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="text-3xl mb-1">💌</div>
                <div className="text-xs text-gray-700 font-merienda">
                  From Vincent
                </div>
              </div>
              {/* Wax seal */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                V
              </div>
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* Letter Modal */}
      <AnimatePresence>
        {showLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={closeLetter}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateX: 15 }}
              animate={{
                opacity: letterVisible ? 1 : 0,
                scale: letterVisible ? 1 : 0.8,
                rotateX: letterVisible ? 0 : 15,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-amber-50 to-yellow-100 rounded-2xl shadow-2xl border-4 border-yellow-400"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Letter header */}
              <div className="sticky top-0 bg-gradient-to-r from-orange-200 to-yellow-200 p-6 rounded-t-xl border-b-2 border-yellow-400">
                <button
                  onClick={closeLetter}
                  className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl z-10"
                >
                  ✕
                </button>
                <div className="text-center">
                  <h3 className="text-2xl font-merienda text-gray-800 mb-2">
                    A Letter from Vincent van Gogh
                  </h3>
                  <p className="text-gray-600 italic text-sm">
                    {letterFromVincent.date}
                  </p>
                </div>
              </div>

              {/* Letter content */}
              <div className="p-8">
                <div className="space-y-6 text-gray-800 font-merienda leading-relaxed text-lg">
                  {letterFromVincent.content
                    .split('\n\n')
                    .map((paragraph, index) => (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: letterVisible ? 1 : 0,
                          y: letterVisible ? 0 : 20,
                        }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className={
                          index === 0
                            ? 'text-xl font-merienda font-semibold'
                            : ''
                        }
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                </div>

                {/* Signature flourish */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: letterVisible ? 1 : 0,
                    scale: letterVisible ? 1 : 0.8,
                  }}
                  transition={{ delay: 1.5 }}
                  className="mt-8 pt-6 border-t border-yellow-300 text-center"
                >
                  <div className="text-4xl mb-2">🌻</div>
                  <p className="text-gray-600 italic">
                    Written with all the passion of a thousand sunflowers
                  </p>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 left-4 text-2xl opacity-30">
                🎨
              </div>
              <div className="absolute bottom-4 right-4 text-2xl opacity-30">
                ⭐
              </div>
              {/* Ink spots */}
              <div className="absolute top-1/4 right-8 w-2 h-2 bg-gray-400/20 rounded-full" />
              <div className="absolute bottom-1/3 left-12 w-1 h-1 bg-gray-400/30 rounded-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default WhatVanGoghWouldSay;
