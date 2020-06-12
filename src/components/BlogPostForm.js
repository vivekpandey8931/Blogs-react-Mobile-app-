import React , {useContext,useState} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {Context} from '../context/BlogContext';
import { TextInput } from 'react-native-gesture-handler';

const BlogPostForm =({onSubmit, initialValues})=>{
    const [title,setTitle]=useState(initialValues.title);
    const [content, setContent]=useState(initialValues.content);
    return <View>
             <Text style={styles.label}>Enter Title:</Text>
                 <TextInput style={styles.input} value={title} onChangeText={(text)=>setTitle(text)}/>
             <Text style={styles.label}>Enter Content:</Text>
                 <TextInput 
                    style={styles.input} value={content} onChangeText={(text)=>setContent(text)} />
            <Button 
               onPress={()=>onSubmit(title,content)}
               title="Save Blog Post" />
           </View>
};

BlogPostForm.defaultProps={
    initialValues:{
        title:'',
        content:''
    }
};

const styles =StyleSheet.create({
   
    input:{
        fontSize:18,
        borderWidth:1,
        borderColor:'black',
        marginBottom:15,
        padding:5,
        margin:5,
        justifyContent:'flex-start'
    },
    label:{
        fontSize:20,
        marginBottom:10,
        marginLeft:5

    }
});
export default BlogPostForm;