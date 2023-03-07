import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HomeHeader from '../Components/HomeHeader';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#808080',
    textAlign: 'center',
    fontWeight: 'normal',
  },
  underline: {
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
