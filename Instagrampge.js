import React, { Component } from 'react'
import { Text, View,StyleSheet ,Image} from 'react-native'

export default class Instagrampge extends Component {
    render() {
        return (
            <View style={styles.container}>
            
            <View>
            <Text style={styles.tt}> Instagram </Text>
            </View>
            
            <View style={{flexDirection:'row'}}>
                  <Image style={styles.img} source={require('./assets/Images/random.jpg')}/>
                  <Image  style={styles.img1} source={require('./assets/Images/boy.jpg')}/>
                  <Image style={styles.img2} source={require('./assets/Images/cat.jpg')}/>
                  <Image style={styles.img3} source={require('./assets/Images/random.jpg')}/>

            </View>

            <View style={{flexDirection:'row'}}>
                  <Text style={styles.txt}>Your Story</Text>
                  <Text style={styles.txt1}>Usman</Text>
                  <Text style={styles.txt2}>Shahzan</Text>
                  <Text style={styles.txt3}>Hoope</Text>
                  
            </View>

            <View style={{ flexDirection:'row'}}>
            <Image style={styles.profile} source={require('./assets/Images/cat.jpg')}/>
            <View style={{flexDirection:'column'}}>
            <Text style={styles.txt4}>Shahzan Ali</Text>
            <Text style={styles.txt5}>Rahim Yar Khan</Text>
            </View>
            </View>  

            <View>
            <Image style={styles.img4} source={require('./assets/Images/im.jpeg')}/>
            </View>          
            
            
            
            </View>
        )

    }
}
 const styles=StyleSheet.create({
container:{
    flex:1,backgroundColor:'white'
}, 
   tt:{
    color:'black',fontSize:25,marginTop:20
},
img:{
    marginTop:20,
    marginLeft:20,
    height:70,width:70,
    borderRadius:35
    
    },
img1:{
      marginLeft:20,
      marginTop:22,
      height:70,width:70,
      borderRadius:35
},  
img2:{
    marginLeft:20,
    marginTop:22,
    height:70,width:70,
    borderRadius:35
},
img3:{
    marginLeft:20,
    marginTop:22,
    height:70,width:70,
    borderRadius:35
},  
txt:{
        marginTop:10,
        marginLeft:20,
},
txt1:{
    marginTop:10,
    marginLeft:35,
},
txt2:{
    marginTop:10,
    marginLeft:44,
},
txt3:{
    marginTop:10,
    marginLeft:41,
},
profile:{
    marginLeft:20,
    marginTop:22,
    height:70,width:70,
    borderRadius:35
},
txt4:{
    marginTop:35,
    marginLeft:15,
    color:'black',
},
txt5:{
    marginTop:5,
    marginLeft:15,
    color:'black',
    
},
img4:{
    marginTop:10,
    height:400,
    width:400

}

 })
 
