import React from 'react';
import { Dimensions, Image, Text, View, TouchableOpacity } from 'react-native';
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

const PostItemThumbnail = styled(Image)`
  width: ${Dimensions.get('window').width * 0.98};
  height: ${Dimensions.get('window').width * 0.98};
  margin: ${Dimensions.get('window').width * 0.01}px;
`;

const PostItemDetails = styled(View)`
  width: 95%;
  margin: 2.5%;
`;

const UserName = styled(Text)`
  font-weight: bold;
  font-size: 16px;
`;

const PostText = styled(Text)`
  flex-wrap: wrap;
  max-width: 95%;
  font-size: 14px;
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
