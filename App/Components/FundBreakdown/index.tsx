import React from 'react';
import { Text, StyleSheet, View, ScrollView, Image } from 'react-native';

const FundCard = () => {
  const fundImages = {
    fund1: require('../../Assets/fund1.png'),
    fund1Logo: require('../../Assets/fund1Logo.png'),
  };

  return (
    <View>
      <Image source={fundImages.fund1} />

      <View style={styles.cardContainer}>
        <Image style={styles.cardLogo} source={fundImages.fund1Logo} />

        <View style={styles.cardTextWrapper}>
          <Text style={styles.cardText}>
            Aspira is building a modular, direct air capture system with the
            energy supply integrated into the modules.
          </Text>
        </View>

        <Text style={styles.cardReadMore}>Read more</Text>
      </View>
    </View>
  );
};

const FundBreakdown = params => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fund Breakdown</Text>

      <View style={styles.tabsContainer}>
        <Text style={[styles.tabsText, styles.tabsSelected]}>Highlighted</Text>
        <Text style={styles.tabsText}>Value</Text>
        <Text style={styles.tabsText}>Vintage</Text>
        <Text style={styles.tabsText}>Registry</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FundCard />

        <FundCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  title: {
    fontSize: 17,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 11,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tabsText: {
    fontSize: 14,
    color: '#A0A0A0',
    marginRight: 30,
  },
  tabsSelected: {
    color: '#000',
    paddingBottom: 3,
    borderBottomColor: '#770FDF',
    borderBottomWidth: 3,
  },
  tabsUnderline: {
    width: '100%',
    height: 3,
    backgroundColor: '#770FDF',
  },
  cardContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  cardTextWrapper: {
    width: 230,
    marginRight: 10,
    flexDirection: 'row',
  },
  cardText: {
    flexShrink: 1,
    color: '#000',
    fontSize: 14,
  },
  cardReadMore: {
    marginTop: 10,
    color: '#000',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
});

export default FundBreakdown;
