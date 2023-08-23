const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

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
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value,
            };
          },
        },
        {
          values: theme('transitionDelay'),
        }
      );
    }),
  ],
};
