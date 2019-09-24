/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import Home from '../screens/Home';
import Courses from '../screens/Courses';
import Profile from '../screens/Profile';

import themeStyles from '../utils/theme.styles';

const globalHeaderConfig = {
  headerMode: 'none',
  navigationOptions: {
    header: null,
  },
};

const TabbarIcon = ({IconComp, focused, ...props}) => (
  <IconComp
    size={24}
    color={
      focused
        ? themeStyles.COLOR.activeTabIcon
        : themeStyles.COLOR.inactiveTabIcon
    }
    {...props}
    focused={focused}
  />
);

const HomeStack = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <TabbarIcon
            IconComp={MaterialCommunityIcons}
            name="home-variant"
            focused={focused}
          />
        ),
        tabBarLabel: 'Home',
      },
    },
    Courses: {
      screen: Courses,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <TabbarIcon
            IconComp={MaterialCommunityIcons}
            name="book"
            focused={focused}
          />
        ),
        tabBarLabel: 'Courses',
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <TabbarIcon IconComp={Entypo} name="user" focused={focused} />
        ),
        tabBarLabel: 'Profile',
      },
    },
  },
  {
    initialRouteName: 'HomeScreen',
    globalHeaderConfig,
    tabBarOptions: {
      activeTintColor: themeStyles.COLOR.activeTabIcon,
      inactiveTintColor: themeStyles.COLOR.inactiveTabIcon,
      labelStyle: {
        // backgroundColor: 'grey',
      },
      style: {
        // backgroundColor: 'grey',
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        borderTopColor: 'white',
        paddingTop: 10,
        paddingBottom: 24,
        height: 80,
      },
      safeAreaInset: {
        bottom: 'never',
        top: 'never',
      },
    },
  },
);

const AppNavigator = createSwitchNavigator({
  HomeStack: HomeStack,
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
