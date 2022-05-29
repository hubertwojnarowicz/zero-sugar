import { useContext } from 'react';
import ThemeContext from './context/theme';
import { ThemeProvider } from 'styled-components';

export const COLORS = {
  lightColors: {
    bodyColor: '#ffffff',
    textColor: '#6f6f6f',
    hover: '#000000',
    threeD: '#121835',
  },
  darkColors: {
    bodyColor: '#0e141b',
    textColor: '#ffffff',
    hover: '#ffffff',
    threeD: '#ffffff',
  },
};

export const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
};

export default function Theme({ children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider
      theme={theme === 'dark' ? COLORS.darkColors : COLORS.lightColors}
    >
      {children}
    </ThemeProvider>
  );
}
