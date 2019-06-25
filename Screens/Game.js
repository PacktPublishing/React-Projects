import React from "react";
import { View, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Slot from '../Components/Game/Slot';

let slots = Array(9).fill(0).map(index => ({id: index, checked: false}));

  const reducer = (state, action) => {
    switch(action.type){
      case 'checkSlot':
          state[action.payload] = { ...state[action.payload], checked: true};
        return state
        default:
          return state
    }
  }

const Game = () => {
  const [state, dispatch] = React.useReducer(reducer, slots);

  // const setSlot = (index) => dispatch({ type: 'checkSlot', payload: index })

  const [yes, setYes] = React.useState('no')


const setSlot = (index) => {
  console.log('hi')
  dispatch({ type: 'checkSlot', payload: index })
  setYes(!yes)
}

  console.log(yes)

return <BoardWrapper><Board>
{state.map((slot, index) => <Slot
        key={index}
        index={index}
        handleOnPress={setSlot}
        filled={slot.checked}
      />)}
</Board></BoardWrapper>
};

const BoardWrapper = styled(View)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

`

const Board = styled(View)` 
display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: ${Dimensions.get('window').width * 0.9};
  width: ${Dimensions.get('window').width * 0.9}
background-color: pink;
`

export default Game;
