import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styled from 'styled-components/native';

const ConversationsWrapper = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const ConversationsList = styled(FlatList)`
  width: 100%;
`;

const ConversationsText = styled(Text)`
  font-size: 20px;
  color: black;
`;

const Conversations = () => (
  <ConversationsWrapper>
    <ConversationsText>Loading...</ConversationsText>
  </ConversationsWrapper>
);

export default Conversations;
