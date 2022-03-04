import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import HotelCard from './Views/HotelCard'
import Nav from './Views/Nav';
import firebase from 'firebase';
import { useEffect,useState} from 'react';
import {useNavigation} from '@react-navigation/native'
import { useRoute } from '@react-navigation/native';
export default function Available() {
    const route = useRoute();
    const id = route.params.Town;
  return (
    <View style={styles.container}>
      
      <ScrollView>
        <Nav text={'Available Hotels'}></Nav>
      <HotelCard Town={id} ></HotelCard>
      </ScrollView>
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,
    backgroundColor: '#fff',
  
  },
});
