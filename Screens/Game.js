import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Board from '../Components/Board/Board';
import Actions from '../Components/Actions/Actions';
import Player from '../Components/Player/Player';
import checkSlots from '../utils/checkSlots';
import { useAppContext } from '../context/AppContext';
import { ANIMATION_DURATION } from '../utils/constants';

const init = initialState => ({
  slots: Array(9)
    .fill(0)
    .map(index => ({ id: index, filled: null })),
  player1: [],
  player2: [],
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'checkSlot':
      state.slots[action.payload.index] = {
        ...state.slots[action.payload.index],
        filled: action.payload.player,
      };
      state[`player${action.payload.player}`] = [
        ...state[`player${action.payload.player}`],
        action.payload.index,
      ];
      return state;
    case 'resetSlots':
      return init(action.payload);
    default:
      return state;
  }
};

const GameWrapper = styled(View)`
  flex: 1
  align-items: stretch;
  margin: 60px 0;
`;

const Game = ({ navigation, initialState }) => {
  const { setPlayerWins } = useAppContext();
  const [state, dispatch] = React.useReducer(reducer, initialState, init);
  const [player, setPlayer] = React.useState(1);
  const [winner, setWinner] = React.useState(null);

  const setSlot = index => {
    dispatch({ type: 'checkSlot', payload: { index, player } });

    setPlayer(player === 1 ? 2 : 1);
  };

  const resetSlots = () => {
    dispatch({ type: 'resetSlots', payload: initialState });
    setPlayer(winner);
    setWinner(null);
  };

  const checkWinner = player => {
    const slots = state[`player${player}`];
    if (slots.length >= 3) {
      if (checkSlots(slots)) {
        setTimeout(() => {
          setWinner(player);
          setPlayerWins(player);
        }, ANIMATION_DURATION);
      }
    }

    return false;
  };

  React.useEffect(() => {
    checkWinner(player === 1 ? 2 : 1);
  }, [player]);

  return (
    <GameWrapper>
      <Player player={player} winner={winner} />
      <Board slots={state.slots} winner={winner} setSlot={setSlot} />
      <Actions
        winner={winner}
        player={player}
        resetSlots={resetSlots}
        navigation={navigation}
      />
    </GameWrapper>
  );
};

export default Game;
