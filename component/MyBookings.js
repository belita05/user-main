import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import HotelCard from './Views/HotelCard'
import Nav from './Views/Nav';
import firebase from 'firebase';
import { useEffect } from 'react';

export default function MyBookings() {
 useEffect(()=>{
 firebase.firestore()
  .collection('Hotel')
  .get()
  .then(querySnapshot => {
    console.log('Total Hotels: ', querySnapshot.size);

    querySnapshot.forEach(documentSnapshot => {
      console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
    });
  });
 },[]);
  return (
    <View style={styles.container}>
      
      <ScrollView>
        <Nav text={'My Bookings'}></Nav>
      <HotelCard></HotelCard>
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
