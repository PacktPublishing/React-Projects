import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Query } from 'react-apollo';
import styled from 'styled-components/native';
import { GET_CONVERSATIONS } from '../constants';
import ConversationItem from '../Components/Conversation/ConversationItem';

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

const Conversations = ({ navigation }) => (
  <ConversationsWrapper>
    <Query query={GET_CONVERSATIONS}>
      {({ loading, data }) => {
        if (loading) {
          return <ConversationsText>Loading...</ConversationsText>;
        }

        return (
          <ConversationsList
            data={data.conversations}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <ConversationItem item={item} navigation={navigation} />
            )}
          />
        );
      }}
    </Query>
  </ConversationsWrapper>
);

export default Conversations;
