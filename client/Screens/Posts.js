import React from "react";
import { ApolloConsumer, Query } from "react-apollo";
import {
  Button,
  FlatList,
  Text,
  View,
  ScrollView,
  RefreshControl
} from "react-native";
import styled from "styled-components/native";
import { GET_POSTS, STORE_EXPO_TOKEN } from "../constants";
import PostItem from "../Components/Post/PostItem";
import registerForPushNotificationsAsync from "../utils/registerForPushNotificationsAsync";

const PostsContainer = ({ navigation }) => (
  <ApolloConsumer>
    {client => <Posts client={client} navigation={navigation} />}
  </ApolloConsumer>
);

const Posts = ({ client, navigation }) => {
  const [refreshing, setRefreshing] = React.useState(false);

  React.useEffect(() => {
    registerForPushNotificationsAsync().then(expoToken => {
      return client.mutate({
        mutation: STORE_EXPO_TOKEN,
        variables: {
          expoToken
        }
      });
    });
  }, []);

  const handleRefresh = refetch => {
    setRefreshing(true);

    refetch().then(() => setRefreshing(false));
  };

  return (
    <PostsWrapper>
      <Query query={GET_POSTS} pollInterval={0}>
        {({ loading, data, refetch }) => {
          if (loading && !refreshing) {
            return <PostsText>Loading...</PostsText>;
          }

          return (
            <ScrollView
              style={{ width: "100%" }}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={() => handleRefresh(refetch)}
                />
              }
            >
              <PostsList
                data={data.posts}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                  <PostItem item={item} navigation={navigation} />
                )}
              />
            </ScrollView>
          );
        }}
      </Query>
    </PostsWrapper>
  );
};

const PostsWrapper = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const PostsList = styled(FlatList)`
  width: 100%;
`;

const PostsText = styled(Text)`
  font-size: 20px;
  color: black;
`;

PostsContainer.navigationOptions = ({ navigation }) => ({
  headerRight: (
    <Button onPress={() => navigation.navigate("AddPost")} title="Add Post" />
  )
});

export default PostsContainer;
