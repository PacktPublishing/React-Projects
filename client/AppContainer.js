import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Posts from './Screens/Posts';
import Post from './Screens/Post';
import Settings from './Screens/Settings';
import Login from './Screens/Login';
import AuthLoading from './Screens/AuthLoading';

const PostsStack = createStackNavigator({
  Posts: {
    screen: Posts,
    navigationOptions: { title: 'All Posts' },
  },
  Post: {
    screen: Post,
    navigationOptions: { title: 'Post' },
  },
});

const TabNavigator = createBottomTabNavigator(
  {
    Posts: PostsStack,
    Settings,
  },
  {
    initialRouteName: 'Posts',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;

        let iconName;
        if (routeName === 'Posts') {
          iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-home`;
        } else if (routeName === 'Settings') {
          iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-settings`;
        }

        return <Ionicons name={iconName} size={20} color={tintColor} />;
      },
      tabBarOptions: {
        activeTintColor: 'orange',
        inactiveTintColor: '#556',
      },
    }),
  },
);

const SwitchNavigator = createSwitchNavigator(
  {
    Main: TabNavigator,
    Login,
    AuthLoading,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default createAppContainer(SwitchNavigator);
