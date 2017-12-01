import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Repository extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>Repositorio legal cara</Text>
          <View style={styles.infoContainer}>
            <View style={styles.info}>
              <Icon name="star" size={14} style={styles.infoIcon} />
              <Text style={styles.infoText}>200</Text>
            </View>
            <View style={styles.info}>
              <Icon name="code-fork" size={14} style={styles.infoIcon} />
              <Text style={styles.infoText}>200</Text>
            </View>
            <View style={styles.info}>
              <Icon name="eye" size={14} style={styles.infoIcon} />
              <Text style={styles.infoText}>200</Text>
            </View>
          </View>
      </View>
    );
  }
}
