import React from 'react';
import { Text, Image, View, TextInput, Button, StyleSheet } from 'react-native';

const YourApp = () => {
  return (
    <View style={{flex: 1,flexDirection: 'column',backgroundColor: '#FBCB00',}}>
      <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'flex-start',left:30}}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>LOGIN</Text>
      </View>

      <View style={{flex: 1,flexDirection: 'column',justifyContent: 'flex-around',alignItems: 'center',}}>
        <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center',}}>
          <TextInput style={styles.input}
            placeholder="Name"
            keyboardType="name-phone-pad"
          />
        </View>

        <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center',}}>
          <TextInput
          style={styles.input}
          placeholder="Pasword"
          keyboardType="visible-password"
          />
        </View>

        <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center',}}>
        <button style={{backgroundColor: 'black',color: 'white',height: 45,width: 355,fontWeight: 'bold',fontSize:20,borderRadius: 10,borderColor: '#E3C000',}}>
          LOGIN
        </button>
      </View>


      </View>

      <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center',}}>
        <Text style={{fontWeight:'bold',fontSize:25}}>CREATE ACCOUNT</Text>
      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 355,
    height: 45,
    borderWidth:1,
    borderColor: 'white',
    fontWeight:3000,
    fontSize:16,
    borderRadius: 5,
    paddingHorizontal: 10,
    // marginBottom: 20,
    backgroundColor: '#C4C4C44D',
  },
});

export default YourApp;
