import React from 'react';
import { Platform, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

const PostCountWrapper = styled(View)`
  border: 1px solid #ccc;
  border-left-width: 0;
  border-right-width: 0;
  width: 100%
  display: flex;
  margin-bottom: ${({ marginBottom }) => `${marginBottom}%`};
`;

const PostCountDetails = styled(View)`
  width: 95%;
  margin: 2.5%;
  display: flex;
  flex-direction: row;
`;

const CountWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  margin-right: 2%;
`;

const CountText = styled(Text)`
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  margin-left: 2%;
`;

const PostCount = ({ stars, comments, marginBottom }) => (
  <PostCountWrapper marginBottom={marginBottom}>
    <PostCountDetails>
      <CountWrapper>
        <Ionicons
          name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-star`}
          size={20}
        />
        <CountText>
          {!comments
            ? ` Starred by ${stars[0].userName} and ${stars.length - 1} others`
            : stars}
        </CountText>
      </CountWrapper>

      {comments && (
        <CountWrapper>
          <Ionicons
            name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-chatbubbles`}
            size={20}
          />
          <CountText>{comments}</CountText>
        </CountWrapper>
      )}
    </PostCountDetails>
  </PostCountWrapper>
);

PostCount.defaultProps = {
  comments: false,
  marginBottom: 0,
};

export default PostCount;
