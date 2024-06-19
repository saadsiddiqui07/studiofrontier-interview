import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import React from 'react';
import DetailsScreen from '../screens/Details';
import Tabs from '../screens/Tabs';

const MainAppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainAppNavigation;
