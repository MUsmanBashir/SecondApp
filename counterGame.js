import React, { Component } from 'react'
import { Text, View,Button,style,Image,state,TouchableOpacity,Linking} from 'react-native'

export default class counterGame extends Component {


    constructor(props){
        super(props);
        this.state = {count : 0}
    
        this.M = {Message : " "}
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);   
  
      }
    
      increment(){
        this.setState({count : this.state.count + 1}) ;
        this.setState();
      }
    
      decrement() {
      this.setState({count : this.state.count - 1});
      this.setState();
      }
    
    render() {
        return (
            <View style={{alignItems:'center'}}>
            <Text style={{marginTop:60,fontSize:22,color:'black'}}>Wellcome TO Counter Game</Text>
            <Image style={{marginTop:40}} source={require('./assets/reactlogo.png')}/> 
            <Text style = {{color:'black',margin: 45, fontSize: 25}}>Your total Win Coin={this.state.count}</Text>
            <View style={{alignSelf:'center'}}>
              <TouchableOpacity onPress={this.increment} style={{height:30,width:150,backgroundColor:'skyblue'}}>
              <Text style={{textAlign:'center',marginTop:5}}>WIn Coin</Text>
              </TouchableOpacity>
           </View>

           <View style={{alignSelf:'center'}}>
              <TouchableOpacity onPress={this.decrement} style={{marginTop:20,height:30,width:150,backgroundColor:'skyblue'}}>
              <Text style={{textAlign:'center',marginTop:5}}>Lose Coin</Text>
              </TouchableOpacity>
           </View>
           <Text style={{color:'black',marginTop:50,fontSize:18}}>For More Fun</Text>
           <Text style={{color:'black',marginTop:30,fontSize:18}}>Visit Our Official Site!</Text>

                      

</View>
        )
    }
}
