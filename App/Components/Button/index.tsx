import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface ButtonProps {
  title: string;
  onPress(): void;
  disabled?: boolean;
  style?: object;
  textStyle?: object;
}

const Button = ({title, onPress, disabled, style, textStyle}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        !disabled
          ? { backgroundColor: '#6a1ad4' }
          : { backgroundColor: '#6b1ad449' },
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 20,
    borderRadius: 4,
    width: '100%',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'normal',
  },
});

export default Button;
