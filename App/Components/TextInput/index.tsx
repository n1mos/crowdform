import React from 'react';
import {View, TextInput as TextInputRN, Text, StyleSheet} from 'react-native';

interface InputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const TextInput = ({label, value, onChangeText, placeholder}: InputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#777"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    width: '100%',
  },
  label: {
    color: '#555',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e1e1e1',
    backgroundColor: '#e1e1e1',
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontSize: 16,
    borderRadius: 5,
    color: '#555',
  },
});

export default TextInput;
