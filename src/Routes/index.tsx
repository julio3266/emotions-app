import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from '../utils/RootNavigation';
import {ThemeProvider} from 'styled-components';
import {Home} from '@screens/Home';
import {Details} from '@screens/Details';
import Theme from '@theme/styles';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <ThemeProvider theme={Theme}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};
