import React from 'react';
import {Text,Image,View,TextInput,Button,StyleSheet} from 'react-native';

const YourApp = () => {
  return (
    <View style = {{flex: 1,flexDirection:'column',backgroundColor:'red'}} style={styles.gradient}>
      <View style={{flex:3,flexDirection:'column', justifyContent:'center',alignItems:'center',marginTop:-50}}>
        <Image
          source={require('./Vector.png')}
          style={{height:120,width:105}}        
        />
      </View>
      <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center', marginTop:-150}}>
        <Text style={{fontSize:25, fontWeight:'bold'}}>FORGET </Text>
        <Text style={{fontSize:25, fontWeight:'bold'}}>PASSWORD</Text>
      </View>
       
      <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start',alignItems:'center'}}>
        <Text style={{fontSize:14, fontWeight:'bold'}}>Provide your account’s email for which you</Text>
        <Text style={{fontSize:14, fontWeight:'bold'}}>want to reset your password</Text>
      </View>
      <View style={{flexDirection:'column', justifyContent:'flex-start',alignItems:'center', marginTop: -50}}>
        <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />
      </View>
      <View style={{flex:1,flexDirection:'column', justifyContent:'flex-start',alignItems:'center'}}>
        <button style={{ backgroundColor: '#E3C000', color: 'black', height:45, width:305, fontWeight:'bold',borderRadius:10, marginTop:10, borderColor: '#E3C000',}}>NEXT</button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    backgroundImage: 'linear-gradient(#C7F4F6, #D1F4F6, #E5F4F5,#00CCF9)', 
  },
  input: {
    width: 305,
    height: 45,
    borderColor: '#C4C4C4',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#C4C4C4',
  },
});

export default YourApp;