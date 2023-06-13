'use client';
import React, { useEffect, useState } from 'react';
import { createCookie, readCookie } from '@/util/cookies';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTheme(readCookie('theme'));
    }
  }, []);

  if (!theme) return null;

  const switchTheme = () => {
    const targetTheme = document.documentElement?.classList?.contains('dark') ? 'light' : 'dark';
    document.documentElement?.classList.remove(targetTheme === 'dark' ? 'light' : 'dark');
    document.documentElement?.classList.add(targetTheme);
    createCookie('theme', targetTheme, 30);
  };

  return <button onClick={switchTheme}>{theme === 'dark' ? 'light' : 'dark'}</button>;
};

export default ThemeSwitcher;
