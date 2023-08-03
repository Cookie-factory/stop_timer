import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteList} from '~/types/navigator';
import Main from '~/pages/main';
import TimerPage from '~/pages/timer';

const Stack = createNativeStackNavigator<RouteList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'TimerPage'}>
        <Stack.Screen
          name="Main"
          component={Main}
          options={() => ({
            headerShown: false,
            animation: 'slide_from_right',
          })}
        />

        <Stack.Screen
          name="TimerPage"
          component={TimerPage}
          options={() => ({
            headerShown: false,
            animation: 'slide_from_right',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
