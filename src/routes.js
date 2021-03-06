import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { colors } from './styles';

import Header from './components/Header';

import Welcome from '../src/pages/welcome';
import Repositories from '../src/pages/repositories';
import Organizations from '../src/pages/organizations';

const createRootNavigator = (userExists = false) =>
  StackNavigator({
    Welcome: { screen: Welcome },
    User: {
      screen: TabNavigator({
        Repositories: { screen: Repositories },
        Organizations: { screen: Organizations },
      }, {
        swipeEnabled: true,
        animationEnabled: true,
        tabBarPosition: 'bottom',
        tabBarOptions: {
          showLabel: false,
          showIcon: true,
          activeTintColor: colors.white,
          inactiveTintColor: colors.inactive,
          style: {
            backgroundColor: colors.primary,
          },
        },
      }),
    },
  }, {
    initialRouteName: userExists ? 'User' : 'Welcome',
    navigationOptions: {
      header: props => <Header {...props} />,
    },
  });

export default createRootNavigator;
