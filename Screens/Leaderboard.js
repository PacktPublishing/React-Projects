import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { useAppContext } from '../context/AppContext';

const LeaderBoardWrapper = styled(View)`
  flex: 1
  align-items: stretch;
  margin: 60px 0;
`;

const LeaderBoardTitle = styled(Text)`
  padding: 40px 0;
  width: 100%;
  text-align: center;
  font-size: 48px;
`;

const PlayerScore = styled(View)`
  padding: 40px 0;
`;

const PlayerScoreLabel = styled(Text)`
  padding-bottom: 20px;
  width: 100%;
  text-align: center;
  font-size: 28px;
`;
const PlayerScoreNumber = styled(Text)`
  width: 100%;
  text-align: center;
  font-size: 48px;
  font-weight: bold;
`;

const LeaderBoard = () => {
  const { scores } = useAppContext();

  return (
    <LeaderBoardWrapper>
      <LeaderBoardTitle>Scores</LeaderBoardTitle>
      <PlayerScore>
        <PlayerScoreLabel>Player 1</PlayerScoreLabel>
        <PlayerScoreNumber>{scores.player1}</PlayerScoreNumber>
      </PlayerScore>
      <PlayerScore>
        <PlayerScoreLabel>Player 2</PlayerScoreLabel>
        <PlayerScoreNumber>{scores.player2}</PlayerScoreNumber>
      </PlayerScore>
    </LeaderBoardWrapper>
  );
};

export default LeaderBoard;
