import React from 'react';
import {Text,Image,View,Button,StyleSheet} from 'react-native';

const YourApp = () => {
  return (
    <View style = {{flex: 1,flexDirection:'column',backgroundColor:'red'}} style={styles.gradient}>
      <View style={{flex:3,flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
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
      <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start',alignItems:'center'}}>
        <Text style={{fontSize:18, fontWeight:'bold'}}>HOW WE WORK?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    backgroundImage: 'linear-gradient(#C7F4F6, #D1F4F6, #E5F4F5,#00CCF9)', // Gradient CSS
  },
});

export default YourApp;