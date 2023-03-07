import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextInput from '../Components/TextInput';
import Button from '../Components/Button';
import LabelButton from '../Components/LabelButton';
import Heading from '../Components/Heading';
import {useNavigation} from '@react-navigation/native';

const TextComponent = () => (
  <Text style={styles.buttonText}>
    Don't have an account? <Text style={styles.underline}>Sign up</Text> here
  </Text>
);

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = newText => {
    setEmail(newText);
  };

  const onChangePassword = newText => {
    setPassword(newText);
  };

  const onLoginPress = () => {
    navigation.navigate('Home');
  };

  const onSignupPress = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <Heading title={'Login'} />
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
      <Button title={'Login'} onPress={onLoginPress} />
      <LabelButton TextComponent={TextComponent} onPress={onSignupPress} />
    </View>
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
