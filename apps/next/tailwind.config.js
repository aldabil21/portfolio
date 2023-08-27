const defaultTheme = require('tailwindcss/defaultTheme');
const sharedConfig = require('tailwind-config/tailwind.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedConfig],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        cairo: ['var(--font-cairo)'].concat(defaultTheme.fontFamily.sans),
      },
    },
  },
};
