import { StatusBar } from 'expo-status-bar';
import hotel from './../assets/hotel.jpg'
import profile from './../assets/profile.png'
import { useState,useEffect } from 'react';

import {useNavigation} from '@react-navigation/native'
import { Pressable,ImageBackground,TouchableOpacity,Image,StyleSheet,TextInput, Button, View,Text, Alert } from 'react-native';
import FormError from './Response/FormError';
import FormApprove from './Response/FormApprove';
import firebase from 'firebase';

export default function Profile() {
  const navigation = useNavigation();
  const [LName,setLname] = useState('');
  const [FName,setFname] = useState('');
  const [Phone,setPhone] = useState('');
  const [Email,setEmail] = useState('');
  const [ErrMessage,SetErrMessage] = useState('');
  const[displayFormErr,setdisplayFormErr] = useState(false);
  const [successMessage,SetsuccessMessage] = useState('');
  const [isLoading,setisLoading] = useState(false); 
  


  
useEffect (() =>{
   
  firebase.database()
  .ref(`/users/${firebase.auth().currentUser.uid}`)
  .once('value')
  .then(snapshot => {
    const data = snapshot.val();
  
    setFname(data['fname']);
    setLname(data['lname']);
    setPhone(data['phone']);
    setEmail(data['email']);
  });

},[])

const ResetPassword = () =>{
  setisLoading(true);
  firebase.auth().sendPasswordResetEmail(Email)
  .then(()=>{
    setisLoading(false)
    Alert.alert("Password Reset","A Reset Password Link Has Been Send To Your Email ");
    
  }).catch(err => {
    setisLoading(false);
    SetErrMessage(err.message);
    setdisplayFormErr(true);
  })
}

const Validation = () =>{
  var form_inputs = [Email,FName,Phone,LName];

if(form_inputs.includes('') || form_inputs.includes(undefined)){
SetErrMessage("Please Fill In All Fields");
return setdisplayFormErr(true);  
}else{
  setisLoading(true);
  Update();
}
}
const Update = () =>{
  firebase.database()
  .ref(`/users/${firebase.auth().currentUser.uid}`)
  .update({
   fname:FName,
   lname:LName,
   phone:Phone

  }).then(()=> {
Alert.alert("Update","Your Profile was successfully Updated");
setisLoading(false);
  }).catch(err => {
    setisLoading(false);
    SetErrMessage(err.message);
    setdisplayFormErr(true);
  })
}

 
  
  function OnLnameChange(value){
    setLname(value);
}
function OnFnameChange(value){
    ;setFname(value);
}
function OnPhoneChange(value){
    setPhone(value);
};

const Logout = () => {
  navigation.navigate('Login')
  firebase.auth().signOut();
};
return (

  <View style={styles.container}>

<View style ={styles.TopView}>
<Text style={styles.Heading}>Update Your Details</Text>
<Image style={styles.logo} source={profile}>

</Image>

</View>
<View style ={styles.ButtomView}>
<Text style={styles.Label}>First Name</Text>
<TextInput
        style={styles.input}
        value={FName}
        keyboardType="default"
        onChangeText={OnFnameChange}
      />
      <Text style={styles.Label}>Last Name</Text>
<TextInput
        style={styles.input}
        keyboardType="default"
        value={LName}
        onChangeText={OnLnameChange}
      />
      <Text style={styles.Label}>Phone Number</Text>
<TextInput
        style={styles.input}
        maxLength={10}
        keyboardType="numeric"
        value={Phone}
        onChangeText={OnPhoneChange}
      />
    <Text style={styles.Label}>Email Address</Text>
<TextInput
        style={styles.input}
        keyboardType="default"
        value={Email}
        editable = {false}
   
      />
<TouchableOpacity onPress={ResetPassword}  style={styles.ButtonPassword} >
   <Text style={styles.ButtonText}>Reset Password</Text>
</TouchableOpacity>
<TouchableOpacity onPress={Validation}  style={styles.Button} >
   <Text style={styles.ButtonText}>Update Infomation</Text>
</TouchableOpacity>
<TouchableOpacity onPress={Logout}  style={styles.ButtonLogout} >
     <Text style={styles.ButtonText}>Logout</Text>
  </TouchableOpacity>
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
     

  </View>
 
)


}
const styles = StyleSheet.create({
  container: {
backgroundColor:'#fff',
    flex: 1,
    marginTop:40
  },
  Heading:{
    color: "#000",
    fontSize: 30,
    lineHeight: 50,
    width:'85%',
    margin:5,
    fontWeight: "bold",
    textAlign: 'center',

  },
  Label:{
    color: '#000',
    fontSize: 15,
    margin:1,
    width:'85%',
    fontWeight: "bold",
    

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
    paddingTop:40,
    justifyContent:'center',
    alignItems:'center'
  },
  ButtomView:{
    width:'100%',
    height:'70%',
    display:'flex',
justifyContent:'flex-end',
alignItems:'center'
  },
  logo:{
    width:'50%',
    resizeMode:'contain',
  },
  input: {
    width:'90%',
    color:'#000',
    borderRadius:5,
    height:50,
    backgroundColor:'#fff',
    marginBottom:10,
    borderWidth: 1,
    padding: 10,
  },
  Button:{
width:'90%',
color:'#000',
height:50,
borderRadius:60,
backgroundColor:'#2B39EB',
display:'flex',
marginBottom:5,
justifyContent:'center',
alignItems:'center'

  },
  ButtonLogout:{
    width:'90%',
    color:'#000',
    height:50,
    borderRadius:60,
    backgroundColor:'green',
    display:'flex',
    marginBottom:5,
    justifyContent:'center',
    alignItems:'center'
    
      },
  ButtonPassword:{
    width:'90%',
    color:'#000',
    height:50,
    borderRadius:60,
    backgroundColor:'#378CE8',
    display:'flex',
    marginBottom:5,
    marginTop:15,
    justifyContent:'center',
    alignItems:'center'
    
      },
  ButtonText:{

    color:'#fff',
    fontWeight:'bold',
    fontSize:16  }
});
