import React from 'react';
import {View, TextInput as TextInputRN, Text, StyleSheet} from 'react-native';

interface InputProps {
  label: string;
  value: string;
  inputMode?: enum;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean
}

const TextInput = ({
  label,
  value,
  onChangeText,
  inputMode,
  placeholder,
  secureTextEntry,
}: InputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#CFCFCF"
        inputMode={inputMode}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
  },
  label: {
    color: '#A0A0A0',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#F4F4F4',
    backgroundColor: '#F4F4F4',
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontSize: 16,
    borderRadius: 5,
    color: '#555',
  },
});

export default TextInput;
