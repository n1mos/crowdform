import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import FundsItem from '../FundsItem';

const FundsList = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FundsItem title="Wind Fund" />
        <FundsItem title="Solar Fund" />
        <FundsItem title="Nature Fund" />
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
