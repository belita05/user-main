import { Pressable,ImageBackground,TouchableOpacity,Image,StyleSheet,TextInput, Button, View,Text, Alert ,Platform} from 'react-native';
import firebase from 'firebase';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useState,useEffect } from 'react';
import DatePicker from 'react-native-datepicker';
import Nav from './Views/Nav';
import Search from './Search';
import {useNavigation} from '@react-navigation/native'
export default function Home() {
  const navigation = useNavigation();
  const [startDate, setStartDate] = useState('');
  const[adults,setAdults] = useState("2");
  const[child,setChild] = useState("0");
  const[nights,setNights]=useState("1");
  const[Town,setTown]= useState("");

 const SearchHotel =() =>{
    navigation.navigate("Available",{
      date:startDate,
      adults:adults,
      child:child,
      nights:nights,
      Town:Town
    })    
  }

  const Validation = () =>{
    var form_inputs = [startDate,adults,child,nights,Town];
if(form_inputs.includes('') || form_inputs.includes(undefined)){
 Alert.alert("Error","Please Fill In All The Information");
  return ;
}if(adults=='0'){
  Alert.alert("Error","They Can't 0 Adults In The Room")
return;
}  
if(nights=='0'){
  Alert.alert("Error","Nights Cant be zero")
return;
} 
 
SearchHotel();
  }

  return (
    <View style={styles.container}>
<Nav text={'Home'}></Nav>
 <View style ={styles.ButtomView}>
 <Text style={styles.Label}>Where Are Your Going</Text>
<TextInput

value={Town}
        style={styles.input}
        keyboardType="default"

        onChangeText={(Town) => {setTown(Town)}}
      />
       <Text style={styles.Label}>Check In Date</Text>
      <DatePicker
      style={styles.inputDate}
        date={startDate}
        mode="date"
        // placeholder="check in"
        format="YYYY-MM-DD"
        // minDate="0"
        // maxDate="0"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
  
        onDateChange={(startDate) => {setStartDate(startDate)}}
      />
      
      <Text style={styles.Label}>How Many Nights Are You Planning On Staying </Text>
<TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={2}
        value ={nights}
        onChangeText={(nights) => {setNights(nights)}}
      />
       <Text style={styles.Label}>Adults</Text>
<TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={1}
        value= {adults}
        onChangeText={(adults) => {setAdults(adults)}}
      />
       <Text style={styles.Label}>Children Age: 0 to 15</Text>
<TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={1}
        value= {child}
        onChangeText={(child) => {setChild(child)}}
      />
<TouchableOpacity  style={styles.Button} onPress={Validation} >
     <Text style={styles.ButtonText}>Get Available Hotels</Text>
  </TouchableOpacity>


 </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    marginTop:40

  },
  Label:{
    color: '#000',
    fontSize: 15,
    margin:5,
    width:'85%',
    fontWeight: "bold",
  },inputDate:{
    width:'90%',
    color:'#000',
    marginBottom:10,
    height:50,
    backgroundColor:'#fff',
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

  ButtomView:{
    width:'100%',
    height:'92%',
    display:'flex',
alignItems:'center'
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
  ButtonHome:{
     color:'#fff',
     fontWeight:'bold',
    fontSize:25,
    width:'90%',
    paddingLeft:10
  },
  ButtonText:{
    color:"#fff",
    fontWeight:'bold',
    fontSize:16  },

});
