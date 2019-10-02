import React from 'react';
import { Text, FlatList, View } from 'react-native';
import styled from 'styled-components/native';
import Notification from '../Components/Notification/Notification';
import { GET_NOTIFICATIONS } from '../constants';
import { useMutation } from '@apollo/react-hooks';

const NotificationsWrapper = styled(View)`
  flex: 1;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const NotificationsBody = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const NotificationsText = styled(Text)`
  font-size: 20px;
  color: black;
`;

const Notifications = () => {
  const [{ loading, data }] = useMutation(GET_NOTIFICATIONS);

  return (
    <NotificationsWrapper>
      {loading || !data.notifications.length ? (
        <NotificationsBody>
          <NotificationsText>
            {loading ? 'Loading...' : 'Empty'}
          </NotificationsText>
        </NotificationsBody>
      ) : (
        <FlatList
          data={data.notifications}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Notification title={item.title} body={item.body} />
          )}
        />
      )}
    </NotificationsWrapper>
  );
};

export default Notifications;
