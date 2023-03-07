import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextInput from '../Components/TextInput';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = newText => {
    setEmail(newText);
  };

  const onChangePassword = newText => {
    setPassword(newText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        label={'E-mail'}
        value={email}
        onChangeText={onChangeEmail}
        placeholder={'john@doe.com'}
        inputMode={'email'}
      />
      <TextInput
        label={'Password'}
        value={password}
        onChangeText={onChangePassword}
        placeholder={'Minimum 8 characters'}
        secureTextEntry={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

export default LoginScreen;
