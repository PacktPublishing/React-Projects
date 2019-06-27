import React from "react";
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import Button from '../Button/Button';

const Actions = ({ winner, resetSlots, navigation }) => (
    <ActionsWrapper>
        {winner && (
            <>
                <Button onPress={() => resetSlots()} title="Start again" />
                <Button onPress={() => navigation.navigate('Leaderboard')} title="View scores" />
            </>
        )}
    </ActionsWrapper>
);

const ActionsWrapper = styled(View)`
    padding: 40px 0;
    height: 250px;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export default Actions;