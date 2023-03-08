import React from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';

const FundsDetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>Fund details</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

export default FundsDetailsScreen;
