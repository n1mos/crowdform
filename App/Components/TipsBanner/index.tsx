import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

const Button = () => {
  const iconTips = require('../../Assets/tips.png');

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{`Learn more about\ncarbon credits`}</Text>
        <Text style={styles.text}>Check out our top tips!</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image source={iconTips} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#6a1ad4',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: 40,
    borderRadius: 10,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
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
  icon: {
    
  }
});

export default Button;
