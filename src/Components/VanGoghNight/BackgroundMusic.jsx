/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useRef, useState } from 'react';
import musicFile from './assets/background-music.mp3';

function BackgroundMusic() {
  const audioRef = useRef(null);
  const [enabled, setEnabled] = useState(false); // Off by default

  useEffect(() => {
    const onFirstInteraction = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.3;
        audioRef.current.play().catch(console.warn);
        setEnabled(true);
      }
      document.removeEventListener('click', onFirstInteraction);
      document.removeEventListener('scroll', onFirstInteraction);
    };

    document.addEventListener('click', onFirstInteraction);
    document.addEventListener('scroll', onFirstInteraction);

    return () => {
      document.removeEventListener('click', onFirstInteraction);
      document.removeEventListener('scroll', onFirstInteraction);
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (enabled) {
      audioRef.current.pause();
      setEnabled(false);
    } else {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(console.warn);
      setEnabled(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={musicFile} loop preload="auto" />
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 px-4 py-2 rounded-full text-sm shadow-lg bg-black/60 text-white backdrop-blur hover:bg-yellow-400 hover:text-black transition"
      >
        {enabled ? '🎵 Music On' : '🔇 Music Off'}
      </button>
    </>
  );
}

export default BackgroundMusic;
