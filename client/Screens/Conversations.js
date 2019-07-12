import React from "react";
import { FlatList, View } from "react-native";
import { Subscription } from "react-apollo";
import { GET_CART } from "../constants";
import ConversationItem from "../Components/Conversations/ConversationItem";
import styled from "styled-components/native";

const Conversations = ({ navigation }) => (
  <ConversationsWrapper>
    <Subscription subscription={GET_CART}>
      {({ loading, error, data }) => {
        console.log(data);
        
        return (
          <ConversationsList
            data={data.conversations}
            keyExtractor={item => item.userName}
            renderItem={({ item }) => {
              return <ConversationItem item={item} />;
            }}
          />
        );
      }}
    </Subscription>
  </ConversationsWrapper>
);

const ConversationsWrapper = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const ConversationsList = styled(FlatList)`
  width: 100%;
`;

export default Conversations;
