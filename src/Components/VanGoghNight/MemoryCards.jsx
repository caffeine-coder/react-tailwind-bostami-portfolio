/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef, useEffect } from 'react';
import cover1 from './assets/vg-cover1.jpg';
import cover2 from './assets/vg-cover2.jpg';
import cover3 from './assets/vg-cover3.jpg';
import photo1 from './assets/photo1.jpg';
import photo2 from './assets/photo2.jpg';
import photo3 from './assets/photo3.jpg';

const cards = [
  {
    id: 1,
    title: 'Wonder',
    cover: cover1,
    photo: photo1,
    paragraph:
      'We stood in awe, surrounded by swirls. This picture was taken when we first walked in, pure wonder in our eyes.',
  },
  {
    id: 2,
    title: 'Stillness',
    cover: cover2,
    photo: photo2,
    paragraph:
      'That moment where nothing moved but our breath this still captures it. The silence said everything.',
  },
  {
    id: 3,
    title: 'Nostalgia',
    cover: cover3,
    photo: photo3,
    paragraph:
      'Even then, it felt like a memory being written. This was taken near the Starry Night wall — you looked so peaceful.',
  },
];

// Paintbrush cursor trail
function PaintbrushTrail({ mousePos, isActive }) {
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    if (!isActive) {
      setTrail([]);
      return;
    }

    const newDrop = {
      id: Date.now(),
      x: mousePos.x,
      y: mousePos.y,
      color: ['#fbbf24', '#3b82f6', '#f59e0b', '#ef4444'][
        Math.floor(Math.random() * 4)
      ],
    };

    setTrail((prev) => [...prev.slice(-8), newDrop]);

    const timeout = setTimeout(() => {
      setTrail((prev) => prev.filter((drop) => drop.id !== newDrop.id));
    }, 1500);

    return () => clearTimeout(timeout);
  }, [mousePos, isActive]);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {trail.map((drop, index) => (
        <div
          key={drop.id}
          className="absolute w-2 h-2 rounded-full animate-pulse"
          style={{
            left: drop.x - 4,
            top: drop.y - 4,
            backgroundColor: drop.color,
            opacity: ((index + 1) / trail.length) * 0.7,
            filter: 'blur(1px)',
            transform: `scale(${(index + 1) / trail.length})`,
          }}
        />
      ))}
    </div>
  );
}

