
import React from "react";
import { Overlay } from "react-native-elements";
import Error from './../../assets/error.png';
import { Pressable,ImageBackground,TouchableOpacity,Image,StyleSheet,TextInput, Button, View,Text, Alert } from 'react-native';

const FormError= (props) =>{
    return(
    <Overlay overlayStyle={styles.Overlay} isVisible={true} onBackdropPress={()=>props.hideErrOverlay(false)}>
        <Image style ={styles.Logo} source = {Error}>

        </Image>

        <Text style={styles.ErrorText}>{props.err}</Text>
        
        <TouchableOpacity style={styles.Button} onPress= {() => props.hideErrOverlay(false)} >
     <Text style={styles.ButtonText}>Dismiss</Text>
  </TouchableOpacity>
    </Overlay>
    )
}
export default FormError;
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