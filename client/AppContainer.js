import React from "react";
import { Platform } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import Conversations from "./Screens/Conversations";
import Conversation from "./Screens/Conversation";
import Settings from "./Screens/Settings";
import Login from "./Screens/Login";
import AuthLoading from "./Screens/AuthLoading";

const ConversationsStack = createStackNavigator({
  Conversations: {
    screen: Conversations,
    navigationOptions: { title: "All conversationss" }
  },
  Conversation: {
    screen: Conversation,
    navigationOptions: { title: "Conversation" }
  }
});

const TabNavigator = createBottomTabNavigator(
  {
    Conversations: ConversationsStack,
    Settings
  },
  {
    initialRouteName: "Conversations",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;

        let iconName;
        if (routeName === "Conversations") {
          iconName = `${Platform.OS === "ios" ? "ios" : "md"}-home`;
        } else if (routeName === "Settings") {
          iconName = `${Platform.OS === "ios" ? "ios" : "md"}-star`;
        }

        return <Ionicons name={iconName} size={20} color={tintColor} />;
      },
      tabBarOptions: {
        activeTintColor: "green",
        inactiveTintColor: "#556"
      }
    })
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    Main: TabNavigator,
    Auth: Login,
    AuthLoading
  },
  {
    initialRouteName: "AuthLoading"
  }
);

export default createAppContainer(SwitchNavigator);
