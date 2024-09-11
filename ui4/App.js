import React from 'react';
import {Text,Image,View,TextInput,Button,StyleSheet} from 'react-native';

const YourApp = () => {
  return (
    <View style = {{flex: 1,flexDirection:'column',backgroundColor:'red'}} style={styles.gradient}>
      <View style={{flex:3,flexDirection:'column', justifyContent:'center',alignItems:'center',marginTop:-67}}>
        <Text style={{fontSize:60, fontWeight:'bold'}}>CODE </Text>
      </View>
      <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center', marginTop:-157}}>
        <Text style={{fontSize:20, fontWeight:'bold'}}>VERIFICATION</Text>
        
      </View>
      
      <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start',alignItems:'center', marginTop:-7}}>
        <Text style={{fontSize:15, fontWeight:'bold'}}>Enter ontime password sent on</Text>
        <Text style={{fontSize:15, fontWeight:'bold'}}>++849092605798</Text>
      </View>
      <View style={{flexDirection:'row', justifyContent:'center',alignItems:'center', marginTop: -57}}>
        <TextInput style={styles.input}/>
        <TextInput style={styles.input}/>
        <TextInput style={styles.input}/>
        <TextInput style={styles.input}/>
        <TextInput style={styles.input}/>
        <TextInput style={styles.input}/>
      </View>
      <View style={{flex:1,flexDirection:'column', justifyContent:'flex-start',alignItems:'center'}}>
        <button style={{ backgroundColor: '#E3C000', color: 'black', height:45, width:305, fontWeight:'bold',borderRadius:10, marginTop:10, borderColor: '#E3C000',}}>VERIFY CODE</button>
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
    width: 45,
    height: 45,
    borderWidth:1,
    borderColor: 'black',
    // borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    // backgroundColor: '#C4C4C4',
  },
});

export default YourApp;