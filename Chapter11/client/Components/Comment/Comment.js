import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const CommentWrapper = styled(View)`
  border: 1px solid #ccc;
  border-left-width: 0;
  border-right-width: 0;
  width: 100%;
  padding: 2.5%;
  margin-bottom: 2%;
  display: flex;
`;

const UserName = styled(Text)`
  font-weight: bold;
  font-size: 16px;
`;

const CommentText = styled(Text)`
  font-size: 14px;
`;

const Comment = ({ text, userName }) => (
  <CommentWrapper>
    <UserName>{userName}</UserName>
    <CommentText>{text}</CommentText>
  </CommentWrapper>
);

export default Comment;
