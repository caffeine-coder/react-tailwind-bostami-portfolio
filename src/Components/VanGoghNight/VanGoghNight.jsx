/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React, { useRef, useState, useEffect } from 'react';
import Scene from './Scene';
import starryBg from './assets/starry-bg.jpg';
import scene1 from './assets/scene1.jpg';
import scene2 from './assets/scene2.jpg';
import scene3 from './assets/scene3.jpg';
import MouseTrail from './MouseTrail';
import musicFile from './assets/background-music.mp3';
import Starfield from './Starfield';

const scenes = [
  {
    id: 1,
    title: 'Stepping into Brushstrokes',
    content:
      'The lights dimmed.\nCanvas spilled from walls to floor.\nShe gasped — not at Van Gogh,\nbut at how the sky lit up in her eyes.',
    image: scene1,
    align: 'left',
  },
  {
    id: 2,
    title: 'The Irises Glanced Back',
    content:
      'Paintings bloomed into breath.\nWe didn’t speak.\nThe silence was louder than any museum audio guide.',
    image: scene2,
    align: 'right',
  },
  {
    id: 3,
    title: 'Starry Night Held Us',
    content:
      'I looked up at the swirls,\nthen sideways at her hand in mine.\nThis night wasn’t projected —\nit was painted into our memories.',
    image: scene3,
    align: 'left',
  },
];

function VanGoghNight() {
  const [started, setStarted] = useState(false);
  const [fadingOverlay, setFadingOverlay] = useState(false);
  const audioRef = useRef(null);
  const [musicOn, setMusicOn] = useState(true);
  const [showScrollCue, setShowScrollCue] = useState(true);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const startExperience = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {
        // eslint-disable-next-line no-console
        console.warn('Autoplay blocked');
      });
    }

    setFadingOverlay(true);

    // Give time for animation to play before hiding
    setTimeout(() => {
      setStarted(true);
    }, 1000); // match animation duration
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (musicOn) {
      audioRef.current.pause();
      setMusicOn(false);
    } else {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {});
      setMusicOn(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setShowScrollCue(y <= 50);
      setShowScrollToTop(y > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative font-poppins bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 z-10 pointer-events-none">
        <Starfield count={80} />
      </div>
      <audio ref={audioRef} src={musicFile} loop preload="auto" />

      {/* Background Image + Gradient */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${starryBg})`,
          filter: 'brightness(0.4) blur(2px)',
        }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" />

      {/* Mouse Trail */}
      <MouseTrail />

      {/* Music Toggle */}
      {started && (
        <button
          onClick={toggleMusic}
          className="fixed top-6 right-6 z-50 px-4 py-2 rounded-full text-sm shadow-lg bg-black/60 text-white backdrop-blur hover:bg-yellow-400 hover:text-black transition"
        >
          {musicOn ? '🎵 Music On' : '🔇 Music Off'}
        </button>
      )}

      {/* Start Overlay with fade-out */}
      {!started && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-center transition-opacity duration-1000 ${
            fadingOverlay ? 'animate-fade-out' : 'animate-fade-in'
          }`}
        >
          <p className="text-xl md:text-3xl text-gray-200 px-4 max-w-xl leading-relaxed font-light animate-quote-soft-dissolve">
            “There is nothing more truly artistic than to love people.” — Van
            Gogh
          </p>
          <button
            onClick={startExperience}
            className="mt-8 px-6 py-3 text-sm rounded-full bg-white text-gray-800 hover:bg-yellow-400 transition"
          >
            Start Experience
          </button>
        </div>
      )}

      {/* Hero Section with fade-in */}
      {started && (
        <>
          <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg">
              A Night with Van Gogh
            </h1>
            <p className="mt-6 text-lg md:text-2xl text-gray-300 max-w-3xl leading-relaxed drop-shadow">
              A night stitched in starlight, memory, and her silhouette against
              a painted dream.
            </p>
            {showScrollCue && (
              <div className="mt-12 flex flex-col items-center gap-2 animate-bounce-slow transition-opacity duration-500 opacity-100">
                {[...Array(3)].map((_, idx) => (
                  <svg
                    // eslint-disable-next-line react/no-array-index-key
                    key={idx}
                    className="w-6 h-6 text-white opacity-70"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                ))}
              </div>
            )}
          </section>

          <div className="relative z-10">
            {scenes.map((scene) => (
              <Scene key={scene.id} {...scene} />
            ))}
          </div>
          {showScrollToTop && (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-6 left-6 z-50 px-4 py-2 rounded-full text-sm shadow-lg bg-black/60 text-white backdrop-blur hover:bg-yellow-400 hover:text-black transition-opacity duration-500 opacity-100"
            >
              ↑ Back to Top
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default VanGoghNight;
