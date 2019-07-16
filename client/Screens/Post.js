import React from "react";
import { Text, FlatList, ScrollView, View } from "react-native";
import styled from "styled-components/native";
import { Query } from "react-apollo";
import CommentForm from "../Components/Comment/CommentForm";
import PostCount from "../Components/Post/PostCount";
import PostContent from "../Components/Post/PostContent";
import { GET_POST } from "../constants";
import Comment from "../Components/Comment/Comment";

const Post = ({ navigation }) => {
  const userName = navigation.getParam("userName", "");

  return (
    <PostWrapper>
      <PostBody>
        <Query query={GET_POST} variables={{ userName }}>
          {({ loading, data }) => {
            if (loading) {
              return <PostText>Loading...</PostText>;
            }

            const { post } = data;

            return (
              <>
                <PostContent item={post} />
                <PostCount stars={post.stars} marginBottom={2} />
                <FlatList
                  data={post.comments}
                  keyExtractor={item => String(item.id)}
                  renderItem={({ item }) => (
                    <Comment userName={item.userName} text={item.text} />
                  )}
                />
              </>
            );
          }}
        </Query>
      </PostBody>
      <CommentForm userName={userName} />
    </PostWrapper>
  );
};

const PostWrapper = styled(View)`
  flex: 1;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const PostBody = styled(ScrollView)`
  width: 100%;
  display: flex;
`;

const PostText = styled(Text)`
  font-size: 20px;
  color: black;
`;

export default Post;
