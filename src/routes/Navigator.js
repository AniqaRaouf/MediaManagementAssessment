import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import MediaManagement from '../screens/MediaManagment';
import Header from '../Headers/Header';



const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen"  component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MediaManagement" component={MediaManagement}  options={{
          header: () => <Header />,
         }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;