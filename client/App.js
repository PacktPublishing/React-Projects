// import React from "react";
// import AppContextProvider from './context/AppContext';
// import AppContainer from './AppContainer';

// const App = () => (
//   <AppContextProvider>
//     <AppContainer />
//   </AppContextProvider>
// )

// export default App;

import React from "react";
import AppContextProvider from "./context/AppContext";
import AppContainer from "./AppContainer";

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000/graphql"
  }),
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
