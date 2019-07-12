import React from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import { ApolloProvider } from "react-apollo";
import AppContextProvider from "./context/AppContext";
import AppContainer from "./AppContainer";

const httpLink = new HttpLink({
  uri: "https://spicy-monkey-45.localtunnel.me/graphql"
});

const wsLink = new WebSocketLink({
  uri: `ws://spicy-monkey-45.localtunnel.me/graphql`,
  options: {
    reconnect: true
  }
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
  link,
  cache
});

const App = () => (
  <ApolloProvider client={client}>
    <AppContextProvider>
      <AppContainer />
    </AppContextProvider>
  </ApolloProvider>
);

export default App;
