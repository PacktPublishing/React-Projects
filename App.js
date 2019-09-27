import React from 'react';
import AppContextProvider from './context/AppContext';
import AppContainer from './AppContainer';

const App = () => (
  <AppContextProvider>
    <AppContainer />
  </AppContextProvider>
);

export default App;
