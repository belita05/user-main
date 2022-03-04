import { StatusBar } from 'expo-status-bar';
import { Pressable,ImageBackground,TouchableOpacity,Image,StyleSheet,TextInput,ScrollView, Button, View,Text, Alert ,Platform} from 'react-native';

import Lodge from './../assets/lodge3.jpg'
import Ionicons from 'react-native-vector-icons/Ionicons'
export default function RoomsView() {
  return (
    <View style ={styles.container} > 
    <Image style={styles.logo} source={Lodge}></Image>
    <View style={styles.buttomView}>
    <Text style = {styles.Hotelname}>Hotel name</Text>
    <View style={styles.HotelLocationView} >
    <Ionicons name='location' color={'grey'} size={20}></Ionicons>
    <Text style= {styles.HotelLocation}>Location</Text>
    </View>
    <View style={styles.HotelLocationView} >
    <Ionicons name='cash-outline' color={'grey'} size={20}></Ionicons>
    <Text style= {styles.HotelLocation}>Cost</Text>
    </View>

    <View>
    <Text style = {styles.Hotelname}>Hotel Offers</Text>
    <View style={styles.OffersView}>
    <View style={styles.Offers}>
    <Ionicons name='bed' color={'#fff'} size={20}></Ionicons>
        <Text style={styles.Info}>beds</Text>
    </View>
    <View style={styles.Offers}>
    <Ionicons name='wifi' color={'#fff'} size={20}></Ionicons>
        <Text style={styles.Info}>Free Wifi</Text>
    </View>
    <View style={styles.Offers}>
    <Ionicons name='water' color={'#fff'} size={20}></Ionicons>
        <Text style={styles.Info}>Shower</Text>
    </View>
    <View style={styles.Offers}>
    <Ionicons name='restaurant' color={'#fff'} size={20}></Ionicons>
        <Text style={styles.Info}>Breakfast</Text>
    </View>
    </View>
  
    <Text style = {styles.Hotelname}>About</Text>
    <Text style={styles.Info}>info</Text>
    </View>
    
    
   

    
    </View>
    <View style={styles.buttonViewLayout}>
 <TouchableOpacity style={styles.Button} >
<Text style={styles.ButtonText}>Book Now</Text>
</TouchableOpacity>
    </View>
</View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff'
  },Offers:{
 width:'24%',
 alignItems:'center',
 alignContent:'center',
 padding:10,
 margin:2,
 backgroundColor:'green',
 borderRadius:20

  },
  logo:{
      width:'100%',
      height:"55%",
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
  
      resizeMode:'cover'
  },
  Hotelname:{
   color:'black',
   marginLeft:10,
   fontWeight:'bold',
   fontSize:16,
   padding:2,
   textDecorationLine: 'underline'
  },HotelLocationView:{
    
      flexDirection:'row',
      marginLeft:5,
  }
  ,
  HotelLocation:{
      marginLeft:2,
   color:'grey'
  },Info:{
      color:'#fff'
  },
  InfoView:{
    
      width:'20%',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row',
  },OffersView:{
    margin:10,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
  },
  Button:{

      width:'85%',
      color:'#000',
      height:50,
      backgroundColor:'green',
      borderRadius:30,
      justifyContent:'center',
      alignItems:'center',
    
        },
        ButtonText:{
          color:"#fff",
          fontWeight:'bold',
          fontSize:17
       },buttomView:{
        width:'100%',
        height:'40%',
        display:'flex',
        flex:1,
        backgroundColor:'#fff'
    


       },buttonViewLayout:{
        alignItems:'center',
        display:'flex',
        backgroundColor:'#fff',
        marginBottom:10,
        justifyContent:'flex-end',
        alignItems:'center'
        
       }
});