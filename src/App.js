import React, { useEffect } from 'react';
import TokenContext from './context/token';
import GlobalStyles from './GlobalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ROUTES from './routes/routes';
import ThemeContext from './context/theme';
import useTheme from './hooks/use-theme';
import Home from './pages/Home';
import Photos from './pages/Photos';
import Theme from './Theme';
import { SkeletonTheme } from 'react-loading-skeleton';
import PhotoDialog from './components/MainSection/PhotoDialog';

function App() {
  const token = 'yvvzKFOYjSxZZ62D8uqs7P_skXPfre937dzUxBQINj0';
  const { theme, setColorMode } = useTheme();
  return (
    <ThemeContext.Provider value={{ theme, setColorMode }}>
      <TokenContext.Provider value={token}>
        <Theme>
          <SkeletonTheme baseColor="#A3B8C2" highlightColor="#F0F3F5">
            <GlobalStyles />
            <Router>
              <Routes>
                <Route path={ROUTES.HOME} element={<Home />}>
                  <Route path={ROUTES.PHOTOS} element={<PhotoDialog />} />
                </Route>
              </Routes>
            </Router>
          </SkeletonTheme>
        </Theme>
      </TokenContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

// Unsplash oauth 2.0 with grant_type authorization code.
// first of all you need to register your app, enable interesting scopes and add localhost:3000 as a redirect_uri.
// when you successfully logged in you will be redirect to localhost:3000 with code param in the url.
// You cant use useEffect everytime because the code param is valid for 1minute.
// So my idea is to use useEffect one time, copy the token and pass it as a provider.

// image with 2 button (add to collection, like)
