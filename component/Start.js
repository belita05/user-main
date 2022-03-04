
import hotel from './../assets/hotel.jpg'
import Logo from './../assets/Hotel.png'
import SubLogo from'./../assets/comfort.png'
import {useNavigation} from '@react-navigation/native'
import { Pressable,ImageBackground,TouchableOpacity,Image,StyleSheet,TextInput, Button, View,Text, Alert } from 'react-native';
export default function Start() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
<ImageBackground source={hotel} resizeMode="cover" style={styles.image}>
 <View style ={styles.TopView}>
  <Image style={styles.logo} source={Logo}>

  </Image>
  <Image style={styles.logo} source={SubLogo}>

</Image>
 </View>
 <View style ={styles.ButtomView}>
  <TouchableOpacity onPress={()=> navigation.navigate("Login")}  style={styles.Button} >
     <Text style={styles.ButtonText}>Get Started</Text>
  </TouchableOpacity>
 </View>
</ImageBackground>
    

    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40
  },
  image: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  
  },
  TopView: {
    width:'100%',
    height:'40%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  ButtomView:{
    width:'100%',
    height:'60%',
    display:'flex',
justifyContent:'flex-end',
alignItems:'center'
  },
  logo:{
    width:'70%',
    resizeMode:'contain',
  },
  Button:{
width:'90%',
color:'#000',
height:50,
borderRadius:5,
backgroundColor:'#378CE8',
display:'flex',
margin:20,
justifyContent:'center',
alignItems:'center'

  },
  ButtonText:{
    color:"#fff",
    fontWeight:'bold',
    fontSize:16  }
});
