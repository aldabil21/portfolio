const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: { center: true },
      fontFamily: {
        cairo: ['var(--font-cairo)'].concat(defaultTheme.fontFamily.sans),
      },
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          light: 'rgb(var(--color-primary-light) / <alpha-value>)',
          dark: 'rgb(var(--color-primary-dark) / <alpha-value>)',
          contrast: 'rgb(var(--color-primary-contrast) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary) / <alpha-value>)',
          light: 'rgb(var(--color-secondary-light) / <alpha-value>)',
          dark: 'rgb(var(--color-secondary-dark) / <alpha-value>)',
          contrast: 'rgb(var(--color-secondary-contrast) / <alpha-value>)',
        },
        tertiary: {
          DEFAULT: 'rgb(var(--color-tertiary) / <alpha-value>)',
          light: 'rgb(var(--color-tertiary-light) / <alpha-value>)',
          dark: 'rgb(var(--color-tertiary-dark) / <alpha-value>)',
          contrast: 'rgb(var(--color-tertiary-contrast) / <alpha-value>)',
        },
        error: {
          DEFAULT: 'rgb(var(--color-error) / <alpha-value>)',
          light: 'rgb(var(--color-error-light) / <alpha-value>)',
          dark: 'rgb(var(--color-error-dark) / <alpha-value>)',
          contrast: 'rgb(var(--color-error-contrast) / <alpha-value>)',
        },
        success: {
          DEFAULT: 'rgb(var(--color-success) / <alpha-value>)',
          light: 'rgb(var(--color-success-light) / <alpha-value>)',
          dark: 'rgb(var(--color-success-dark) / <alpha-value>)',
          contrast: 'rgb(var(--color-success-contrast) / <alpha-value>)',
        },
        text: {
          DEFAULT: 'rgb(var(--color-text) / <alpha-value>)',
          light: 'rgb(var(--color-text-light) / <alpha-value>)',
          dark: 'rgb(var(--color-text-dark) / <alpha-value>)',
        },
        body: {
          DEFAULT: 'rgb(var(--color-body) / <alpha-value>)',
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
