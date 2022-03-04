import { Pressable,ImageBackground,TouchableOpacity,Image,StyleSheet,TextInput, Button, View,Text, Alert ,Platform} from 'react-native';
import Lodge from './../../assets/lodge3.jpg'
import Ionicons from 'react-native-vector-icons/Ionicons'
import firebase from 'firebase';
import { useEffect,useState} from 'react';
import {useNavigation} from '@react-navigation/native'
const Home = (props) => {
  const [hotels,setHotels] = useState([]);
  const navigation = useNavigation();
const Town = props.Town 
  useEffect (()=>{
    firebase.firestore().collection('Hotel')
    .where('location','==',Town)
    .get()
    .then(results=> results.docs)
    .then(docs => docs.map(doc => ({
        id:doc.id,
     details:doc.data().details,
     hotelName:doc.data().hotelName,
     location:doc.data().location,
     price:doc.data().price,
     url:doc.data().url
    })))
    .then(hotels => setHotels(hotels)
       
    );

  },[]);


    return (
<View>
    {
        hotels?.map( hotel=>
<View style ={styles.container} > 
         
         <Image style={styles.logo} source={{uri: hotel.url}}></Image>
         <Text style = {styles.Hotelname}>{hotel.hotelName}</Text>
         <View style={styles.HotelLocationView} >
         <Ionicons name='location' color={'grey'} size={15}></Ionicons>
         <Text style= {styles.HotelLocation}>{hotel.location}</Text>
         </View>
         <View style={styles.HotelLocationView} >

             <View style={styles.InfoView} >
             <Ionicons name='cash-outline' color={'grey'} size={15}></Ionicons>
             <Text style={styles.Info } >Starting Price : R {hotel.price}</Text>
             </View>
             <View style={styles.InfoView}>
             <Ionicons name='star' color={'grey'} size={15}></Ionicons>
             <Text style={styles.Info}>5.0</Text>
             </View>
             <View style={styles.InfoView}>
             <TouchableOpacity style={styles.Button} onPress={()=> navigation.navigate("HotelView",{key:hotel.id})} >
     <Text style={styles.ButtonText}>Book Now</Text>
  </TouchableOpacity>
             </View>
         </View>
        
    
    

    </View>
        )

    }
</View>

    
    
    );
}
 
export default Home;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ecf0f1',
      margin:5,
  
      borderRadius:10,
    },
    logo:{
        width:'100%',
        height:150,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    
        resizeMode:'cover'
    },
    Hotelname:{
        marginTop:5,
     color:'black',
     marginLeft:5,
     fontWeight:'bold',
     fontSize:25,
    },HotelLocationView:{
        flexDirection:'row',
        marginLeft:5,
        paddingBottom:5,
    }
    ,
    HotelLocation:{
        marginLeft:2,
     color:'grey'
    },Info:{
        paddingLeft:3,
    },
    InfoView:{
      
        width:'32%',
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
         }
});