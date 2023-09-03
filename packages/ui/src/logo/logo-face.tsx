import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { AngryEyes } from './angry';
import { DuhEyes } from './duh';
import { CryingEyes } from './crying';
import { UpEyes } from './up';
import { WinkyEye } from './winky';
import { Halfeye } from './halfeye';
import { BoredEyes } from './bored';
import { CuteEyes } from './cute';
import ShockedEyes from './shocked';
import DizzyEyes from './dizzy';

const STOPS_DARK = [
  { id: 1, from: '-40%', to: '25%', color: 'white' },
  { id: 2, from: '-20%', to: '115%', color: '#aaaaaa' },
  { id: 3, from: '-5%', to: '130%', color: '#aaaaaa' },
  { id: 4, from: '10%', to: '140%', color: '#aaaaaa' },
  { id: 5, from: '25%', to: '200%', color: 'white' },
];

const STOPS = [
  { id: 1, from: '-40%', to: '25%', color: 'black' },
  { id: 2, from: '-20%', to: '115%', color: '#333333' },
  { id: 3, from: '-5%', to: '130%', color: '#333333' },
  { id: 4, from: '10%', to: '140%', color: '#333333' },
  { id: 5, from: '25%', to: '200%', color: 'black' },
];

const ANIMATION_PROPS = {
  transition: {
    duration: 0.1,
  },
  variants: {
    up: {
      y: '-30%',
      rotateX: 60,
      scale: 0.8,
    },
  },
};

const EYES_LENGTH = 9;
const randomEye = () => Math.floor(Math.random() * EYES_LENGTH);

