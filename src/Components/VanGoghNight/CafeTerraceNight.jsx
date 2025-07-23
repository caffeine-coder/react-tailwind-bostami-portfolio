/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-duplicate-props */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  {
    id: 1,
    title: 'First Coffee',
    content:
      'Do you remember our very first coffee? You chose hot chocolate, and I couldn’t stop looking at you. When you sipped from my cup, I searched for that kiss-marked edge and suddenly, the coffee tasted like magic. I still wonder, was it the warmth of the drink, or just... you?',
    x: 15,
    y: 25,
    color: '#8B4513',
  },
  {
    id: 2,
    title: 'The Day Aged Like Fine Wine',
    content:
      'The day we met felt like a bottle of aged wine opening in slow motion every second unfolding with velvet depth and timeless grace. Time bent around us, as if even the universe paused to witness something eternal.',
    x: 75,
    y: 35,
    color: '#1e40af',
  },
  {
    id: 3,
    title: 'The Names You Call Me',
    content:
      'Every time you whisper “cutie” or say “bangaari,” it’s like a spell casting light inside me. The words feel like soft petals brushing my skin strange how syllables can make galaxies bloom behind my eyes.',
    x: 25,
    y: 65,
    color: '#dc2626',
  },
  {
    id: 4,
    title: 'Your Laugh',
    content:
      'Your laugh starts as a ripple, a gentle sparkle, and then bursts into this cascading starlight that fills my entire sky. It’s the sound my heart learned to wait for an echo of home wrapped in golden joy.',
    x: 65,
    y: 70,
    color: '#059669',
  },
  {
    id: 5,
    title: 'And This Van Gogh Night',
    content:
      'This night... it swirls like Van Gogh’s brush across the sky a dance of stars, wind, and whispers. Beneath this galaxy, it’s just you and me, hands close, hearts glowing like constellations. If I could paint this feeling, it would shimmer in blues, golds, and everything in between the night the stars bent down to watch us.',
    x: 45,
    y: 45,
    color: '#7c2d12',
  },
  {
    id: 6,
    title: 'Your Hand in Mine',
    content:
      'The first time your fingers touched mine, the world shrank into that single moment. It wasn’t just your hand it was every comfort I never knew I needed, every promise of forever pressed gently into my palm.',
    x: 85,
    y: 55,
    color: '#be185d',
  },
];

