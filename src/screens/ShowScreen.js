import React ,{useContext} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
const ShowSScreen =({navigation})=>{
    const {state}=useContext(Context);

    const blogPost=state.find((blogPost)=>blogPost.id===navigation.getParam('id'));
    return <View>
             <Text style={styles.t1}>{blogPost.title}</Text>
              <Text style={styles.t2}>{blogPost.content}</Text>
           </View>
};

ShowSScreen.navigationOptions=({navigation})=>{
  return{
       headerRight:(
       <TouchableOpacity  onPress={()=>navigation.navigate('Edit',{id:navigation.getParam('id')})}>
             <Entypo name="edit" size={40} color="black" />
       </TouchableOpacity>
       )
       
  };
};

const styles=StyleSheet.create({
    t1:{
        fontSize:26,
        fontWeight:'bold',
        marginBottom:15,
        color:'#030B3B',
        textDecorationLine: 'underline'
    },
    t2:{
fontSize:20
    }
})
export default ShowSScreen;