function MemoryCards() {
  const [activeCard, setActiveCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (hoveredCard) {
      setMousePos({ x: e.clientX, y: e.clientY });
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hoveredCard]);

  return (
    <section
      className="relative mt-20 z-10 min-h-screen py-20 px-6 text-white font-body"
      ref={containerRef}
    >
      <PaintbrushTrail mousePos={mousePos} isActive={!!hoveredCard} />

      <h2 className="text-5xl font-delighter text-center mb-12">
        <span className="bg-gradient-to-r from-rose-200 to-yellow-500 bg-clip-text text-transparent">
          Emotions Etched in Art
        </span>
      </h2>

      {/* Enhanced Card Stack with 3D Effects */}
      <div className="flex flex-wrap justify-center gap-12">
        {cards.map((card) => (
          <div
            key={card.id}
            className="memory-card-container perspective-1000"
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Brush stroke animations around card */}
            <div className="absolute -inset-6 pointer-events-none">
              {hoveredCard === card.id && (
                <>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-brush-stroke-horizontal" />
                  <div
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-brush-stroke-horizontal"
                    style={{ animationDelay: '0.5s' }}
                  />
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-brush-stroke-vertical" />
                  <div
                    className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-brush-stroke-vertical"
                    style={{ animationDelay: '0.3s' }}
                  />
                </>
              )}
            </div>

            {/* 3D Flip Card */}
            <div
              className={`memory-card w-64 h-96 md:w-72 md:h-[28rem] cursor-pointer transition-all duration-700 transform-gpu ${
                hoveredCard === card.id ? 'hover-flip scale-105' : ''
              }`}
              onClick={() => setActiveCard(card)}
            >
              {/* Front Face */}
              <div className="card-face card-front absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-xl">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.cover})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 animate-star-glow pointer-events-none" />
                <div className="bg-black bg-opacity-60 text-center py-3 font-merienda text-2xl absolute bottom-0 w-full z-10">
                  <span className="bg-gradient-to-r from-rose-200 to-yellow-500 bg-clip-text text-transparent">
                    {card.title}
                  </span>
                </div>
              </div>

              {/* Back Face */}
              <div className="card-face card-back absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-xl rotate-y-180">
                {/* Much more opaque background for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/95 to-orange-100/95 backdrop-blur-sm" />
                {/* Subtle texture overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, #8b4513 1px, transparent 1px),
                                   radial-gradient(circle at 75% 75%, #d2691e 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                  }}
                />

                <div className="relative p-6 h-full flex flex-col justify-center text-center z-10">
                  <h3 className="text-2xl font-merienda mb-4 text-amber-800 drop-shadow-sm">
                    {card.title}
                  </h3>
                  <p className="text-gray-800 text-sm leading-relaxed font-serifBody italic mb-4">
                    {card.paragraph.slice(0, 120)}
                    ...
                  </p>
                  <div className="mt-4 px-3 py-2 bg-amber-200/80 text-amber-800 text-sm rounded-full mx-auto backdrop-blur-sm border border-amber-300/50 shadow-sm">
                    Click to view full memory
                  </div>
                </div>

                {/* Enhanced decorative elements */}
                <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-pulse shadow-sm" />
                <div
                  className="absolute bottom-8 left-6 w-3 h-3 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-70 animate-pulse shadow-sm"
                  style={{ animationDelay: '1s' }}
                />
                <div
                  className="absolute top-1/3 left-4 w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60 animate-pulse shadow-sm"
                  style={{ animationDelay: '2s' }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Modal with Paint Effects */}
      {activeCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto backdrop-blur-sm bg-black/60 font-body"
          onClick={() => setActiveCard(null)}
        >
          {/* Paint splash background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: '1s' }}
            />
            <div
              className="absolute top-1/2 left-1/2 w-40 h-40 bg-orange-400/5 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: '2s' }}
            />
          </div>

          {/* Modal Content with Paint Border */}
          <div
            className="relative max-w-6xl w-[90%] md:flex gap-6 animate-float-up scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Artistic paint border */}
            <div className="absolute -inset-4 pointer-events-none">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M10,15 Q20,10 30,18 T50,15 Q65,12 80,20 T95,18 L90,30 Q85,40 82,50 T85,70 Q88,80 85,90 T80,85 L65,88 Q50,85 35,88 T15,85 Q10,80 15,70 T10,50 Q12,40 8,30 T10,15 Z"
                  fill="none"
                  stroke="url(#modalBrushGradient)"
                  strokeWidth="3"
                  className="animate-pulse"
                />
                <defs>
                  <linearGradient
                    id="modalBrushGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
                    <stop offset="33%" stopColor="#3b82f6" stopOpacity="0.6" />
                    <stop offset="66%" stopColor="#ef4444" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="relative bg-black/40 backdrop-blur-xl rounded-xl p-6 w-full md:flex gap-6 feathered-border z-10 border border-yellow-400 shadow-[0_0_40px_10px_rgba(255,255,150,0.25)]">
              <button
                onClick={() => setActiveCard(null)}
                className="absolute top-3 right-3 text-white text-xl hover:text-yellow-400 z-20"
                type="button"
              >
                ✕
              </button>
              <img
                src={activeCard.photo}
                alt={activeCard.title}
                className="w-full md:w-1/2 rounded-lg shadow-xl object-cover border border-yellow-400 glow-card-img"
              />
              <div className="flex flex-col justify-center text-white mt-4 md:mt-0">
                <h3 className="text-3xl font-merienda mb-3">
                  <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                    {activeCard.title}
                  </span>
                </h3>
                <p className="text-lg leading-relaxed font-serifBody">
                  {activeCard.paragraph}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          .perspective-1000 {
            perspective: 1000px;
          }

          .memory-card {
            transform-style: preserve-3d;
            position: relative;
          }

          .card-face {
            backface-visibility: hidden;
          }

          .card-back {
            transform: rotateY(180deg);
          }

          .hover-flip {
            transform: rotateY(180deg);
          }

          .rotate-y-180 {
            transform: rotateY(180deg);
          }

          @keyframes brush-stroke-horizontal {
            0% {
              transform: scaleX(0);
              opacity: 0;
            }
            50% {
              transform: scaleX(1);
              opacity: 1;
            }
            100% {
              transform: scaleX(0);
              opacity: 0;
            }
          }

          @keyframes brush-stroke-vertical {
            0% {
              transform: scaleY(0);
              opacity: 0;
            }
            50% {
              transform: scaleY(1);
              opacity: 1;
            }
            100% {
              transform: scaleY(0);
              opacity: 0;
            }
          }

          .animate-brush-stroke-horizontal {
            animation: brush-stroke-horizontal 2s ease-in-out infinite;
          }

          .animate-brush-stroke-vertical {
            animation: brush-stroke-vertical 2s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}

export default MemoryCards;
