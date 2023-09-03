const defaultTheme = require('tailwindcss/defaultTheme');
const uiConfig = require('../../packages/ui/tailwind.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [uiConfig],
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}', '../../packages/ui/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['var(--font-cairo)'].concat(defaultTheme.fontFamily.sans),
      },
    },
  },
};
