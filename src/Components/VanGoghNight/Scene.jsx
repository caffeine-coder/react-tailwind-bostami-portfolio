/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// eslint-disable-next-line react/prop-types, object-curly-newline
function Scene({ title, content, image, align = 'left' }) {
  const isLeft = align === 'left';
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();

  // Parallax transform
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  // Color palette that changes based on scroll
  const getScrollBasedColor = () => {
    const colors = [
      'from-pink-500 to-rose-500', // Pink-rose
      'from-blue-400 to-indigo-500', // Van Gogh blue
      'from-yellow-400 to-orange-500', // Sunflower yellow
      'from-purple-500 to-indigo-600', // Night purple
      'from-green-400 to-teal-500', // Cypress green
    ];

    const colorIndex = Math.floor((scrollY / 200) % colors.length);
    return colors[colorIndex];
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 font-body overflow-hidden">
      <div
        className={`flex flex-col-reverse lg:flex-row ${
          isLeft ? '' : 'lg:flex-row-reverse'
        } items-center gap-10 max-w-6xl w-full`}
      >
        {/* Enhanced Text with Color-Changing Effect */}
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2 relative"
        >
          <h2 className="text-4xl font-heading font-bold mb-4 relative overflow-hidden">
            <span
              className={`inline-block bg-gradient-to-r ${getScrollBasedColor()} bg-clip-text text-transparent transition-all duration-1000 ease-in-out`}
              style={{
                filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))',
              }}
            >
              {title}
            </span>
            {/* Animated underline */}
            <div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse opacity-60"
              style={{ width: `${Math.min(title.length * 8, 200)}px` }}
            />
          </h2>
          <motion.p
            className="text-lg text-gray-200 whitespace-pre-line leading-relaxed font-merienda relative"
            initial={{ opacity: 0.8 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            {content}
            {/* Subtle text glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-sm pointer-events-none" />
          </motion.p>
        </motion.div>

        {/* Enhanced Image with Parallax and Brush Stroke Border */}
        <motion.div
          style={{ y: imageY }}
          className="lg:w-1/2 relative group"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Van Gogh-style brush stroke border */}
          <div className="absolute -inset-4 opacity-60 pointer-events-none">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M5,10 Q15,5 25,12 T45,10 Q60,8 75,15 T95,12 L92,25 Q88,35 85,45 T82,65 Q85,75 88,85 T95,88 L85,92 Q75,88 65,85 T45,88 Q35,92 25,88 T5,85 L8,75 Q12,65 8,55 T5,35 Q8,25 12,15 T5,10 Z"
                fill="none"
                stroke="url(#brushGradient)"
                strokeWidth="2"
                className="animate-pulse"
              />
              <defs>
                <linearGradient
                  id="brushGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Paint splash effects */}
          <div className="absolute -inset-2 pointer-events-none opacity-30">
            <div className="absolute top-2 right-4 w-3 h-3 bg-yellow-400 rounded-full blur-sm animate-pulse" />
            <div
              className="absolute bottom-6 left-2 w-2 h-2 bg-blue-400 rounded-full blur-sm animate-pulse"
              style={{ animationDelay: '1s' }}
            />
            <div
              className="absolute top-1/3 left-0 w-4 h-2 bg-orange-400 rounded-full blur-sm animate-pulse"
              style={{ animationDelay: '2s' }}
            />
          </div>

          <img
            src={image}
            alt={title}
            className="rounded-3xl shadow-2xl w-full object-cover border-2 border-yellow-400 drop-shadow-[0_0_25px_rgba(255,255,150,0.4)] transition-all duration-500 group-hover:drop-shadow-[0_0_35px_rgba(255,255,150,0.6)] group-hover:border-orange-400"
          />

          {/* Floating paint brush effect on hover */}
          <div className="absolute -top-6 -right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
            <div className="relative">
              <div className="w-8 h-1 bg-amber-600 rounded-full" />
              <div className="w-1 h-12 bg-amber-800 rounded-full ml-3" />
              <div className="absolute -top-1 -right-2 w-4 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-sm animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating brush strokes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 15}%`,
            }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div
              className={`w-16 h-2 bg-gradient-to-r ${i === 0 ? 'from-yellow-400 to-orange-500' : i === 1 ? 'from-blue-400 to-indigo-500' : 'from-pink-400 to-purple-500'} rounded-full blur-sm`}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Scene;
