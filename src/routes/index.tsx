import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator>
    <Auth.Screen name="SignIn" component={SignIn}></Auth.Screen>
    <Auth.Screen name="SignUp" component={SignUp}></Auth.Screen>
  </Auth.Navigator>
);

export default AuthRoutes;