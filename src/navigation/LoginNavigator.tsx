import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {LoginParamList} from './types';
import {tempLoginRouteScreen} from '../screens/tempScreens';

const LoginStack = createStackNavigator<LoginParamList>();

export const LoginNavigator = () => (
  <LoginStack.Navigator
    screenOptions={{
      animationEnabled: true,
      headerStyle: {
        elevation: 0,
      },
    }}>
    <LoginStack.Screen
      name="Login"
      component={tempLoginRouteScreen}
      options={{headerShown: false}}
    />
    <LoginStack.Screen
      name="Join"
      component={tempLoginRouteScreen}
      options={{
        title: '',
      }}
    />
    <LoginStack.Screen
      name="Password"
      component={tempLoginRouteScreen}
      options={{
        title: '',
      }}
    />
  </LoginStack.Navigator>
);

export default LoginNavigator;
