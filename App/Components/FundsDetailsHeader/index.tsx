import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FundsDetailsHeader = ({ params }) => {
  const { fundDetails } = params;
  const navigation = useNavigation();

  const onPress = () => {
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
          <View>
            <Image source={require('../../Assets/left.png')} />
          </View>
        </TouchableOpacity>
        <View style={styles.title}>
          <Text style={styles.titleText}>{fundDetails.name}</Text>
          <Text style={styles.subtitleText}>{fundDetails.acronym}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  title: {
    flex: 1,
    justifyContent: 'center',
  },
  titleText: {
    color: '#000',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleText: {
    color: '#808080',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color: '#000',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 40,
  },
});

export default FundsDetailsHeader;
