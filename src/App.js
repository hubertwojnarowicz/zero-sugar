import React from 'react';
import TokenContext from './context/token';
import Header from './components/Header/Header';

function App() {
  const token = 'v72vhkgjeVoA_tMj3ZLYtDl3WnxYILagMUKOgHtRFLk';

  return (
    <TokenContext.Provider value={token}>
      <Header />
    </TokenContext.Provider>
  );
}

export default App;

// Unsplash oauth 2.0 with grant_type authorization code.
// first of all you need to register your app, enable interesting scopes and add localhost:3000 as a redirect_uri.
// when you successfully logged in you will be redirect to localhost:3000 with code param in the url.
// You cant use useEffect everytime because the code param is valid for 1minute.
// So my idea is to use useEffect one time, copy the token and pass it as a provider.
