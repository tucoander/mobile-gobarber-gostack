import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator 
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#321e38'}
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard}></App.Screen>
  </App.Navigator>
);

export default AppRoutes;