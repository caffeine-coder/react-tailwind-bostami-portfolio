import { useEffect } from 'react';

function MouseTrail() {
  useEffect(() => {
    const trail = [];

    const createStar = (x, y) => {
      const id = `star-${Date.now()}`;
      const starSVG = `
        <svg id="${id}" xmlns="http://www.w3.org/2000/svg" 
             class="fixed z-50 pointer-events-none star-trail"
             viewBox="0 0 24 24"
             width="14" height="14"
             fill="#FFD700"
             style="
               left: ${x}px;
               top: ${y}px;
               transform: translate(-50%, -50%) scale(1);
               position: fixed;
               transition: opacity 0.8s ease-out, transform 0.8s ease-out;
               filter: drop-shadow(0 0 4px #fffacb);
             "
        >
          <path d="M12 2l2.39 7.45H22l-5.8 4.21L18.19 22 12 17.27 5.81 22l1.99-8.34L2 9.45h7.61z"/>
        </svg>
      `;

      document.body.insertAdjacentHTML('beforeend', starSVG);
      const starEl = document.getElementById(id);
      trail.push(starEl);

      setTimeout(() => {
        if (starEl) {
          starEl.style.opacity = '0';
          starEl.style.transform = 'translate(-50%, -50%) scale(2)';
          setTimeout(() => starEl.remove(), 800);
        }
      }, 10);
    };

    const move = (e) => createStar(e.clientX, e.clientY);
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return null;
}

export default MouseTrail;
