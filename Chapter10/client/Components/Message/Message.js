import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const MessageBalloon = styled(View)`
  background-color: ${({ align }) => (align === 'left' ? 'grey' : 'blue')}
  padding: 4%;
  margin-bottom: 2%;
  border-radius: 15px;
  display: flex;
  flex-wrap: wrap;
  align-self: ${({ align }) => (align === 'left' ? 'flex-start' : 'flex-end')};
`;

const MessageBalloonText = styled(Text)`
  color: white;
  font-size: 18px;
`;

const Message = ({ children, align }) => (
  <MessageBalloon align={align}>
    <MessageBalloonText>{children}</MessageBalloonText>
  </MessageBalloon>
);

export default Message;
