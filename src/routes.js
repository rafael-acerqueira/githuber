import { StackNavigator, TabNavigator } from 'react-navigation';

import Welcome from '../src/pages/welcome';
import Repositories from '../src/pages/repositories';
import Organizations from '../src/pages/organizations';


const Routes = StackNavigator({
  Welcome: { screen: Welcome },
  User: {
    screen: TabNavigator({
      Repositories: { screen: Repositories },
      Organizations: { screen: Organizations },
    }),
  },
}, {
  initialRouteName: 'Welcome',
});

export default Routes;
