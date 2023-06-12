/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: { center: true },
      fontFamily: {
        cairo: ['var(--font-cairo)'].concat(defaultTheme.fontFamily.sans),
      },
      colors: {
        primary: {
          DEFAULT: '#CC0816',
          light: '#EF0D1D',
          dark: '#C20D19',
          contrast: '#ffffff',
        },
        secondary: {
          DEFAULT: '#c3a845',
          light: '#cdb046',
          dark: '#a58c33',
          contrast: '#080808',
        },
        tertiary: {
          DEFAULT: '#dcbc9a',
          light: '#d4c062',
          dark: '#ba9268',
          contrast: '#080808',
        },
        error: {
          DEFAULT: '#e53e3e',
          light: '#ff5050',
          dark: '#dc3737',
          contrast: '#f8f8f8',
        },
        success: {
          DEFAULT: '#2d983e',
          light: '#35aa48',
          dark: '#258735',
          contrast: '#f8f8f8',
        },
        text: {
          DEFAULT: '#212529',
          light: '#404040',
          dark: '#202020',
        },
        body: {
          DEFAULT: '#ffffff', // '#1E1E1E',
          red: '#EB1E28',
        },
      },
      animation: {
        'ping-slow': 'ping 1.75s cubic-bezier(0, 0, 0.2, 1) infinite',
        'heart-beat': 'beat 0.4s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        beat: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
