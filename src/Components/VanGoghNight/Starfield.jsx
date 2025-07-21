/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

function generateStars(count) {
  return Array.from({ length: count }, () => ({
    id: crypto.randomUUID(),
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    size: Math.random() * 3 + 1,
  }));
}

function Starfield({ count = 60 }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars(generateStars(count));
  }, [count]);

  return (
    <div className="absolute inset-0 w-full h-full">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white opacity-80 animate-star-bloom"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
            filter: 'blur(0.6px)',
          }}
        />
      ))}
    </div>
  );
}

export default Starfield;
