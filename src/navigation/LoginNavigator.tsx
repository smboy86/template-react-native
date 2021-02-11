import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginParamList } from './types';
import { TempLoginRouteScreen } from '../screens/TempScreens';

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
      component={TempLoginRouteScreen}
      options={{ headerShown: false }}
    />
    <LoginStack.Screen
      name="Join"
      component={TempLoginRouteScreen}
      options={{
        title: '',
      }}
    />
    <LoginStack.Screen
      name="Password"
      component={TempLoginRouteScreen}
      options={{
        title: '',
      }}
    />
  </LoginStack.Navigator>
);

export default LoginNavigator;
