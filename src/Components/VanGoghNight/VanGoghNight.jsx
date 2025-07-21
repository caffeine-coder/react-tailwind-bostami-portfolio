/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
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
import MemoryCards from './MemoryCards';
import LettersToTheStars from './LettersToTheStars';
import CafeTerraceNight from './CafeTerraceNight';
import WhatVanGoghWouldSay from './WhatVanGoghWouldSay';
import UntilStarsFadeAway from './UntilStarsFadeAway';

const scenes = [
  {
    id: 1,
    title: 'Stepping into Brushstrokes',
    content:
      'We entered, The lights brightnened, or she brightnened it more?\nCanvas spilled from walls to floor.\nShe gasped not at Van Gogh,\nbut at how the sky lit up in her eyes.',
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
      'I looked up at the swirls,\nthen sideways at her hand in mine.\nThis night wasn’t projected \nit was painted into our memories.',
    image: scene3,
    align: 'left',
  },
];

const CORRECT_PASSWORD = 'starlight';
const IS_DEV_MODE = false; // set to false to re-enable password protection

function VanGoghNight() {
  const [started, setStarted] = useState(false);
  const [fadingOverlay, setFadingOverlay] = useState(false);
  const [showScrollCue, setShowScrollCue] = useState(true);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [musicOn, setMusicOn] = useState(true);
  const audioRef = useRef(null);

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const startExperience = () => {
    if (IS_DEV_MODE) {
      setFadingOverlay(true);
      setTimeout(() => {
        setStarted(true);
        if (audioRef.current && musicOn) {
          audioRef.current.volume = 0.3;
          audioRef.current.play().catch(() => {});
        }
      }, 1000);
    } else {
      setShowPasswordModal(true);
    }
  };

  const handlePasswordSubmit = () => {
    if (password === CORRECT_PASSWORD) {
      setFadingOverlay(true);
      setError('');
      setShowPasswordModal(false);

      setTimeout(() => {
        setStarted(true);
        if (audioRef.current && musicOn) {
          audioRef.current.volume = 0.3;
          audioRef.current.play().catch(() => {});
        }
      }, 1000);
    } else {
      setError('Incorrect password. Try again.');
    }
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
    <div className="relative font-body bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 z-10 pointer-events-none">
        <Starfield count={80} />
      </div>
      <audio ref={audioRef} src={musicFile} loop preload="auto" />

      {/* Background */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${starryBg})`,
          filter: 'brightness(0.4) blur(2px)',
        }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" />
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

      {/* Start Overlay */}
      {!started && !showPasswordModal && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-center transition-opacity duration-1000 ${
            fadingOverlay ? 'animate-fade-out' : 'animate-fade-in'
          }`}
        >
          <p className="text-xl md:text-3xl text-gray-200 px-4 max-w-xl leading-relaxed bg-gradient-to-r from-red-400 to-rose-400 via-yellow-300 bg-clip-text text-transparent font-merienda animate-quote-soft-dissolve">
            “There is nothing more truly artistic than to love people.” —
            <span className="ml-2 bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-200 bg-clip-text text-transparent">
              Van Gogh
            </span>
          </p>
          <button
            onClick={startExperience}
            className="mt-8 px-6 py-3 text-sm bg-gradient-to-r from-sky-300 via-indigo-400 to-amber-200 rounded-full bg-white text-gray-800 hover:bg-yellow-400 transition font-merienda"
          >
            Start Experience
          </button>
        </div>
      )}

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur font-body">
          <div className="bg-white text-black rounded-lg p-6 max-w-md w-full shadow-xl">
            <h2 className="text-xl font-bold mb-4 font-heading">
              Enter Password
            </h2>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mb-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              onKeyDown={(e) => {
                if (e.key === 'Enter') handlePasswordSubmit();
              }}
            />
            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowPasswordModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handlePasswordSubmit}
                className="px-4 py-2 bg-yellow-400 rounded hover:bg-yellow-500"
              >
                Enter
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero + Scenes + Cards */}
      {started && (
        <>
          <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-delighter drop-shadow-lg text-center">
              A Night with{' '}
              <span className="inline-block bg-gradient-to-r from-sky-300 via-indigo-400 to-amber-200 bg-clip-text text-transparent">
                Van Gogh
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-2xl bg-gradient-to-r from-rose-300 via-red-400 to-amber-200 bg-clip-text text-transparent max-w-3xl leading-relaxed drop-shadow font-merienda">
              A night stitched in starlight, memory, and her silhouette against
              a painted dream.
            </p>
            {showScrollCue && (
              <div className="mt-12 flex flex-col items-center gap-2 animate-bounce-slow transition-opacity duration-500 opacity-100">
                {[...Array(3)].map((_, idx) => (
                  <svg
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

          <MemoryCards />
          <LettersToTheStars />
          <CafeTerraceNight />
          <WhatVanGoghWouldSay />
          <UntilStarsFadeAway />

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
