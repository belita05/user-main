import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import Start from './component/Start';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './component/Login';
import Register from './component/Register';
import Test from './component/Test';
import HotelView from './component/HotelView';
import RoomsView from './component/RoomsView';
import Available from './component/Available';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

import firebase from 'firebase';
const Stack = createNativeStackNavigator();

export default function App() {

    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="start"
          component={Start}
          options={{header: () => null}}
          
        />
        <Stack.Screen name="Login" component={Login} 
           options={{header: () => null}} />
            <Stack.Screen name="Register" component={Register} 
           options={{header: () => null}} />
            <Stack.Screen name="Test" component={Test} 
           options={{header: () => null}} />
             <Stack.Screen name="HotelView" component={HotelView} 
           options={{header: () => null}} />
            <Stack.Screen name="RoomsView" component={RoomsView} 
           options={{header: () => null}} />
             <Stack.Screen name="Available" component={Available} 
           options={{header: () => null}} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  
  
};
