import React from 'react';
import ListsContextProvider from './ListsContextProvider';
import ItemsContextProvider from './ItemsContextProvider';

const GlobalContext = ({ children }) => {
  return (
    <ListsContextProvider>
      <ItemsContextProvider>{children}</ItemsContextProvider>
    </ListsContextProvider>
  );
};

export default GlobalContext;
