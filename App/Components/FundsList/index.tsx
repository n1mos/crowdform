import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import FundsItem from '../FundsItem';
import { WindMock, SolarMock, NatureMock } from './mock';

const icons = {
  solar: require('../../Assets/solar.png'),
  wind: require('../../Assets/wind.png'),
  nature: require('../../Assets/nature.png'),
};

const FundsList = () => {
  const navigation = useNavigation();

  const onFundItemPress = (params) => {
    navigation.navigate('Fund', params);
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FundsItem
          title="Wind Fund"
          onPress={() => onFundItemPress(WindMock)}
          icon={icons.wind}
        />
        <FundsItem
          title="Solar Fund"
          onPress={() => onFundItemPress(SolarMock)}
          icon={icons.solar}
        />
        <FundsItem
          title="Nature Fund"
          onPress={() => onFundItemPress(NatureMock)}
          icon={icons.nature}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default FundsList;
