import React, { Component } from 'react'
import { Text,StatusBar, View,ScrollView,TextInput,Image,Button,Alert,TouchableOpacity} from 'react-native'

export default class SignUpForm extends Component{

    render() {

        return (

          <ScrollView>
    
           <View style={{ flex:1,backgroundColor:"white",alignItems:'center'}}>
           <Text style={{marginTop:30,fontSize:25,color:'black'}}>Login Screen</Text>
           <Image style={{marginTop:30}}
           source={require('./assets/reactlogo.png')}/>
           <Text style={{fontSize:21,color:'black' ,marginTop:50}}> Wellcome to ReactNative</Text>
           <TextInput  placeholder="enter email" style={{borderRadius:20,padding:15,marginTop:50 ,borderWidth:3,height:60,width:'80%',borderColor:'black'}}/>
           <TextInput placeholder="enter password" style={{marginBottom:20, borderRadius:20, padding:15,marginTop:15,borderWidth:3,height:60,width:'80%',borderColor:'black'}}/>
           {/* <Button title="Submit" onPress={() =>alert('Successfully Login')}/> */}
        <View style={{alignSelf:'center'}}>
              <TouchableOpacity style={{height:30,width:150,backgroundColor:'red'}}>
              <Text sty>pres</Text>
              </TouchableOpacity>
           
           </View>
           <Text style={{marginTop:80}}>Lost Your Password?</Text>
           <Text style={{marginTop:30,marginBottom:25}}>Back To My ReactNative Site</Text>
           
           </View>
           </ScrollView>
           
           /* <View style={{marginTop:30, flex:1,backgroundColor:"white",alignItems:'center'}}>
           <Text style={{marginTop:30,marginBottom:30,fontSize:25,color:'black'}}>Login Screen</Text>
           <Image source={require('./assets/reactlogo.png')}/>
           <Text style={{fontSize:21,color:'black' ,marginTop:50}}> Wellcome to ReactNative</Text>
           <TextInput placeholder="enter email" style={{padding:15,marginTop:50 ,borderWidth:3,height:60,width:'80%',borderColor:'black'}}/>
           <TextInput placeholder="enter password" style={{ marginBottom:20,padding:15,marginTop:15,borderWidth:3,height:60,width:'80%',borderColor:'black'}}/>
           <Button style={{}} title="Submit" onPress={() =>alert('Successfully Login')}/>
           <Text style={{marginTop:80}}>Lost Your Password?</Text>
           <Text style={{marginTop:30,marginBottom:25}}>Back To My ReactNative Site</Text>
           </View>

           <View style={{marginTop:30, flex:1,backgroundColor:"white",alignItems:'center'}}>
           <Text style={{marginTop:30,marginBottom:30,fontSize:25,color:'black'}}>Login Screen</Text>
           <Image source={require('./assets/reactlogo.png')}/>
           <Text style={{fontSize:21,color:'black' ,marginTop:50}}> Wellcome to ReactNative</Text>
           <TextInput  placeholder="enter email" style={{borderRadius:20,padding:15,marginTop:50 ,borderWidth:3,height:60,width:'80%',borderColor:'black'}}/>
           <TextInput placeholder="enter password" style={{marginBottom:20,borderRadius:20, padding:15,marginTop:15,borderWidth:3,height:60,width:'80%',borderColor:'black'}}/>
           <Button style={{}} title="Submit" onPress={() => alert('Successfully Login')}/>
           <Text style={{marginTop:80}}>Lost Your Password?</Text>
           <Text style={{marginTop:30,marginBottom:25}}>Back To My ReactNative Site</Text>
           </View> */
          
           
          )
    }
 

}
