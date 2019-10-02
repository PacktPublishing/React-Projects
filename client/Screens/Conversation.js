import React from 'react';
import { Text, View } from 'react-native';
import { Query } from 'react-apollo';
import styled from 'styled-components/native';
import { GET_CONVERSATION } from '../constants';
import ConversationActions from '../Components/Conversation/ConversationActions';
import ConversationBody from '../Components/Conversation/ConversationBody';

const ConversationWrapper = styled(View)`
  flex: 1;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

const ConversationBodyText = styled(Text)`
  font-size: 20px;
  color: black;
`;

const Conversation = ({ navigation }) => {
  const userName = navigation.getParam('userName', '');

  return (
    <ConversationWrapper>
      <Query query={GET_CONVERSATION} variables={{ userName }}>
        {({ subscribeToMore, loading, data }) => {
          if (loading) {
            return <ConversationBodyText>Loading...</ConversationBodyText>;
          }
          const { messages } = data.conversation;

          return (
            <ConversationBody
              messages={messages}
              subscribeToMore={subscribeToMore}
              userName={userName}
            />
          );
        }}
      </Query>
      <ConversationActions userName={userName} />
    </ConversationWrapper>
  );
};

export default Conversation;
