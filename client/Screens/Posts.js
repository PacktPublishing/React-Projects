import React from "react";
import { Query } from "react-apollo";
import { FlatList, Text, View, ScrollView, RefreshControl } from "react-native";
import styled from "styled-components/native";
import { GET_POSTS } from "../constants";
import PostItem from "../Components/Post/PostItem";

const Posts = ({ navigation }) => {
  const [refreshing, setRefreshing] = React.useState(false);

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

export default Posts;
