import React from "react";
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const Player = ({ winner, player }) => (
    <PlayerWrapper>
        <PlayerText>{winner ? `Player ${winner} wins` : `Player ${player} turn`}</PlayerText>
    </PlayerWrapper>
);

const PlayerWrapper = styled(View)`
    padding: 40px 0;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const PlayerText = styled(Text)`
    font-size: 48px;
`

export default Player;