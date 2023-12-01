const sharedConfig = require('tailwind-config/tailwind.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',
  // prefix ui lib classes to avoid conflicting with the app
  // prefix: '',
  presets: [sharedConfig],
  theme: {
    extend: {
      animation: {
        'ping-slow': 'ping 1.75s cubic-bezier(0, 0, 0.2, 1) infinite',
        'heart-beat': 'beat 0.4s cubic-bezier(0, 0, 0.2, 1) infinite',
        'dashed-line-vertical': 'dashed-line-vertical 1s cubic-bezier(0.5,0.5,0.2,1) forwards',
        'dashed-line-horizontal': 'dashed-line-horizontal 1s cubic-bezier(0.5,0.5,0.2,1) forwards',
        'glasses-up': 'glasses-up 0.5s cubic-bezier(0.5,0.5,0.2,1) forwards',
        'glasses-up-rtl': 'glasses-up-rtl 0.5s cubic-bezier(0.5,0.5,0.2,1) forwards',
        'card-gradient': 'card-gradient 8s linear infinite',
        'cpu-path': 'cpu-path 3.5s linear infinite',
      },
      backgroundImage: {
        'dashed-line-vertical':
          'linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0) 30%,rgb(var(--color-text-light)) 30%,rgb(var(--color-text-light)) 50%,rgb(var(--color-text-light)) 90%,rgb(var(--color-text-light)) 90%,rgba(255,255,255,0) 100%)',
        'dashed-line-horizontal':
          'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0) 30%,rgb(var(--color-text-light)) 30%,rgb(var(--color-text-light)) 50%,rgb(var(--color-text-light)) 90%,rgb(var(--color-text-light)) 90%,rgba(255,255,255,0) 100%)',
      },
      backgroundSize: {
        'dashed-line-vertical': '1px 12px',
        'dashed-line-horizontal': '12px 1px',
      },
      keyframes: {
        'card-gradient': {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
        'dashed-line-horizontal': {
          '0%': {
            width: 0,
            opacity: 1,
          },
          '20%': {
            opacity: 1,
          },
          '100%': {
            width: '100%',
            opacity: 0.3,
          },
        },
        'dashed-line-vertical': {
          '0%': {
            height: 0,
            opacity: 1,
          },
          '20%': {
            opacity: 1,
          },
          '100%': {
            height: '100%',
            opacity: 0.3,
          },
        },
        'cpu-path': {
          from: {
            strokeDashoffset: 0,
          },
          to: {
            strokeDashoffset: -100,
          },
        },
        'glasses-up': {
          '0%': {
            transform: 'translate(0,0) rotateX(0deg) scale(1)',
          },
          '100%': {
            transform: 'translate(9%, -4%) rotateX(40deg) scale(0.8)',
          },
        },
        'glasses-up-rtl': {
          '0%': {
            transform: 'translate(0,0) rotateX(0deg) scale(1)',
          },
          '100%': {
            transform: 'translate(9%, 4%) rotateX(40deg) scale(0.8)',
          },
        },
        beat: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
};
