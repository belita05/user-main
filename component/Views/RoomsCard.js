import { Pressable,ImageBackground,TouchableOpacity,Image,StyleSheet,TextInput, Button, View,Text, Alert ,Platform} from 'react-native';
import Lodge from './../../assets/lodge3.jpg'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Nav from './Nav';
import {useNavigation} from '@react-navigation/native'
const RoomsCard = (props) => {
    const navigation = useNavigation();
    return (
    <View style ={styles.container} > 
         <Image style={styles.logo} source={Lodge}></Image>
         <Text style = {styles.Hotelname}>Room Information</Text>
         <View style={styles.HotelLocationView} >
         <Ionicons name='cash-outline' color={'#000'} size={20}></Ionicons>
         <Text style= {styles.HotelLocation}>Price</Text>
         </View>
         <View style={styles.HotelLocationView} >

             <View style={styles.InfoView} >
             <Ionicons name='bed' color={'#000'} size={20}></Ionicons>
             <Text style={styles.Info } >Beds</Text>
             </View>
             <View style={styles.InfoView}>
             <Ionicons name='wifi' color={'#000'} size={20}></Ionicons>
             <Text style={styles.Info}>Wifi</Text>
             </View>
             <View style={styles.InfoView}>
             <Ionicons name='restaurant' color={'#000'} size={20}></Ionicons>
             <Text style={styles.Info}>breakfast</Text>
             </View>
             <View style={styles.InfoView}>
             <TouchableOpacity onPress={()=> navigation.navigate("RoomsView")}  style={styles.Button} >
     <Text style={styles.ButtonText}>View</Text>
  </TouchableOpacity>
             </View>
         </View>
        
    
    

    </View>
    
    );
}
 
export default RoomsCard;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ecf0f1',
      margin:10,
      borderRadius:5,
    },
    logo:{
        width:'100%',
        height:100,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    
        resizeMode:'cover'
    },
    Hotelname:{
        marginTop:5,
     color:'black',
     marginLeft:5,
     fontWeight:'bold',
     fontSize:15,
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
      
        width:'25%',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
    },
    Button:{
        width:'80%',
        color:'#000',
        height:35,
        backgroundColor:'green',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
        
          },
          ButtonText:{
            color:"#fff",
            fontWeight:'bold',
         }
});