import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Home from './screens/home'
import Quiz from './screens/quiz'
import Results from './screens/results'
import Quizmenu from './screens/quizmenu'
import MyStack from './navigation'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
        <MyStack />
    </NavigationContainer>
  )
}

// const styles = StyleSheet.create({
//     container: {
//         justifyContent: 'center',
//         alignItems: 'center'
//     }
// })