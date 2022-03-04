
import React from "react";
import { Overlay } from "react-native-elements";
import Approve from './../../assets/correct.png';
import {useNavigation} from '@react-navigation/native'
import { Pressable,ImageBackground,TouchableOpacity,Image,StyleSheet,TextInput, Button, View,Text, Alert,ActivityIndicator } from 'react-native';

const FormApprove= (props) =>{
    const navigation = useNavigation();
    return(
        props.successMessage ?
    <Overlay overlayStyle={styles.Overlay} isVisible={true} >
        <Image style ={styles.Logo} source = {Approve}></Image>
<Text style={styles.ErrorText}>You Have SuccessFully Registered</Text>

<TouchableOpacity style={styles.Button}  onPress={()=> navigation.navigate("Login")} >
<Text style={styles.ButtonText}>Go To Login</Text>
</TouchableOpacity>
    </Overlay>
    :
    <Overlay overlayStyle={styles.Overlay} isVisible={true} >
    <ActivityIndicator size={80} color ={"blue"}></ActivityIndicator>
</Overlay>
    )
}
export default FormApprove;
const styles = StyleSheet.create({
    Overlay:{
        width : '80%',
        height:250,
   display:'flex',
   alignItems:'center',
   justifyContent:'center'
    },
    Logo: {
        width :100,
        height : 100,
    },
    ErrorText :{
 color:'#000',
 fontSize : 20,
 textAlign:'center'
    },

    Button:{
        width:'80%',
        color:'#000',
        height:50,
        borderRadius:5,
        backgroundColor:'#2B39EB',
        display:'flex',
        margin:20,
        justifyContent:'center',
        alignItems:'center'
          },
          ButtonText:{
              color:'#fff',
            fontWeight:'bold',
            fontSize:16  }
})