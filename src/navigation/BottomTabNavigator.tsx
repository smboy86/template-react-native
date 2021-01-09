import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import {BottomTabParamList} from './types';
import {tempBottomRouteScreen} from '../screens/tempScreens';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function TabBarIcon(props: {name: string; color: string}) {
  return <Feather size={26} style={{marginBottom: -6}} {...props} />;
}

export const BottomTabNavigator = () => (
  <BottomTab.Navigator
    tabBarOptions={{
      activeTintColor: '#32A05F',
      inactiveTintColor: '#757575',
      style: {
        height: 62,
        backgroundColor: '#F9FAF9',
        paddingBottom: 10,
        borderTopColor: '#F9FAF9',
      },
    }}>
    <BottomTab.Screen
      name="TabA"
      component={tempBottomRouteScreen}
      options={{
        tabBarIcon: ({color}) => <TabBarIcon name="check-circle" color={color} />,
        tabBarLabel: 'TabA',
      }}
    />
    <BottomTab.Screen
      name="TabB"
      component={tempBottomRouteScreen}
      options={{
        tabBarIcon: ({color}) => <TabBarIcon name="meh" color={color} />,
        tabBarLabel: 'TabB',
      }}
    />
    <BottomTab.Screen
      name="TabC"
      component={tempBottomRouteScreen}
      options={{
        tabBarIcon: ({color}) => <TabBarIcon name="file-text" color={color} />,
        tabBarLabel: 'TabC',
      }}
    />
    <BottomTab.Screen
      name="TabD"
      component={tempBottomRouteScreen}
      options={{
        tabBarIcon: ({color}) => <TabBarIcon name="settings" color={color} />,
        tabBarLabel: 'TabD',
      }}
    />
  </BottomTab.Navigator>
);

export default BottomTabNavigator;
