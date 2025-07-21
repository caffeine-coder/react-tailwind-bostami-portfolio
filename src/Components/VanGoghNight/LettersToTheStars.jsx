/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import { FaFeatherAlt } from 'react-icons/fa';

const poemParagraphs = [
  'I told her nothing just, “I’m taking you out.” No place. No plan. Only the trust in her eyes as she stepped into my car. We arrived. She gasped not loud, but the kind that holds time still. Her eyes lit brighter than the sunflowers on the walls. In that moment, the magic began.',

  'Ten quiet frames of Vincent’s life we read in silence, hearts quietly breaking. The sparkling room came next stars dancing, light swirling around her glow. Was it the lights? Or was she always this radiant and I’d just never seen enough of her?',

  'Then the great hall brushstrokes all around, a galaxy unfolding beneath our feet. She held my hand, placed her head on my shoulder and suddenly, everything softened. I opened up stories, sorrows, tears I hadn’t shared in years. But she stayed. Still. Gentle. Present. Like the stars above Vincent when the world didn’t.',

  'It was, not sure what to call it. But something holy bloomed in that moment a warmth that asked for nothing, yet gave everything. And if you ever ask me when magic was real... I’ll say it was the night I took her into a painting, and we never quite came back.',
];

function LettersToTheStars() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < poemParagraphs.length) {
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 3000);
      return () => clearTimeout(timeout);
    }
    const timeout = setTimeout(() => setShowCursor(false), 1000);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <section className="relative min-h-screen py-32 px-6 flex flex-col items-center justify-center text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-yellow-200/60 animate-pulse"
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

        {[...Array(2)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute w-px h-20 bg-gradient-to-b from-yellow-300/80 to-transparent animate-shooting-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animationDelay: `${Math.random() * 10 + 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-serif mb-6 relative">
          <span
            className="bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400 bg-clip-text text-transparent"
            style={{ textShadow: '0 0 30px rgba(255,255,150,0.5)' }}
          >
            Letters to the Stars
          </span>
        </h2>
        <div className="flex justify-center items-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-300" />
          <FaFeatherAlt className="text-yellow-300 text-xl animate-pulse" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-300" />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl w-full">
        <div className="absolute -inset-6 bg-yellow-200/10 rounded-3xl blur-xl" />

        <div className="relative bg-gradient-to-br from-amber-50/95 to-yellow-100/90 backdrop-blur-sm rounded-2xl p-10 md:p-12 border border-yellow-300/30 shadow-2xl">
          <div
            className="absolute inset-0 opacity-5 pointer-events-none rounded-2xl"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 30%, rgba(139, 69, 19, 0.1) 1px, transparent 1px),
                                radial-gradient(circle at 80% 70%, rgba(139, 69, 19, 0.05) 1px, transparent 1px),
                                radial-gradient(circle at 40% 80%, rgba(139, 69, 19, 0.08) 1px, transparent 1px)`,
            }}
          />

          <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-yellow-600/40 rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-yellow-600/40 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-yellow-600/40 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-yellow-600/40 rounded-br-lg" />

          <div className="text-center">
            <div className="text-lg md:text-xl text-gray-800 leading-relaxed font-serif italic tracking-wide space-y-8">
              {poemParagraphs.map((para, i) => (
                <p
                  key={i}
                  className={`transition-opacity duration-1000 ease-out ${currentIndex >= i ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${i * 0.2}s` }}
                >
                  {para}
                </p>
              ))}
            </div>

            {currentIndex >= poemParagraphs.length && (
              <div className="mt-8 text-right opacity-0 animate-fade-in-delayed">
                <div className="flex justify-end items-center space-x-3">
                  <div className="h-px w-16 bg-gray-600/50" />
                  <span className="text-xl text-gray-700 font-serif italic">
                    Abhi
                  </span>
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {[...Array(6)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-yellow-300/60 rounded-full pointer-events-none animate-float"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 4 + 4}s`,
          }}
        />
      ))}

      <style>
        {`
          @keyframes fade-in-delayed {
            0% {
              opacity: 0;
              transform: translateY(10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px) translateX(0px);
              opacity: 0.6;
            }
            50% {
              transform: translateY(-15px) translateX(5px);
              opacity: 1;
            }
          }

          .animate-fade-in-delayed {
            animation: fade-in-delayed 1s ease-out forwards;
            animation-delay: 0.5s;
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}

export default LettersToTheStars;
