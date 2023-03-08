import React, {useState} from 'react';
import {Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import TextInput from '../Components/TextInput';
import Button from '../Components/Button';
import LabelButton from '../Components/LabelButton';
import Heading from '../Components/Heading';
import {useNavigation} from '@react-navigation/native';

const TextComponent = () => (
  <Text style={styles.buttonText}>
    Already have an account? <Text style={styles.underline}>Log in Here</Text>
  </Text>
);

const LoginScreen = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setIsSelected] = useState(false);

  const handleToggleCheckbox = () => {
    setIsSelected(!isSelected);
  };

  const onChangeFirstName = newText => {
    setFirstName(newText);
  };

  const onChangeLastName = newText => {
    setLastName(newText);
  };

  const onChangeEmail = newText => {
    setEmail(newText);
  };

  const onChangePassword = newText => {
    setPassword(newText);
  };

  const onLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Heading title={'Create your account'} />
        <TextInput
          label={'First Name'}
          value={firstName}
          onChangeText={onChangeFirstName}
          placeholder={'First Name'}
        />
        <TextInput
          label={'Last Name'}
          value={lastName}
          onChangeText={onChangeLastName}
          placeholder={'Last Name'}
        />
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
        <CheckBox value={isSelected} onValueChange={handleToggleCheckbox} />
        <Text style={styles.checkboxText}>
          I am over 18 years of age and I have read and agree to the{' '}
          <Text style={styles.checkboxLabel}>Terms of Service</Text> and{' '}
          <Text style={styles.checkboxLabel}>Privacy Policy</Text>
        </Text>
        <Button
          title={'Create account'}
          onPress={onLoginPress}
          disabled={!isSelected}
        />
        <LabelButton TextComponent={TextComponent} onPress={onLoginPress} />
      </ScrollView>
    </SafeAreaView>
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
  checkboxText: {
    color: '#A0A0A0',
    marginTop: -25,
    marginLeft: 35,
  },
  checkboxLabel: {
    color: '#000',
  },
  underline: {
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
