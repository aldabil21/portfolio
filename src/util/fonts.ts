import localFont from 'next/font/local';

export const cairoFont = localFont({
  src: [
    {
      path: '../../public/fonts/cairo/regular.ttf',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: '../../public/fonts/cairo/bold.ttf',
      weight: 'bold',
      style: 'bold',
    },
  ],
  display: 'swap',
  variable: '--font-cairo',
});
