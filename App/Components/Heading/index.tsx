import React from 'react';
import {Text, StyleSheet} from 'react-native';

interface HeadingProps {
  title: string;
}

const Heading = ({title}: HeadingProps) => {
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

export default Heading;
