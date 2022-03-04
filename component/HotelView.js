import { Pressable,ImageBackground,TouchableOpacity,Image,StyleSheet,TextInput,ScrollView, Button, View,Text, Alert ,Platform} from 'react-native';
import Lodge from './../assets/lodge3.jpg'
import Ionicons from 'react-native-vector-icons/Ionicons'
import RoomsCard from './Views/RoomsCard';
import Home from './Views/HotelCard';
import Nav from './Views/Nav';
import { useRoute } from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native'
import { useEffect, useState } from 'react';
import firebase from 'firebase';
export default function HotelView() {
  const navigation = useNavigation();
  const route = useRoute();
  const [Hotel,setHotel]=useState([]);
  const id = route.params.key;
 useEffect(()=>{
  firebase.firestore()
  .collection('Hotel')
  .doc(id)
  .get()
  .then(documentSnapshot => {
    console.log('User exists: ', documentSnapshot.exists);

    if (documentSnapshot.exists) {
      console.log('User data: ', documentSnapshot.data());
      setHotel(documentSnapshot.data())
    }
  });
 },[]);
  return (

    
<View  style ={styles.container} >

      <View> 
         <Image style={styles.logo} source={{uri: Hotel['url']}}></Image>
         <Text style = {styles.Hotelname}>{Hotel['hotelName']}</Text>
         <View style={styles.HotelLocationView} >
         <View style={styles.InfoView}>
         <Ionicons name='location' color={'#000'} size={25}></Ionicons>
         <Text style= {styles.Info}>{Hotel['location']}</Text>
         </View>
        
         </View>
         <View style={styles.HotelLocationView} >
             <View style={styles.InfoView}>
             <Ionicons name='star' color={'#000'} size={25}></Ionicons>
             <Text style={styles.Info}>5.0</Text>
             
             </View>
  
        
    
    

    </View>
      </View>
      <Text style = {styles.Hotelnames}>Rooms Available</Text>
      <ScrollView  style ={styles.Rooms}>
        
      <RoomsCard></RoomsCard>
 <RoomsCard></RoomsCard>
 <RoomsCard></RoomsCard>
      </ScrollView>

 </View>
  

  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#fff',
   display:'flex',
   height:'60%',
   flex:1,
    borderRadius:10,
  },Rooms:{
    height:'40%',
  },

  logo:{
      width:'100%',
      height:350,
      borderBottomLeftRadius:40,
      borderBottomRightRadius:40,
      resizeMode:'cover'
  },
  Hotelname:{
      marginTop:5,
   color:'black',
   marginLeft:5,
   fontWeight:'bold',
   fontSize:25,
  },
  Hotelnames:{
    color:'black',
    width:"100%",
    textAlign:"center",
    textDecorationLine: 'underline',
    padding:4,
    alignContent:'center',
    justifyContent:'center',
    fontWeight:'bold',
    fontSize:20,
  },
  HotelLocationView:{
      flexDirection:'row',
      marginLeft:5,
      paddingBottom:5,
  }
  ,
  HotelLocation:{
      marginLeft:2,
   color:'grey'
  },Info:{
    color:'#000',
      paddingLeft:3,
  },
  InfoView:{
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row',
  },
  Button:{
      width:'80%',
      color:'#000',
      height:35,
      backgroundColor:'green',
      borderRadius:20,
      justifyContent:'center',
      alignItems:'center'
      
        },
        ButtonText:{
          color:"#fff",
          fontWeight:'bold',
       },

});