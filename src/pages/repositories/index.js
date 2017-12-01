import React, { Component } from 'react';

import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import Repository from './components/Repository';

export default class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="list-alt" size={20} color={tintColor} />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Repository />
        <Repository />
        <Repository />
        <Repository />
        <Repository />
        <Repository />
        <Repository />
      </View>
    );
  }
}
