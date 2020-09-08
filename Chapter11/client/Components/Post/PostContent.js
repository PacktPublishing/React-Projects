import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import styled from 'styled-components/native';

const PostContentWrapper = styled(View)``;

const PostContentThumbnail = styled(Image)`
  width: ${Dimensions.get('window').width * 0.98};
  height: ${Dimensions.get('window').width * 0.98};
  margin: ${Dimensions.get('window').width * 0.01}px;
`;

const PostContentDetails = styled(View)`
  width: 95%;
  margin: 2.5%;
`;

const UserName = styled(Text)`
  font-weight: bold;
  font-size: 16px;
`;

const PostContent = ({ item }) => (
  <PostContentWrapper>
    <PostContentThumbnail source={{ uri: item.image }} />
    <PostContentDetails>
      <UserName>{item.userName}</UserName>
    </PostContentDetails>
  </PostContentWrapper>
);

PostContent.defaultProps = {
  navigation: false,
};

export default PostContent;
