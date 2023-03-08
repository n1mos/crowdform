import React, { Component } from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface ButtonProps {
  onPress(): void;
  TextComponent: void;
}

const Button = ({onPress, TextComponent}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}>
      <TextComponent />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 20,
    borderRadius: 4,
    width: '100%',
  },
});

export default Button;
