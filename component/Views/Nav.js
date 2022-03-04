import { Pressable,ImageBackground,TouchableOpacity,Image,StyleSheet,TextInput, Button, View,Text, Alert ,Platform} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
const Nav = (props) => {
    return (< View style ={styles.TopView}>
 
        <Text style={styles.ButtonHome} >{props.text} </Text> 
        <Ionicons name='notifications' color={'#fff'} size={25}></Ionicons>
    
   </View>   );
}
 
const styles = StyleSheet.create({
   
  
    TopView: {
      width:'100%',
      height:60,
      flex:1,
      alignItems:'center',
      flexDirection:'row',
      backgroundColor:'green',
    },
  
   
    ButtonHome:{
       color:'#fff',
       fontWeight:'bold',
      fontSize:25,
      width:'90%',
      paddingLeft:10
    },
  
  });
  
export default Nav;