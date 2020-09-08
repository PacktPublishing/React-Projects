import React from 'react';
import HotelsContextProvider from './HotelsContextProvider';
import ReviewsContextProvider from './ReviewsContextProvider';

const GlobalContext = ({ children }) => {
  return (
    <HotelsContextProvider>
      <ReviewsContextProvider>{children}</ReviewsContextProvider>
    </HotelsContextProvider>
  );
};

export default GlobalContext;
