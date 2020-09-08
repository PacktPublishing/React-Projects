import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import PostContent from './PostContent';
import PostCount from './PostCount';

const PostItemWrapper = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #ccc;
  margin-bottom: 2%;
`;

const PostItem = ({ item, navigation }) => (
  <PostItemWrapper
    onPress={() => navigation.navigate('Post', { userName: item.userName })}
  >
    <PostContent item={item} />
    <PostCount stars={item.totalStars} comments={item.totalComments} />
  </PostItemWrapper>
);

PostItem.defaultProps = {
  navigation: false,
};

export default PostItem;
