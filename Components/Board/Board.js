import React from 'react';
import { View, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Slot from '../Slot/Slot';
import Winner from '../Winner/Winner';

const BoardWrapper = styled(View)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const SlotsWrapper = styled(View)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: ${Dimensions.get('window').width * 0.9};
  width: ${Dimensions.get('window').width * 0.9};
`;

const Board = ({ slots, winner, setSlot }) => (
  <BoardWrapper>
    <SlotsWrapper>
      {winner ? (
        <Winner />
      ) : (
        slots.map((slot, index) => (
          <Slot
            key={index}
            index={index}
            handleOnPress={!winner ? setSlot : () => {}}
            filled={slot.filled}
          />
        ))
      )}
    </SlotsWrapper>
  </BoardWrapper>
);

export default Board;
