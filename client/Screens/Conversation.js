import React from 'react';
import { Dimensions, Text, FlatList, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';
import ConversationActions from '../Components/Conversation/ConversationActions';

const ConversationWrapper = styled(View)`
  flex: 1;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

const ConversationBody = styled(ScrollView)`
  width: 100%;
  padding: 2%;
  display: flex;
  height: ${Dimensions.get('window').height * 0.6};
`;

const ConversationBodyText = styled(Text)`
  font-size: 20px;
  color: black;
`;

const MessagesList = styled(FlatList)`
  width: 100%;
`;

const Conversation = ({ navigation }) => {
  const userName = navigation.getParam('userName', '');

  return (
    <ConversationWrapper>
      <ConversationBody>
        <ConversationBodyText>Loading...</ConversationBodyText>
      </ConversationBody>
      <ConversationActions userName={userName} />
    </ConversationWrapper>
  );
};

export default Conversation;
