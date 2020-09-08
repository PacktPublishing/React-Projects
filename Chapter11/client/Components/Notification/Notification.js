import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const NotificationWrapper = styled(View)`
  border: 0px solid #ccc;
  border-bottom-width: 1;
  width: 100%;
  padding: 2.5%;
  margin-bottom: 2%;
  display: flex;
`;

const Title = styled(Text)`
  font-weight: bold;
  font-size: 16px;
`;

const Body = styled(Text)`
  font-size: 14px;
`;

const Notification = ({ title, body }) => (
  <NotificationWrapper>
    <Title>{title}</Title>
    <Body>{body}</Body>
  </NotificationWrapper>
);

export default Notification;
