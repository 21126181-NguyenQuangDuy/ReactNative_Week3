import React from 'react';
import { Text, Image, View, TextInput, Button, StyleSheet } from 'react-native';

const YourApp = () => {
  return (
    <View style={{flex: 1,flexDirection: 'column',backgroundColor: '#31AA5230',}}>
      <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>LOGIN</Text>
      </View>

      <View style={{flex: 1,flexDirection: 'column',justifyContent: 'flex-around',alignItems: 'center',}}>
        <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center',}}>
          <TextInput style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
        </View>

        <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center',}}>
          <TextInput
          style={styles.input}
          placeholder="Pasword"
          keyboardType="visible-password"
          />
        </View>
      </View>

      <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center',}}>
        <button style={{top:-2350,backgroundColor: 'red',color: 'black',height: 45,width: 305,fontWeight: 'bold',borderRadius: 10,borderColor: '#E3C000',}}>
          LOGIN
        </button>
      </View>

      <View style={{flex: 1,flexDirection: 'column',justifyContent: 'flex-start',alignItems: 'center', top:-10}}>
        <Text>When you agree to terms and condition</Text>
        <Text style={{color:'#5D25FA',top:10}}>For got your password?</Text>
        <Text style={{top:20}}>Or login with</Text>
      </View>

      <View style={{flex: 1,flexDirection: 'row',justifyContent: 'center',alignItems: 'flex-start'}}>
        <button style={{ backgroundColor: '#154c79', height:48, width:119, fontWeight:'bold', fontSize: 35, color:'#EEEEEE'}}>f</button>
        <button style={{ backgroundColor: '#37aed0',height:48, width:119 , fontWeight:'bold',fontSize: 35, color:'#EEEEEE'}}>Z</button>
        <button style={{ backgroundColor: '#31AA5230',height:48, width:119 , fontWeight:'bold',}}>
          <Image
            source={require('./icogoogle 1.png')}
            style={{height:30,width:30,left:35}} 
          />
        </button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 305,
    height: 45,
    borderColor: '#C4C4C4',
    borderRadius: 5,
    paddingHorizontal: 10,
    // marginBottom: 20,
    backgroundColor: '#C4C4C44D',
  },
});

export default YourApp;
