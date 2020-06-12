import React,{useContext} from 'react';
import {View,Text,StyleSheet,FlatList,Button,TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';

const IndexScreen =({navigation})=>{
    const {state,addBlogPost,deleteBlogPost} =useContext(Context);

    return(
        <View style={styles.main}>
            
         <View>
            <FlatList
             data={state}
             keyExtractor={(blogPost)=>blogPost.title}
           
            renderItem={({item})=>{
                return <TouchableOpacity  onPress={()=>navigation.navigate('Show',{id:item.id})}>
                 <View style={styles.row}>
                    <Text style={styles.title}  >{item.title}</Text>
                    <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                    <Entypo name="trash" size={30} color="black" />
                    </TouchableOpacity>
                    </View>
                    </TouchableOpacity>
            } }/>
            </View>
        </View>

    );

};

IndexScreen.navigationOptions=({navigation})=>{
     return {
         headerRight:()=><TouchableOpacity onPress={()=>navigation.navigate('Create')}>
             <Feather name="plus" size={35} color="black" />
             </TouchableOpacity>
     };
};

const styles=StyleSheet.create({
    main:{
        backgroundColor:'#E2E6FF'
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:15,
        borderTopWidth:1,
        paddingHorizontal:10,
        borderColor:'grey',
      
    },
    title:{
    fontSize:20
    }

 
});

export default IndexScreen;