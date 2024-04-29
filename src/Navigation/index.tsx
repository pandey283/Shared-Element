// In App.js in a new project
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Detail from '../Screens/Detail';
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DetailScreen">
        {/* <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="DetailScreen"
          component={Detail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
