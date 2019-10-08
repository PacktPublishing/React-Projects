import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Start from './Screens/Start';
import Game from './Screens/Game';
import LeaderBoard from './Screens/LeaderBoard';

const Tabs = createBottomTabNavigator(
  {
    Start: Start,
    LeaderBoard: LeaderBoard,
  },
  {
    initialRouteName: 'Start',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;

        let iconName;
        if (routeName === 'Start') {
          iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-home`;
        } else if (routeName === 'LeaderBoard') {
          iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-star`;
        }

        return <Ionicons name={iconName} size={20} color={tintColor} />;
      },
      tabBarOptions: {
        activeTintColor: 'purple',
        inactiveTintColor: '#556',
      },
    }),
  },
);

const AppNavigator = createStackNavigator(
  {
    Start: {
      screen: Tabs,
    },
    Game: {
      screen: Game,
    },
  },
  {
    initialRouteName: 'Start',
    mode: 'modal',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
