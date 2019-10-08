import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Conversations from './Screens/Conversations';
import Conversation from './Screens/Conversation';
import Settings from './Screens/Settings';

const ConversationsStack = createStackNavigator({
  Conversations: {
    screen: Conversations,
    navigationOptions: { title: 'All conversations' },
  },
  Conversation: {
    screen: Conversation,
    navigationOptions: { title: 'Conversation' },
  },
});

const TabNavigator = createBottomTabNavigator(
  {
    Conversations: ConversationsStack,
    Settings,
  },
  {
    initialRouteName: 'Conversations',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;

        let iconName;
        if (routeName === 'Conversations') {
          iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-chatbubbles`;
        } else if (routeName === 'Settings') {
          iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-star`;
        }

        return <Ionicons name={iconName} size={20} color={tintColor} />;
      },
      tabBarOptions: {
        activeTintColor: 'green',
        inactiveTintColor: '#556',
      },
    }),
  },
);

export default createAppContainer(TabNavigator);
