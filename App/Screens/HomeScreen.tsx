import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import HomeHeader from '../Components/HomeHeader';
import TipsBanner from '../Components/TipsBanner';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />

      <TipsBanner />
    </SafeAreaView>
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
