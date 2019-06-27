import React from "react";
import { Platform } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import Start from './Screens/Start';
import Game from './Screens/Game';
import Leaderboard from './Screens/Leaderboard';

const Tabs = createBottomTabNavigator({
  Start: Start,
  Leaderboard: Leaderboard
}, {
    initialRouteName: 'Start',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;

        let iconName;
        if (routeName === 'Start') {
          iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-home`;
        } else if (routeName === 'Leaderboard') {
          iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-star`;
        }

        return <Ionicons name={iconName} size={20} color={tintColor} />;
      },
      tabBarOptions: {
        activeTintColor: 'purple',
        inactiveTintColor: '#556',
      },
    })
  });

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
  }
);

export default createAppContainer(AppNavigator);
