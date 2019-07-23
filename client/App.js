import React from "react";
import { AsyncStorage } from "react-native";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";
import { HttpLink } from "apollo-link-http";
import { split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import { ApolloProvider } from "react-apollo";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import AppContainer from "./AppContainer";

const httpLink = new HttpLink({
  uri: "https://smooth-turkey-35.localtunnel.me/graphql"
});

const wsLink = new WebSocketLink({
  uri: "ws://smooth-turkey-35.localtunnel.me/graphql",
  options: {
    reconnect: true
  }
});

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem("token");

console.log(token);


  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: authLink.concat(link),
  cache
});

const App = () => (
  <ApolloProvider client={client}>
    <ActionSheetProvider>
      <AppContainer />
    </ActionSheetProvider>
  </ApolloProvider>
);

export default App;