import React, { Component } from 'react';

import { Text, ScrollView, AsyncStorage, ActivityIndicator } from 'react-native';
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

  state = {
    organizations: [],
    loading: false,
  };

  componentWillMount() {
    this.setState({ loading: true });

    this.loadOrganizations().then(() => {
      this.setState({ loading: false });
    });
  }

  loadOrganizations = async () => {
    const username = await AsyncStorage.getItem('@Githuber:username');
    const response = await api.get(`/users/${username}/orgs`);

    this.setState({ organizations: response.data });
  };

  renderList = () => (
    this.state.organizations.length
      ? this.renderOrganizations()
      : <Text style={styles.empty}>Nenhuma organização encontrada</Text>
  );

  renderOrganizations = () => (
    this.state.organizations.map(organization => (
      <Organization key={organization.id} organization={organization} />
    ))

  );

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >

        { this.state.loading
          ? <ActivityIndicator size="small" color="#999" style={styles.loading} />
          : this.renderList() }
      </ScrollView>
    );
  }
}
