import React from 'react';
import {Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          a tortor ut dui cursus feugiat non sit amet tellus. Praesent nec urna
          nisl. In eu eros eget enim pellentesque malesuada et quis mi. In
          efficitur eget metus a fermentum. Donec sodales eros augue, eu
          volutpat nunc pellentesque a. Mauris accumsan arcu felis, sed volutpat
          nulla eleifend quis. Duis placerat lorem quis lacus aliquet
          consectetur. Sed vehicula volutpat tellus ac faucibus. Praesent
          vehicula urna tellus, eget volutpat ligula dictum ac. Donec tincidunt
          justo quis dapibus ultrices. Cras sed lorem in felis pharetra
          vestibulum. Ut justo ante, mollis sit amet pretium eget, dignissim
          tristique neque. Sed eros nibh, faucibus in vestibulum tempor, euismod
          quis urna. Integer nec blandit ex, et molestie nunc. Integer
          vestibulum lectus vel augue maximus, et aliquet felis euismod.
          Curabitur non velit metus.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

export default LoginScreen;
