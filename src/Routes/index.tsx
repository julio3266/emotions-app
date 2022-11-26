import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from '@utils/RootNavigation';
import {ThemeProvider} from 'styled-components';
import {Home} from '@Screens/Home';
import {Details} from '@Screens/Details';
import Theme from '@src/theme/styles';

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
