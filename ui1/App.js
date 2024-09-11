import React from 'react';
import {Text,Image,View,Button} from 'react-native';

const YourApp = () => {
  return (
    <View style = {{flex: 1,flexDirection:'column',backgroundColor:'#00CCF9'}}>
      <View style={{flex:2,flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
        <Image
          source={require('./Ellipse 8.png')}
          style={{height:140,width:140}}        
        />
      </View>
      <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:25, fontWeight:'bold'}}>GROW</Text>
        <Text style={{fontSize:25, fontWeight:'bold'}}>YOUR BUSINESS</Text>
      </View>
      <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:14, fontWeight:'bold'}}>We will help you to grow your business using</Text>
        <Text style={{fontSize:14, fontWeight:'bold'}}>online server</Text>
      </View>
      <View style={{flex:1,flexDirection:'row', justifyContent:'space-around',alignItems:'center'}}>
        <button style={{ backgroundColor: '#E3C000', color: 'black' , height:48, width:119, fontWeight:'bold',borderRadius:10}}>LOGIN</button>
        <button style={{ backgroundColor: '#E3C000', color: 'black',height:48, width:119 , fontWeight:'bold', borderRadius:10}}>SIGN UP</button>
      </View>
    </View>
  );
};

export default YourApp;