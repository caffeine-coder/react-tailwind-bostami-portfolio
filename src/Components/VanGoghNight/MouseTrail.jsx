/* eslint-disable no-use-before-define */
import { useEffect } from 'react';

function MouseTrail() {
  useEffect(() => {
    let animationId;

    const createTrailElement = (x, y) => {
      const effects = ['star', 'paintDrop', 'sunflowerPetal', 'swirl'];
      const effectType = effects[Math.floor(Math.random() * effects.length)];
      const id = `trail-${Date.now()}-${Math.random()}`;

      let element;

      switch (effectType) {
        case 'paintDrop':
          element = createPaintDrop(id, x, y);
          break;
        case 'sunflowerPetal':
          element = createSunflowerPetal(id, x, y);
          break;
        case 'swirl':
          element = createSwirl(id, x, y);
          break;
        default:
          element = createStar(id, x, y);
      }

      document.body.appendChild(element);

      // Animate and remove
      setTimeout(() => {
        if (element && element.parentNode) {
          element.style.opacity = '0';
          element.style.transform += ' scale(2)';
          setTimeout(() => {
            if (element && element.parentNode) {
              element.remove();
            }
          }, 800);
        }
      }, 50);
    };

    const createStar = (id, x, y) => {
      const star = document.createElement('div');
      star.id = id;
      star.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" 
             viewBox="0 0 24 24"
             width="14" height="14"
             fill="#FFD700"
        >
          <path d="M12 2l2.39 7.45H22l-5.8 4.21L18.19 22 12 17.27 5.81 22l1.99-8.34L2 9.45h7.61z"/>
        </svg>
      `;
      star.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        transform: translate(-50%, -50%) scale(1);
        pointer-events: none;
        z-index: 50;
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        filter: drop-shadow(0 0 4px #fffacb);
      `;
      return star;
    };

    const createPaintDrop = (id, x, y) => {
      const colors = ['#fbbf24', '#3b82f6', '#ef4444', '#f59e0b', '#8b5cf6'];
      const color = colors[Math.floor(Math.random() * colors.length)];

      const drop = document.createElement('div');
      drop.id = id;
      drop.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 8px;
        height: 12px;
        background: ${color};
        border-radius: 50% 50% 50% 0;
        transform: translate(-50%, -50%) rotate(-45deg);
        pointer-events: none;
        z-index: 50;
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        filter: blur(0.5px) drop-shadow(0 0 6px ${color});
        opacity: 0.8;
      `;

      // Add paint splatter effect
      setTimeout(() => {
        if (drop.parentNode) {
          drop.style.borderRadius = '50%';
          drop.style.width = '12px';
          drop.style.height = '6px';
          drop.style.transform += ' scale(1.5)';
        }
      }, 200);

      return drop;
    };

    const createSunflowerPetal = (id, x, y) => {
      const petal = document.createElement('div');
      petal.id = id;
      petal.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C13 8 16 11 22 12C16 13 13 16 12 22C11 16 8 13 2 12C8 11 11 8 12 2Z" 
                fill="url(#petalGradient)" stroke="#f59e0b" stroke-width="0.5"/>
          <defs>
            <radialGradient id="petalGradient" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stop-color="#fbbf24"/>
              <stop offset="70%" stop-color="#f59e0b"/>
              <stop offset="100%" stop-color="#d97706"/>
            </radialGradient>
          </defs>
        </svg>
      `;
      petal.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        transform: translate(-50%, -50%) rotate(${Math.random() * 360}deg);
        pointer-events: none;
        z-index: 50;
        transition: opacity 1s ease-out, transform 1s ease-out;
        filter: drop-shadow(0 0 4px rgba(251, 191, 36, 0.6));
        opacity: 0.9;
      `;

      // Add floating animation
      const floatAnimation = [
        { transform: `${petal.style.transform} translateY(0px)`, opacity: 0.9 },
        {
          transform: `${petal.style.transform} translateY(-20px) rotate(180deg)`,
          opacity: 0.5,
        },
        {
          transform: `${petal.style.transform} translateY(-10px) rotate(360deg)`,
          opacity: 0.2,
        },
      ];

      if (petal.animate) {
        petal.animate(floatAnimation, {
          duration: 2000,
          easing: 'ease-out',
        });
      }

      return petal;
    };

    const createSwirl = (id, x, y) => {
      const swirl = document.createElement('div');
      swirl.id = id;
      swirl.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C15 4 18 7 20 12C18 15 15 18 12 20C9 18 6 15 4 12C6 9 9 6 12 2Z" 
                fill="none" 
                stroke="url(#swirlGradient)" 
                stroke-width="2" 
                stroke-linecap="round"/>
          <circle cx="12" cy="12" r="2" fill="url(#swirlCenter)"/>
          <defs>
            <linearGradient id="swirlGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#6366f1"/>
              <stop offset="50%" stop-color="#8b5cf6"/>
              <stop offset="100%" stop-color="#a855f7"/>
            </linearGradient>
            <radialGradient id="swirlCenter" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stop-color="#fbbf24"/>
              <stop offset="100%" stop-color="#f59e0b"/>
            </radialGradient>
          </defs>
        </svg>
      `;
      swirl.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        transform: translate(-50%, -50%) rotate(0deg);
        pointer-events: none;
        z-index: 50;
        transition: opacity 1.2s ease-out, transform 1.2s ease-out;
        filter: drop-shadow(0 0 6px rgba(139, 92, 246, 0.4));
        opacity: 0.7;
      `;

      // Add swirling animation
      let rotation = 0;
      const swirlInterval = setInterval(() => {
        if (swirl.parentNode) {
          rotation += 45;
          swirl.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(${1 + rotation / 360})`;
        } else {
          clearInterval(swirlInterval);
        }
      }, 100);

      return swirl;
    };

    const handleMouseMove = (e) => {
      // Throttle trail creation
      if (Math.random() > 0.7) {
        // Only create trail 30% of the time for performance
        createTrailElement(e.clientX, e.clientY);
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0 && Math.random() > 0.7) {
        const touch = e.touches[0];
        createTrailElement(touch.clientX, touch.clientY);
      }
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return null;
}

export default MouseTrail;
