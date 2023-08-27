const sharedConfig = require('tailwind-config/tailwind.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix ui lib classes to avoid conflicting with the app
  prefix: 'ui-',
  presets: [sharedConfig],
  theme: {
    extend: {
      animation: {
        'ping-slow': 'ping 1.75s cubic-bezier(0, 0, 0.2, 1) infinite',
        'heart-beat': 'beat 0.4s cubic-bezier(0, 0, 0.2, 1) infinite',
        'dashed-line-vertical': 'dashed-line-vertical 1s cubic-bezier(0.5,0.5,0.2,1) forwards',
        'dashed-line-horizontal': 'dashed-line-horizontal 1s cubic-bezier(0.5,0.5,0.2,1) forwards',
      },
      backgroundImage: {
        'dashed-line-vertical':
          'linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0) 30%,rgb(var(--color-text-light)) 30%,rgb(var(--color-text-light)) 50%,rgb(var(--color-text-light)) 90%,rgb(var(--color-text-light)) 90%,rgba(255,255,255,0) 100%)',
        'dashed-line-horizontal':
          'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0) 30%,rgb(var(--color-text-light)) 30%,rgb(var(--color-text-light)) 50%,rgb(var(--color-text-light)) 90%,rgb(var(--color-text-light)) 90%,rgba(255,255,255,0) 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'dashed-line-vertical': '1px 12px',
        'dashed-line-horizontal': '12px 1px',
      },
      keyframes: {
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
        beat: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
};
