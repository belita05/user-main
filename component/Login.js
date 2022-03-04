
import React, { useState , useEffect} from 'react';
import hotel from './../assets/hotel.jpg'
import Logo from './../assets/Hotel.png'
import {useNavigation} from '@react-navigation/native'
import SubLogo from'./../assets/comfort.png'
import { auth } from '../firebase';
import FormError from './Response/FormError';
import firebase from 'firebase';
import FormApprove from './Response/FormApprove';
import { Route } from '@react-navigation/native';
import { Pressable,ImageBackground,TouchableOpacity,Image,StyleSheet,TextInput, Button, View,Text, Alert } from 'react-native';
export default function Login(){

    const navigation = useNavigation();
    const [Email,setEmail] = useState('');
    const [Password,setPassword] = useState('');
    const [user, setUser] = useState({});
    const [ErrMessage,SetErrMessage] = useState('');
    const[displayFormErr,setdisplayFormErr] = useState(false);
    const [successMessage,SetsuccessMessage] = useState('');
    const [isLoading,setisLoading] = useState(false); 

function OnPassChange(value){
    setPassword(value);
}
function OnEmailChange(value){
    setEmail(value);
}

const Validation = () =>{
  var form_inputs = [Email,Password];

if(form_inputs.includes('') || form_inputs.includes(undefined)){
SetErrMessage("Please Fill In All Fields");
return setdisplayFormErr(true);  
}
setisLoading(true);
firebase.auth().signInWithEmailAndPassword(Email,Password).then(() =>{
  navigation.navigate('Test', {name: "asf", email: ""})
  setisLoading(false);
}).catch(err => {
  setisLoading(false);
  SetErrMessage(err.message);
  setdisplayFormErr(true);
})

}
  return (
    <View style={styles.container}>
    <ImageBackground source={hotel} resizeMode="cover" style={styles.image}>
     <View style ={styles.TopView}>
      <Image style={styles.logo} source={Logo}>
    
      </Image>
      <Image style={styles.logo} source={SubLogo}/>
     </View>
     <View style ={styles.ButtomView}>
     <Text style={styles.Heading}>Sign In Here</Text>
     <TextInput
     value={Email}
        style={styles.input}
        keyboardType="email-address"
        placeholder="Enter Your Email Address"
        onChangeText={OnEmailChange}
      />
      <TextInput
      value={Password}
      onChangeText={OnPassChange}
        style={styles.input}
        placeholder="Enter your Password"
        maxLength={10}
        secureTextEntry={true}
      />

      <TouchableOpacity onPress={Validation}style={styles.Button} >
         <Text style={styles.ButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate("Register")}  style={styles.ButtonReg} >
         <Text style={styles.ButtonText}>Create An Account</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Forgort Password Click Here</Text>
     </View>
     {displayFormErr == true?
    <FormError   hideErrOverlay= {setdisplayFormErr} err = {ErrMessage} />
    :
    null
     }
     {isLoading == true?
  <FormApprove  />
    :
  
    null
    }
     
    </ImageBackground>
        
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:40
    },
    input: {
        width:'90%',
        color:'#000',
        borderRadius:5,
        height:50,
        backgroundColor:'#fff',
        marginBottom:5,
        borderWidth: 1,
        padding: 10,
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

    justifyContent:'flex-end',
alignContent:'center',
alignItems:'center'
    },
    logo:{
      width:'70%',
      resizeMode:'contain',
    },
    Button:{
  width:'80%',
  color:'#fff',
  height:50,
  borderRadius:5,
  backgroundColor:'#378CE8',
  display:'flex',
marginTop:2,
  justifyContent:'center',
  alignItems:'center'
  
    },    ButtonReg:{
        width:'80%',
        color:'#fff',
        height:50,
        borderRadius:5,
        backgroundColor:'#2B39EB',
        display:'flex',
      marginTop:5,
      marginBottom:10,
        justifyContent:'center',
        alignItems:'center'
        
          },
    ButtonText:{
        color:'#fff',
      fontWeight:'bold',
      fontSize:16  },
      text: {
        color: "white",
        fontSize: 16,
        lineHeight: 50,
        width:'100%',
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
      },
      Heading:{
        color: "white",
        fontSize: 30,
        fontWeight:200,
        lineHeight: 50,
        width:'85%',
        fontWeight: "bold",
        textAlign: 'left',

      }
  });
  