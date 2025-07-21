/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'quote-soft-dissolve': {
          '0%': { opacity: 0, transform: 'scale(0.96)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        'star-bloom': {
          '0%': {
            opacity: 0.1,
            transform: 'scale(0.8)',
            filter: 'blur(1px)',
          },
          '50%': {
            opacity: 1,
            transform: 'scale(1)',
            filter: 'blur(0.2px)',
          },
          '100%': {
            opacity: 0.1,
            transform: 'scale(0.8)',
            filter: 'blur(1px)',
          },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out forwards',
        'fade-out': 'fade-out 1s ease-out forwards',
        'quote-soft-dissolve': 'quote-soft-dissolve 2s ease-out forwards',
        'star-bloom': 'star-bloom 4s ease-in-out infinite',
        'bounce-slow': 'bounce-slow 2s infinite ease-in-out',
      },
    },
  },
  plugins: [],
};
