import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';


export default class Organization extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={{ uri: 'http://place-hold.it/64' }}
        />
        <Text style={styles.title}>Organização 1</Text>
      </View>
    );
  }
}
