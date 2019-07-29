import React from "react";
import { Text, FlatList, View } from "react-native";
import styled from "styled-components/native";
import { Query } from "react-apollo";
import Notification from "../Components/Notification/Notification";
import { GET_NOTIFICATIONS } from "../constants";

const Notifications = () => {
  return (
    <NotificationsWrapper>
      <Query query={GET_NOTIFICATIONS}>
        {({ loading, data }) => {
          if (loading || !data.notifications.length) {
            return (
              <NotificationsBody>
                <NotificationsText>
                  {loading ? "Loading..." : "Empty"}
                </NotificationsText>
              </NotificationsBody>
            );
          }

          return (
            <FlatList
              data={data.notifications}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <Notification title={item.title} body={item.body} />
              )}
            />
          );
        }}
      </Query>
    </NotificationsWrapper>
  );
};

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

// Notifications.navigationOptions = ({ navigation }) => ({
//   tabBarIcon: <></>
// });

export default Notifications;
