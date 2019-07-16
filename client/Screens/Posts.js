import React from "react";
import { Query } from "react-apollo";
import { FlatList, Text, View } from "react-native";
import styled from "styled-components/native";
import { GET_POSTS } from "../constants";
import PostItem from "../Components/Post/PostItem"

const Posts = ({ navigation }) => (
  <PostsWrapper>
    <Query query={GET_POSTS}>
      {({ loading, data }) => {
        if (loading) {
          return <PostsText>Loading...</PostsText>;
        }

        return (
          <PostsList
            data={data.posts}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <PostItem item={item} navigation={navigation} />
            )}
          />
        );
      }}
    </Query>
  </PostsWrapper>
);

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