export const LogoFace = ({ className = '' }) => {
  const [eye, setEye] = useState(0);

  const eyeComponents = useMemo(() => {
    switch (eye) {
      case 1:
        return <DuhEyes />;
      case 2:
        return <CryingEyes />;
      case 3:
        return <UpEyes />;
      case 4:
        return <WinkyEye />;
      case 5:
        return <Halfeye />;
      case 6:
        return <BoredEyes />;
      case 7:
        return <CuteEyes />;
      case 8:
        return <ShockedEyes />;
      case 9:
        return <DizzyEyes />;
      default:
        return <AngryEyes />;
    }
  }, [eye]);

  return (
    <motion.svg
      className={className}
      fill='none'
      height='92'
      onHoverEnd={() => {
        setEye((prev) => {
          const newRandom = randomEye();
          return newRandom === prev ? newRandom + 1 : newRandom;
        });
      }}
      viewBox='0 0 62 82'
      whileHover='up'
      width='72'
      xmlns='http://www.w3.org/2000/svg'
    >
      {/* Eyes */}
      <AnimatePresence>
        <motion.g animate={{ opacity: 1 }} exit={{ opacity: 0 }} initial={{ opacity: 0 }} key={eye}>
          {eyeComponents}
        </motion.g>
      </AnimatePresence>

      <path
        className='stroke-black dark:stroke-white'
        d='M3.24284 22.3228C6.05248 12.5547 20.9242 1 30.5654 1C40.2066 1 56.0676 13.2694 58.3484 22.3228C60.6291 31.3762 60.482 36.3454 58.3484 47.0326C56.2148 57.7197 46.0944 81 30.7588 81C15.4233 81 5.15573 59.4896 2.50713 47.0326C0.350613 36.89 0.433198 32.0909 3.24284 22.3228Z'
        strokeWidth='2'
      />
      <motion.path
        className='dark:opacity-0'
        d='M30.5297 36.4074C31.1854 36.4074 32.3576 36.4989 32.3576 37.7707C32.3906 39.1123 32.7078 40.621 33.3108 42.3135C35.6021 48.7441 40.0001 50.5 45.5001 50.5C47.6504 50.4262 50.1819 50.0061 52.0001 48.5C53.668 47.1184 54.8944 45.2486 56.0183 41.1791C56.4023 39.7889 56.6091 38.5299 56.6387 37.3935C56.7087 36.5515 57.6021 36.0803 58.2834 35.8414C58.7491 35.6783 59.0593 35.2376 59.0593 34.7442V32.6377C59.0593 32.1123 58.721 31.6463 58.221 31.4846C55.9859 30.7627 51.9028 29.5648 44.4656 29.7611C38.4253 29.9204 32.5727 30.9703 30.5298 30.9703C28.4869 30.9703 22.6343 29.9206 16.5937 29.7611C9.15652 29.5648 5.07372 30.7627 2.83844 31.4846C2.33844 31.6461 2.00012 32.1121 2.00012 32.6377V34.7442C2.00012 35.2376 2.31038 35.6781 2.77611 35.8414C3.45723 36.0802 4.35063 36.5515 4.42078 37.3935C4.45021 38.5299 4.65721 39.7889 5.04106 41.1791C6.16514 45.2486 7.33234 47.1184 9.00012 48.5C10.8183 50.0061 13.3498 50.4262 15.5001 50.5C19.5001 50.5 25.0001 48.5 27.7485 42.3135C28.3514 40.6211 28.6686 39.1123 28.7017 37.7707C28.7017 36.4987 29.874 36.4074 30.5297 36.4074Z'
        fill='url(#glasses_bg)'
        {...ANIMATION_PROPS}
      />
      <motion.path
        className='opacity-0 dark:opacity-100'
        d='M30.5297 36.4074C31.1854 36.4074 32.3576 36.4989 32.3576 37.7707C32.3906 39.1123 32.7078 40.621 33.3108 42.3135C35.6021 48.7441 40.0001 50.5 45.5001 50.5C47.6504 50.4262 50.1819 50.0061 52.0001 48.5C53.668 47.1184 54.8944 45.2486 56.0183 41.1791C56.4023 39.7889 56.6091 38.5299 56.6387 37.3935C56.7087 36.5515 57.6021 36.0803 58.2834 35.8414C58.7491 35.6783 59.0593 35.2376 59.0593 34.7442V32.6377C59.0593 32.1123 58.721 31.6463 58.221 31.4846C55.9859 30.7627 51.9028 29.5648 44.4656 29.7611C38.4253 29.9204 32.5727 30.9703 30.5298 30.9703C28.4869 30.9703 22.6343 29.9206 16.5937 29.7611C9.15652 29.5648 5.07372 30.7627 2.83844 31.4846C2.33844 31.6461 2.00012 32.1121 2.00012 32.6377V34.7442C2.00012 35.2376 2.31038 35.6781 2.77611 35.8414C3.45723 36.0802 4.35063 36.5515 4.42078 37.3935C4.45021 38.5299 4.65721 39.7889 5.04106 41.1791C6.16514 45.2486 7.33234 47.1184 9.00012 48.5C10.8183 50.0061 13.3498 50.4262 15.5001 50.5C19.5001 50.5 25.0001 48.5 27.7485 42.3135C28.3514 40.6211 28.6686 39.1123 28.7017 37.7707C28.7017 36.4987 29.874 36.4074 30.5297 36.4074Z'
        fill='url(#glasses_bg_dark)'
        {...ANIMATION_PROPS}
      />
      <path
        className='fill-black dark:fill-white'
        d='M37.1954 66.7701C37.1954 66.7701 35.542 71 30.6667 71C25.7913 71 20 63 20 63C20 63 25.7913 69.6339 30.6667 69.6339C35.542 69.6339 37.1954 66.7701 37.1954 66.7701Z'
      />
      <defs>
        <linearGradient
          className='block dark:hidden'
          gradientUnits='userSpaceOnUse'
          id='glasses_bg'
          x1='0.5'
          x2='56.5'
          y1='25'
          y2='52'
        >
          {STOPS.map(({ id, from, to, color }) => (
            <motion.stop
              animate={{ offset: to }}
              initial={{ offset: from }}
              key={id}
              stopColor={color}
              transition={{
                repeat: Infinity,
                duration: 0.6,
                repeatDelay: 3,
              }}
            />
          ))}
        </linearGradient>
        <linearGradient
          className='hidden dark:block'
          gradientUnits='userSpaceOnUse'
          id='glasses_bg_dark'
          x1='0.5'
          x2='56.5'
          y1='25'
          y2='52'
        >
          {STOPS_DARK.map(({ id, from, to, color }) => (
            <motion.stop
              animate={{ offset: to }}
              initial={{ offset: from }}
              key={id}
              stopColor={color}
              transition={{
                repeat: Infinity,
                duration: 0.6,
                repeatDelay: 3,
              }}
            />
          ))}
        </linearGradient>
      </defs>
    </motion.svg>
  );
};
