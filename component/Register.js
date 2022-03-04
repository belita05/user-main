import { StatusBar } from 'expo-status-bar';
import hotel from './../assets/hotel.jpg'
import Logo from './../assets/Hotel.png'
import {useNavigation} from '@react-navigation/native'
import SubLogo from'./../assets/comfort.png'
import { auth } from '../firebase';
import React, { useState } from 'react';
import firebase from 'firebase';
import FormError from './Response/FormError';
import FormApprove from './Response/FormApprove';
import { Pressable,ImageBackground,TouchableOpacity,Image,StyleSheet,TextInput, Button, View,Text, Alert } from 'react-native';
export default function Register() {
    const navigation = useNavigation();
    const [LName,setLname] = useState('');
    const [FName,setFname] = useState('');
    const [Phone,setPhone] = useState('');
    const [Email,setEmail] = useState('');
    const [ErrMessage,SetErrMessage] = useState('');
    const [successMessage,setSuccessMessage] = useState('');
    const [Password,setPassword] = useState('');
    const [ConfirmPassword,setConfirmPassword] = useState('');
    const[displayFormErr,setdisplayFormErr] = useState(false);
    const [isLoading,setisLoading] = useState(false); 
    function OnLnameChange(value){
        setLname(value);
    }
    function OnFnameChange(value){
        setFname(value);
    }
    function OnPhoneChange(value){
        setPhone(value);
    }
    function OnEmailChange(value){
        setEmail(value);
    }
    function OnPassChange(value){
        setPassword(value);
    }
    function OnCpasswordChange(value){
        setConfirmPassword(value);
    }

    const RegisterUser = () => {
        setisLoading(false)
                    firebase.auth().createUserWithEmailAndPassword(Email, Password).then((result)=> {
                    
                        firebase.database().ref(`/users/${firebase.auth().currentUser.uid}`)
                            .set({      
                              fname:FName,
                              lname:LName,
                              phone:Phone,
                              email:Email,
                            }).then(() =>{
                              setSuccessMessage("Your Account Has Been Successfully Regitered");
                              setisLoading(false);

                            });

                    }).catch(err =>{
                      setisLoading(false);
                      SetErrMessage(err.message);
                      setdisplayFormErr(true);
                    })
              
          
        }
const Validation = () =>{
    var form_inputs = [FName,LName,Phone,Email,Password,ConfirmPassword];
    var Password_match = Password == ConfirmPassword;

if(form_inputs.includes('') || form_inputs.includes(undefined)){
 SetErrMessage("Please Fill In All The Information");
  return setdisplayFormErr(true);  
}
if (Password_match) 
{
  return RegisterUser();
}
if (!Password_match){
  SetErrMessage("Password Do Not Match");
  return setdisplayFormErr(true);  
}

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
     <Text style={styles.Heading}>Sign Up Here</Text>
     <Text style={styles.Label}>Enter Your First Name</Text>
     <TextInput
   value={FName}
   onChangeText={OnFnameChange}
        style={styles.input}
        keyboardType="default"
      
      />
        <Text style={styles.Label}>Enter Your Last Name</Text>
      <TextInput
       value={LName}
       onChangeText={OnLnameChange}
        style={styles.input}
        keyboardType="default"
        
      />
        <Text style={styles.Label}>Enter Your Phone Number</Text>
        <TextInput
          value={Phone}
          onChangeText={OnPhoneChange}
        style={styles.input}
        keyboardType="numeric"
        maxLength={10}

      />
       <Text style={styles.Label}>Enter Your Email Address</Text>
     <TextInput
       value={Email}
       onChangeText={OnEmailChange}
        style={styles.input}
        keyboardType="email-address"
      
      />
       <Text style={styles.Label}>Enter your Password</Text>
      <TextInput
        style={styles.input}
        value={Password}
       onChangeText={OnPassChange}
        maxLength={10}
        secureTextEntry={true}

      />
 <Text style={styles.Label}>Confirm your Password</Text>
      <TextInput
        value={ConfirmPassword}
        onChangeText={OnCpasswordChange}
        style={styles.input}
        maxLength={10}
        secureTextEntry={true}
      />

      <TouchableOpacity onPress={Validation}  style={styles.Button} >
         <Text style={styles.ButtonText}>Register Your Account</Text>
      </TouchableOpacity>

     
     </View>
     {displayFormErr == true?
    <FormError   hideErrOverlay= {setdisplayFormErr} err = {ErrMessage}/>
    :
    null
     }
  {isLoading == true?
  <FormApprove  />
    
    :
    successMessage == 'Your Account Has Been Successfully Regitered'?
    <FormApprove  hideErrOverlay= {setdisplayFormErr} successMessage = {successMessage}  ></FormApprove>
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
      height:'30%',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    ButtomView:{
      width:'100%',
      height:'70%',

    justifyContent:'flex-end',
alignContent:'center',
alignItems:'center'
    },
    logo:{
      width:'60%',
      resizeMode:'contain',
    },
    Button:{
  width:'80%',
  color:'#fff',
  height:50,
  borderRadius:20,
  backgroundColor:'#378CE8',
  display:'flex',
marginBottom:5,
  justifyContent:'center',
  alignItems:'center'
  
    },    ButtonReg:{
        width:'80%',
        color:'#fff',
        height:50,
        borderRadius:20,
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
      Label:{
        color: "white",
        fontSize: 15,
        margin:1,
        width:'85%',
        fontWeight: "bold",
        

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
  