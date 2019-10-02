import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { GET_POSTS } from '../constants';
import PostItem from '../Components/Post/PostItem';
import { useQuery } from '@apollo/react-hooks';

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

const Posts = ({ navigation }) => {
  const { loading, data } = useQuery(GET_POSTS);

  return (
    <PostsWrapper>
      {loading ? (
        <PostsText>{loading ? 'Loading...' : 'Empty'}</PostsText>
      ) : (
        <PostsList
          data={data.posts}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <PostItem item={item} navigation={navigation} />
          )}
        />
      )}
    </PostsWrapper>
  );
};

export default Posts;
