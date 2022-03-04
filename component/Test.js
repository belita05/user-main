
import React, {useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import MyBookings from './MyBookings';
import Profile from './Profile';
import Search from './Search';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator();


const Test = () => {
   
        return(
    
        <Tab.Navigator  
         screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
    
            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search';
            } else if (route.name === 'My Profile') {
              iconName = focused ? 'person' : 'person';
            }
            else if (route.name === 'My Bookings') {
              iconName = focused ? 'list' : 'list';
            }
    
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#378CE8',
          tabBarInactiveTintColor: 'gray',
        })}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{header: () => null}}
        
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{header: () => null}}
           
          />
           <Tab.Screen
            name="My Bookings"
            component={MyBookings}
            options={{header: () => null}}
          />
          <Tab.Screen
            name="My Profile"
            component={Profile}
            options={{header: () => null}}
           
          />
        
          
          
        </Tab.Navigator>

        )
    
}
 
export default Test;