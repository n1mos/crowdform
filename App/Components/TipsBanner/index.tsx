import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Button = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Learn more about\ncarbon credits`}</Text>
      <Text style={styles.text}>Check out our top tips!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6a1ad4',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: 40,
    borderRadius: 10,
  },
  title: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  text: {
    color: '#FFF',
    fontSize: 14,
    marginTop: 20,
  },
});

export default Button;
