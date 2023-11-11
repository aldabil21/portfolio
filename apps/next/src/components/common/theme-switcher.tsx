'use client';
import { useEffect, useState } from 'react';
import { createCookie, readCookie } from 'utils/cookie';
import { motion } from 'framer-motion';

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState<string | null>('dark');
  const otherTheme = currentTheme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentTheme(readCookie('theme'));
    }
  }, []);

  const switchTheme = () => {
    const targetTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    document.documentElement.classList.remove(targetTheme === 'dark' ? 'light' : 'dark');
    document.documentElement.classList.add(targetTheme);
    createCookie('theme', targetTheme, 30);
    setCurrentTheme(targetTheme);

    // animate(scope.current, {
    //   rotateZ: [4, 0],
    //   transition: {
    //     type: 'spring',
    //     stiffness: 500,
    //     damping: 1,
    //   },
    // });
  };

  return (
    <div className='w-fulll absolute top-0 flex h-full justify-end px-2'>
      <motion.button
        aria-label={`Switch to ${otherTheme} theme`}
        className='relative w-12 origin-top'
        initial={{
          rotateZ: 0,
        }}
        onClick={switchTheme}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 1,
        }}
        type='button'
        whileHover={{
          // top: -10,
          rotateZ: [2, 0],
        }}
        whileTap={{
          rotateZ: [2, 0],
        }}
      >
        <div className='absolute left-1/2 top-0 flex h-full w-full -translate-x-1/2 justify-center'>
          <div className='bg-secondary-dark dark:bg-secondary absolute top-0 h-[42%] w-px' />
          <div className='absolute top-[43%] h-5 w-full rounded-full bg-gray-300 dark:bg-gray-800' />
          <div className='absolute top-[46%] h-5 w-5 rounded-full bg-gray-400 shadow-yellow-200/50 dark:bg-yellow-200 dark:shadow-xl' />
          <div className='absolute top-[48%] h-20 w-20 rounded-t-full bg-gradient-to-b from-yellow-200/20 via-transparent to-transparent' />
          <div className='bg-secondary-dark dark:bg-secondary absolute top-[42%] h-4 w-full rounded-t-xl' />
        </div>
      </motion.button>
    </div>
  );
};

export default ThemeSwitcher;
