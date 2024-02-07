import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RoutesScreen }  from './rotes/routesScreen';


export default function App() {
  return (
    <NavigationContainer>
      <RoutesScreen/>
    </NavigationContainer>
)};



