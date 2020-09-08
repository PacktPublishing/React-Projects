import React from 'react';

export const AppContext = React.createContext(null);

const AppContextProvider = ({ children }) => {
  const [player1, setPlayer1Wins] = React.useState(0);
  const [player2, setPlayer2Wins] = React.useState(0);

  const setPlayerWins = player => {
    if (player === 1) {
      setPlayer1Wins(player1 + 1);
    } else {
      setPlayer2Wins(player2 + 1);
    }
  };

  return (
    <AppContext.Provider
      value={{
        scores: {
          player1,
          player2,
        },
        setPlayerWins,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const { scores, setPlayerWins } = React.useContext(AppContext);

  return {
    scores,
    setPlayerWins,
  };
};

export default AppContextProvider;