function CafeTerraceNight() {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [openedBottles, setOpenedBottles] = useState(new Set());
  const [candleFlicker, setCandleFlicker] = useState(0);

  // Candle flicker effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCandleFlicker(Math.random() * 0.3 + 0.7);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const handleBottleClick = (message) => {
    setSelectedMessage(message);
    setOpenedBottles((prev) => new Set([...prev, message.id]));
  };

  const closeMessage = () => {
    setSelectedMessage(null);
  };

  return (
    <section className="relative min-h-screen py-20 px-6 flex flex-col items-center justify-center overflow-hidden">
      {/* Subtle overlay to blend with existing starry night background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent" />

      {/* Additional subtle stars to enhance existing starfield */}
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
              opacity: Math.random() * 0.3 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Café elements that blend with starry night */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft café terrace glow - much more subtle */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-yellow-500/10 via-orange-400/5 to-transparent" />

        {/* Subtle building silhouette */}
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-t from-yellow-700/20 to-transparent opacity-30" />

        {/* Gentle street lamp glow */}
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-yellow-200/10 rounded-full blur-2xl animate-pulse" />
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-serif mb-4">
          <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-amber-400 bg-clip-text text-transparent drop-shadow-lg">
            The Café Terrace at Night
          </span>
        </h2>
        <p className="text-lg text-yellow-100 font-merienda italic max-w-2xl mx-auto leading-relaxed">
          In this starlit café of memories, floating bottles hold our precious
          moments. Click each one to read the stories written in candlelight.
        </p>
      </motion.div>

      {/* Floating Message Bottles */}
      <div className="relative z-10 w-full max-w-6xl h-96 mx-auto">
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            className={`absolute cursor-pointer transition-all duration-300 ${
              openedBottles.has(message.id)
                ? 'opacity-60'
                : 'opacity-90 hover:scale-110'
            }`}
            style={{
              left: `${message.x}%`,
              top: `${message.y}%`,
            }}
            initial={{ opacity: 0, y: 50, rotate: -10 }}
            whileInView={{
              opacity: openedBottles.has(message.id) ? 0.6 : 0.9,
              y: 0,
              rotate: 0,
            }}
            transition={{
              duration: 1.5,
              delay: index * 0.3,
              type: 'spring',
              stiffness: 100,
            }}
            animate={{
              y: [0, -8, 0],
              rotate: [-2, 2, -2],
            }}
            onClick={() => handleBottleClick(message)}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            {/* Bottle */}
            <div className="relative">
              <svg
                width="40"
                height="60"
                viewBox="0 0 40 60"
                className="drop-shadow-lg"
              >
                {/* Bottle body */}
                <rect
                  x="8"
                  y="15"
                  width="24"
                  height="40"
                  rx="3"
                  fill="rgba(255,255,255,0.3)"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="1"
                />
                {/* Bottle neck */}
                <rect
                  x="14"
                  y="5"
                  width="12"
                  height="15"
                  rx="2"
                  fill="rgba(255,255,255,0.2)"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="1"
                />
                {/* Cork */}
                <rect
                  x="12"
                  y="2"
                  width="16"
                  height="8"
                  rx="2"
                  fill="#8B4513"
                />
                {/* Message inside */}
                <rect
                  x="12"
                  y="20"
                  width="16"
                  height="25"
                  rx="1"
                  fill="rgba(255,248,220,0.8)"
                />
                {/* Bottle shine */}
                <rect
                  x="10"
                  y="17"
                  width="3"
                  height="35"
                  rx="1"
                  fill="rgba(255,255,255,0.4)"
                />
              </svg>

              {/* Floating sparkles */}
              <div className="absolute -top-2 -right-2 w-2 h-2 bg-yellow-300 rounded-full animate-ping" />
              {openedBottles.has(message.id) && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-green-400">
                  <span className="text-xs">✓</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Café Table with Candles */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative z-10 mt-20 flex justify-center"
      >
        <div className="relative">
          {/* Table */}
          <div className="w-64 h-4 bg-gradient-to-r from-amber-800 to-amber-900 rounded-full shadow-2xl" />
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-16 bg-gradient-to-b from-amber-800 to-amber-900 rounded-full" />

          {/* Candles */}
          <div className="absolute -top-8 left-1/4 flex items-end">
            <div className="w-3 h-12 bg-gradient-to-b from-red-600 to-red-800 rounded-t-full" />
            <div
              className="w-2 h-6 bg-gradient-to-b from-yellow-300 to-orange-400 rounded-full ml-px animate-pulse"
              style={{ opacity: candleFlicker }}
            />
          </div>

          <div className="absolute -top-6 right-1/4 flex items-end">
            <div className="w-3 h-10 bg-gradient-to-b from-blue-600 to-blue-800 rounded-t-full" />
            <div
              className="w-2 h-5 bg-gradient-to-b from-yellow-300 to-orange-400 rounded-full ml-px animate-pulse"
              style={{ opacity: candleFlicker, animationDelay: '0.3s' }}
            />
          </div>

          {/* Warm candlelight glow */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-16 bg-yellow-200/20 rounded-full blur-xl" />
        </div>
      </motion.div>

      {/* Message Modal (Napkin) */}
      <AnimatePresence>
        {selectedMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={closeMessage}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative max-w-2xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Napkin background */}
              <div className="relative bg-gradient-to-br from-yellow-50 to-amber-50 p-8 md:p-12 rounded-lg shadow-2xl border-2 border-amber-200/50">
                {/* Napkin texture */}
                <div
                  className="absolute inset-0 opacity-5 rounded-lg"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 11px)',
                  }}
                />

                {/* Close button */}
                <button
                  onClick={closeMessage}
                  className="absolute top-4 right-4 text-amber-700 hover:text-amber-900 text-xl z-10"
                >
                  ✕
                </button>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-merienda text-amber-800 mb-4 text-center">
                    {selectedMessage.title}
                  </h3>
                  <p className="text-gray-800 leading-relaxed font-serif italic text-lg">
                    {selectedMessage.content}
                  </p>

                  {/* Ink blot */}
                  <div className="absolute bottom-4 right-8 w-3 h-3 bg-amber-700/20 rounded-full" />
                </div>

                {/* Candlelight effect on napkin */}
                <div
                  className="absolute inset-0 bg-gradient-radial from-yellow-200/20 via-transparent to-transparent rounded-lg pointer-events-none"
                  style={{ opacity: candleFlicker * 0.5 }}
                />
              </div>

              {/* Shadow/glow effect */}
              <div className="absolute inset-0 bg-yellow-200/10 rounded-lg blur-xl -z-10" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>
        {`
          .clip-path-building {
            clip-path: polygon(
              0 100%,
              0 40%,
              20% 35%,
              25% 0,
              75% 0,
              80% 35%,
              100% 40%,
              100% 100%
            );
          }

          .bg-gradient-radial {
            background: radial-gradient(circle, var(--tw-gradient-stops));
          }
        `}
      </style>
    </section>
  );
}

export default CafeTerraceNight;
