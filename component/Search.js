import { Pressable,ImageBackground,TouchableOpacity,Image,StyleSheet,TextInput, Button, View,Text, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Nav from './Views/Nav';
import HomeSearch from './Views/HotelSearch';
import HotelCard from './Views/HotelCard';
import { useState,useEffect} from 'react';
import firebase from 'firebase';
export default function Search() {
const [Location,SetLocation]= useState("");
const [search,setSearch] = useState(false);


const [hotels,setHotels] = useState([]);
  useEffect (()=>{
    if(Location==""){
      firebase.firestore().collection('Hotel')
      .get()
      .then(results=> results.docs)
      .then(docs => docs.map(doc => ({
          id:docs.id,
       details:doc.data().details,
       hotelName:doc.data().hotelName,
       location:doc.data().location,
       price:doc.data().price,
       url:doc.data().url
      })))
      .then(hotels => setHotels(hotels)
         
      );
  
    }
    
   
  },[]);

function OnLocationChange(value){
  SetLocation(value);
  if(value==""){
    firebase.firestore().collection('Hotel')
    .get()
    .then(results=> results.docs)
    .then(docs => docs.map(doc => ({
        id:docs.id,
     details:doc.data().details,
     hotelName:doc.data().hotelName,
     location:doc.data().location,
     price:doc.data().price,
     url:doc.data().url
    })))
    .then(hotels => setHotels(hotels)
       
    );

  }
}
function searchLocation(){
  firebase.firestore().collection('Hotel')
  .where('location','==',Location)
  .get()
  .then(results=> results.docs)
  .then(docs => docs.map(doc => ({
      id:docs.id,
   details:doc.data().details,
   hotelName:doc.data().hotelName,
   location:doc.data().location,
   price:doc.data().price,
   url:doc.data().url
  })))
  .then(hotels => setHotels(hotels)
     
  );
}
  return (
    <View style={styles.container}>
   <Nav text={'Hotel Search'}></Nav>

    <View style= {styles.Search}> 
      <TextInput style ={styles.SearchInput}  onChangeText={OnLocationChange} placeholder='Search Hotel By Location'></TextInput>

      <Ionicons  name='search' style={styles.icon} color={'#000'} size={25} onPress={searchLocation}></Ionicons>
      </View>
    <View style ={styles.ButtomView}>
    <View>
    {
        hotels?.map( hotel=>
<View style={styles.containersearch}> 
         
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
             <TouchableOpacity style={styles.Button} >
     <Text style={styles.ButtonText}>Book Now</Text>
  </TouchableOpacity>
             </View>
         </View>
        
    
    

    </View>
        )

    }
</View>
   
    
    
    </View>
       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop:40,
    backgroundColor:'#fff'
  },

  TopView: {
    width:'100%',
    height:'8%',
    flex:1,
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:'green'
  },
  icon:{
alignItems:'center',
alignContent:'center',
padding: 5,
  },
  SearchInput: {
    width:'90%',
    color:'#000',
    borderRadius:20,
    height:45,
    backgroundColor:'#fff',
    borderWidth: 1,
    padding: 10,
  },
  ButtonHome:{
    color:'#fff',
    fontWeight:'bold',
   fontSize:25,
   width:'90%',
   paddingLeft:10
 },
  Search:{
   flex:1,
   flexDirection:'row',
   alignItems:'center',
   margin:10,
  },
  ButtomView:{
    width:'100%',
    height:'82%',
  },
  containersearch: {
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
