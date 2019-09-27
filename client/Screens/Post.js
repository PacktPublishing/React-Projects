import React from 'react';
import { Text, FlatList, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';
import { useQuery } from '@apollo/react-hooks';
import CommentForm from '../Components/Comment/CommentForm';
import PostCount from '../Components/Post/PostCount';
import PostContent from '../Components/Post/PostContent';
import { GET_POST } from '../constants';
import Comment from '../Components/Comment/Comment';

const Post = ({ navigation }) => {
  const userName = navigation.getParam('userName', '');
  const { loading, data } = useQuery(GET_POST, { variables: { userName } });

  const { post } = data;

  return (
    <PostWrapper>
      <PostBody>
        {loading || !post ? (
          <PostText>Loading...</PostText>
        ) : (
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
        )}
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
