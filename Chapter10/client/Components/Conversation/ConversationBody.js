import React from 'react';
import styled from 'styled-components/native';
import { Dimensions, ScrollView, FlatList } from 'react-native';
import Message from '../Message/Message';
import { MESSAGE_ADDED } from '../../constants';

const ConversationBodyWrapper = styled(ScrollView)`
  width: 100%;
  padding: 2%;
  display: flex;
  height: ${Dimensions.get('window').height * 0.6};
`;

const MessagesList = styled(FlatList)`
  width: 100%;
`;

const ConversationBody = ({ subscribeToMore, userName, messages }) => {
  React.useEffect(() => {
    subscribeToMore({
      document: MESSAGE_ADDED,
      variables: { userName },
      updateQuery: (previous, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return previous;
        }
        const messageAdded = subscriptionData.data.messageAdded;

        return Object.assign({}, previous, {
          conversation: {
            ...previous.conversation,
            messages: [...previous.conversation.messages, messageAdded],
          },
        });
      },
    });
  }, []);

  return (
    <ConversationBodyWrapper>
      <MessagesList
        data={messages}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Message align={item.userName === 'me' ? 'left' : 'right'}>
            {item.text}
          </Message>
        )}
      />
    </ConversationBodyWrapper>
  );
};

export default ConversationBody;
