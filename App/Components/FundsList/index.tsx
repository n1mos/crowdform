import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import FundsItem from '../FundsItem';

const icons = {
  solar: require('../../Assets/solar.png'),
  wind: require('../../Assets/wind.png'),
  nature: require('../../Assets/nature.png'),
};

const FundsList = () => {
  const navigation = useNavigation();

  const onFundItemPress = () => {
    navigation.navigate('Fund');
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FundsItem
          title="Wind Fund"
          onPress={onFundItemPress}
          icon={icons.wind}
        />
        <FundsItem
          title="Solar Fund"
          onPress={onFundItemPress}
          icon={icons.solar}
        />
        <FundsItem
          title="Nature Fund"
          onPress={onFundItemPress}
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
