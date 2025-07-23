/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const loveVows = [
  'To feel this connection like Van Gogh painted raw, vibrant, and without holding back',
  'To treasure the ordinary moments we share, the way Vincent treasured a vase of sunflowers',
  'To be present beside you, like a steady star calm in the quiet, warm in the unknown',
  'To treasure the ordinary moments we share, the way Vincent treasured a vase of sunflowers',
  'To feel this connection like Van Gogh painted raw, vibrant, and without holding back',
];

function UntilStarsFadeAway() {
  const [currentVow, setCurrentVow] = useState(0);
  const [showVows, setShowVows] = useState(false);
  const [wishText, setWishText] = useState('');
  const [showWishInput, setShowWishInput] = useState(false);
  const [wishGranted, setWishGranted] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [shootingStars, setShootingStars] = useState([]);

  // Start the sequence
  useEffect(() => {
    const timer = setTimeout(() => setShowVows(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Cycle through vows
  useEffect(() => {
    if (!showVows) return;

    if (currentVow < loveVows.length - 1) {
      const timer = setTimeout(() => {
        setCurrentVow((prev) => prev + 1);
      }, 5000);
      return () => clearTimeout(timer);
    }
    // After all vows, show final message
    const timer = setTimeout(() => {
      setShowFinalMessage(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, [showVows, currentVow]);

  // Generate shooting stars
  useEffect(() => {
    const createShootingStar = () => {
      const star = {
        id: Date.now() + Math.random(),
        startX: Math.random() * 100,
        startY: Math.random() * 20,
        angle: Math.random() * 45 + 15, // 15-60 degree angle
      };

      setShootingStars((prev) => [...prev, star]);

      setTimeout(() => {
        setShootingStars((prev) => prev.filter((s) => s.id !== star.id));
      }, 4000);
    };

    const interval = setInterval(createShootingStar, 8000);
    // Create first shooting star after 10 seconds
    const firstStar = setTimeout(createShootingStar, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(firstStar);
    };
  }, []);

  const handleShootingStarClick = (starId) => {
    if (!wishGranted) {
      setShootingStars((prev) => prev.filter((s) => s.id !== starId));
      setShowWishInput(true);
    }
  };

  const submitWish = () => {
    if (wishText.trim()) {
      setWishGranted(true);
      setShowWishInput(false);
    }
  };

  const restartJourney = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen py-20 px-6 flex flex-col items-center justify-center">
      {/* Subtle overlay to blend with existing starry night background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent" />

      {/* Enhanced starfield that blends with main background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-200/50 animate-pulse"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 3}s`,
              opacity: Math.random() * 0.4 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Gentle Van Gogh swirls */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,300 Q300,200 600,350 T1200,300"
            stroke="url(#gentleSwirl)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 15, ease: 'easeInOut' }}
          />
          <motion.path
            d="M0,500 Q400,400 800,550 T1200,500"
            stroke="url(#gentleSwirl2)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 20, delay: 5, ease: 'easeInOut' }}
          />
          <defs>
            <linearGradient id="gentleSwirl" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="gentleSwirl2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.25" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Shooting Stars */}
      <div className="absolute inset-0 z-10">
        <AnimatePresence>
          {shootingStars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute cursor-pointer"
              style={{
                left: `${star.startX}%`,
                top: `${star.startY}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 4, ease: 'easeOut' }}
              onClick={() => handleShootingStarClick(star.id)}
            >
              <motion.div
                className="w-1 h-16 bg-gradient-to-b from-white via-yellow-200 to-transparent rounded-full"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.8))',
                  transform: `rotate(${star.angle}deg)`,
                }}
                animate={{
                  x: [0, Math.cos((star.angle * Math.PI) / 180) * 300],
                  y: [0, Math.sin((star.angle * Math.PI) / 180) * 300],
                }}
                transition={{ duration: 4, ease: 'easeOut' }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Couple Silhouettes */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-5"
      >
        <div className="relative">
          {/* Simple, elegant silhouettes */}
          <svg
            width="160"
            height="80"
            viewBox="0 0 160 80"
            className="opacity-60"
          >
            {/* Person 1 */}
            <circle cx="50" cy="25" r="8" fill="rgba(0,0,0,0.7)" />
            <rect
              x="45"
              y="33"
              width="10"
              height="25"
              fill="rgba(0,0,0,0.7)"
              rx="2"
            />
            <rect
              x="42"
              y="40"
              width="6"
              height="15"
              fill="rgba(0,0,0,0.7)"
              rx="1"
            />
            <rect
              x="52"
              y="40"
              width="6"
              height="15"
              fill="rgba(0,0,0,0.7)"
              rx="1"
            />

            {/* Person 2 */}
            <circle cx="110" cy="25" r="8" fill="rgba(0,0,0,0.7)" />
            <rect
              x="105"
              y="33"
              width="10"
              height="25"
              fill="rgba(0,0,0,0.7)"
              rx="2"
            />
            <rect
              x="102"
              y="40"
              width="6"
              height="15"
              fill="rgba(0,0,0,0.7)"
              rx="1"
            />
            <rect
              x="112"
              y="40"
              width="6"
              height="15"
              fill="rgba(0,0,0,0.7)"
              rx="1"
            />

            {/* Ground */}
            <ellipse cx="80" cy="75" rx="60" ry="3" fill="rgba(0,0,0,0.3)" />
          </svg>

          {/* Soft glow around couple */}
          <div className="absolute inset-0 bg-yellow-200/10 rounded-full blur-xl scale-150" />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-serif mb-6">
            <span className="bg-gradient-to-r from-yellow-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-lg">
              Until the Stars Fade Away
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
            className="text-lg text-yellow-100/80 font-merienda italic"
          >
            In this eternal moment, under Van Gogh's infinite sky
          </motion.p>
        </motion.div>

        {/* Love Vows */}
        <div className="mb-20 min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {showVows && (
              <motion.div
                key={currentVow}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="relative"
              >
                {/* Elegant backdrop */}
                <div className="bg-gradient-to-br from-black/20 via-black/30 to-black/20 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-yellow-400/20 shadow-2xl">
                  {/* Quote marks */}
                  <div className="text-6xl text-yellow-400/30 font-serif absolute -top-4 -left-4">
                    "
                  </div>
                  <div className="text-6xl text-yellow-400/30 font-serif absolute -bottom-8 -right-4">
                    "
                  </div>

                  <p className="text-xl md:text-2xl text-yellow-100 font-serif leading-relaxed tracking-wide">
                    {loveVows[currentVow]}
                  </p>
                </div>

                {/* Soft glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-blue-400/5 rounded-3xl blur-xl -z-10" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Wish Input */}
        <AnimatePresence>
          {showWishInput && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              className="mb-12"
            >
              <div className="bg-gradient-to-br from-white/95 to-yellow-50/95 backdrop-blur-sm rounded-2xl p-8 max-w-lg mx-auto border border-yellow-300/50 shadow-2xl">
                <h3 className="text-2xl font-merienda text-gray-800 mb-4 flex items-center justify-center gap-2">
                  <span>⭐</span>
                  Make a Wish Upon Our Star
                  <span>⭐</span>
                </h3>
                <p className="text-gray-600 text-sm mb-6 italic">
                  Write your deepest wish for our future together...
                </p>
                <textarea
                  value={wishText}
                  onChange={(e) => setWishText(e.target.value)}
                  placeholder="I wish for us to..."
                  className="w-full p-4 border-2 border-yellow-300/50 rounded-xl resize-none h-24 text-gray-800 font-serif focus:border-yellow-400 focus:outline-none transition-colors"
                  autoFocus
                />
                <motion.button
                  onClick={submitWish}
                  disabled={!wishText.trim()}
                  className="mt-4 w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-merienda text-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: wishText.trim() ? 1.02 : 1 }}
                  whileTap={{ scale: wishText.trim() ? 0.98 : 1 }}
                >
                  Send to the Stars ✨
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Wish Confirmation */}
        <AnimatePresence>
          {wishGranted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <div className="bg-gradient-to-r from-emerald-900/50 to-teal-900/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-400/30 max-w-2xl mx-auto">
                <p className="text-emerald-200 font-merienda text-lg mb-3">
                  ✨ Your wish has been woven into the fabric of the cosmos ✨
                </p>
                <p className="text-emerald-100/80 text-sm italic">
                  "{wishText}"
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Final Message */}
        <AnimatePresence>
          {showFinalMessage && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="space-y-12"
            >
              {/* Main final message */}
              <div className="bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-indigo-900/30 backdrop-blur-md rounded-3xl p-10 md:p-12 border border-purple-400/20 shadow-2xl">
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 2 }}
                  className="text-3xl md:text-4xl font-merienda text-transparent bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text mb-8"
                >
                  Thank you for being my starry night
                </motion.h3>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 2 }}
                  className="space-y-6"
                >
                  <p className="text-xl text-purple-100 font-serif italic leading-relaxed">
                    Just as Van Gogh painted the swirling cosmos above
                    Saint-Rémy, you have painted infinite magic across
                  </p>

                  <p className="text-lg text-purple-200/90 font-serif leading-relaxed">
                    In your eyes, I see the same eternal dance of light that
                    Vincent captured mysterious, beautiful, and filled with the
                    promise of forever.
                  </p>

                  <p className="text-lg text-blue-200/90 font-serif leading-relaxed">
                    Every star above hums with our story. And with each breath
                    we share, another brushstroke graces our unfolding masterpie
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 2 }}
                  className="mt-8 pt-6 border-t border-purple-300/20"
                >
                  <p className="text-yellow-300 text-lg font-merienda italic">
                    July 11, 2025 — Forever written in starlight
                  </p>
                </motion.div>
              </div>

              {/* Infinity message */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5, duration: 2 }}
                className="text-4xl md:text-5xl font-serif text-center"
              >
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
                  To that magical night and more... ∞
                </span>
              </motion.div>

              {/* Final button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 1 }}
                className="text-center"
              >
                <motion.button
                  onClick={restartJourney}
                  className="px-10 py-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white rounded-full font-merienda text-lg hover:from-yellow-500 hover:via-orange-500 hover:to-red-500 transition-all shadow-xl"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 30px rgba(255,255,255,0.3)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  🌟 Begin the Journey Again 🌟
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Instructions for shooting stars */}
        {!wishGranted && !showFinalMessage && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 15, duration: 2 }}
            className="text-yellow-200/60 text-sm font-merienda italic fixed bottom-8 left-1/2 transform -translate-x-1/2"
          >
            ⭐ Watch for shooting stars and click to make a wish ⭐
          </motion.p>
        )}
      </div>
    </section>
  );
}

export default UntilStarsFadeAway;
