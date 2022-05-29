import { useContext } from 'react';
import { Sun, Moon } from 'react-feather';
import styledComponents from 'styled-components';
import ThemeContext from '../../context/theme';
import { COLORS } from '../../Theme';

export default function ThemeSwitcher() {
  const { theme, setColorMode } = useContext(ThemeContext);

  console.log(theme);
  console.log(COLORS);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setColorMode('light');
    } else {
      setColorMode('dark');
    }
  };

  return (
    <ThemeWrapper>
      {theme === 'dark' ? (
        <ThemeButton onClick={toggleTheme}>
          <Moon color="#ffffff" fill="#ffffff" size="26" />
        </ThemeButton>
      ) : (
        <ThemeButton onClick={toggleTheme}>
          <Sun size="26" />
        </ThemeButton>
      )}
    </ThemeWrapper>
  );
}

const ThemeWrapper = styledComponents.div`
  display: flex;
  align-items: center
`;

const ThemeButton = styledComponents.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
  
`;
