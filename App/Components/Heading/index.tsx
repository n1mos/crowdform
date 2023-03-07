import React from 'react';
import {Text, StyleSheet} from 'react-native';

interface ButtonProps {
  title: string;
}

const Button = ({title}: ButtonProps) => {
  return <Text style={styles.text}>{title}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 40,
  },
});

export default Button;
