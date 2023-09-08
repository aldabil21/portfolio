'use client';
import { useEffect, useState } from 'react';
import { createCookie, readCookie } from 'utils/cookie';

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
  };

  return (
    <div className='absolute top-0'>
      <button aria-label={`Switch to ${otherTheme} theme`} onClick={switchTheme} type='button'>
        {otherTheme}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
