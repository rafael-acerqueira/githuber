import React, { Component } from 'react';

import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api';
import styles from './styles';
import Organization from './components/Organization';

export default class Organizations extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="building" size={20} color={tintColor} />
    ),
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Organization />
        <Organization />
        <Organization />
        <Organization />
        <Organization />
        <Organization />
        <Organization />
        <Organization />
        <Organization />
        <Organization />
        <Organization />
      </ScrollView>
    );
  }
}
