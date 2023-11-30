import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Quizmenu from '../screens/quizmenu';
import Quiz from '../screens/quiz';
import Results from '../screens/results';
import React from 'react'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="Quizmenu" component={Quizmenu}  options={{headerShown: false}} />
      <Stack.Screen name="Quiz" component={Quiz}  options={{headerShown: false}} />
      <Stack.Screen name="Results" component={Results}  options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export default MyStack;