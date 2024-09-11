import React from 'react';
import { Text, Image, View, TextInput, Button, StyleSheet } from 'react-native';

const YourApp = () => {
  return (
    <View style={{flex: 1,flexDirection: 'column',backgroundColor: '#31AA5230',}}>
      <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>REGISTER</Text>
      </View>

      <View style={{flex: 3,flexDirection: 'column',justifyContent: 'flex-around',alignItems: 'center',}}>
        <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center',}}>
          <TextInput style={styles.input}
            placeholder="Name"
            keyboardType="name-phone-pad"
          />
        </View>

        <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center',}}>
          <TextInput
          style={styles.input}
          placeholder="Phone"
          keyboardType="phone-pad"
          />
        </View>

        <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center',}}>
          <TextInput
          style={styles.input}
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

        <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center',}}>
          <TextInput
          style={styles.input}
          placeholder="Birthday"
          />
        </View>

        <View style={{flex: 1,flexDirection: 'row',justifyContent: 'center',alignItems: 'center',}}>
            <label style={{}}>
                <input 
                    type="radio" 
                    name="gender" 
                    value="male"  
                />
                Male
            </label>
            <label>
                <input 
                    type="radio" 
                    name="gender" 
                    value="female" 
                />
                Female
            </label>
        </View>
      </View>

      <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center',}}>
        <button style={{backgroundColor: 'red',color: 'white',height: 45,width: 305,fontWeight: 'bold',fontSize:20,borderRadius: 10,borderColor: '#E3C000',}}>
          REGISTER
        </button>
      </View>

      <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center', top:-10}}>
        <Text>When you agree to terms and condition</Text>
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
