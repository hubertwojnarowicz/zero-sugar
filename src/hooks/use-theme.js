/* eslint-disable no-sequences */
import { useState, useEffect } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches) ||
      localStorage.theme === 'dark'
    ) {
      return setTheme('dark'), window.localStorage.setItem('theme', 'dark');
    } else {
      return setTheme('light'), window.localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const setColorMode = (value) => {
    setTheme(value);
    window.localStorage.setItem('theme', value);
  };
  return {
    theme,
    setColorMode,
  };
}
