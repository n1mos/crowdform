import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Button from '../Button';

const PortfolioCard = params => {
  const portfolioIcon = require('../../Assets/portfolio.png');
  const iconUp = require('../../Assets/Up.png');

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Image source={portfolioIcon} style={styles.icon} />
        <Text style={styles.title}>Your Portfolio</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.creditsText}>18 credits</Text>
        <Text style={styles.creditsText}>$328.14</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.returnsText}>
          <Image source={iconUp} style={styles.icon} />
          8.41%
        </Text>
        <Text style={styles.lastPurchaseText}>Last purchase 28d ago</Text>
      </View>
      <View style={styles.infoContainer}>
        <Button
          title="Sell"
          style={styles.sellButton}
          textStyle={styles.sellButtonText}
          onPress={() => {}}
        />

        <Button
          title="Retire credits"
          style={styles.retireButton}
          textStyle={styles.retireButtonText}
          onPress={() => {}}
        />
      </View>
      <Text style={styles.previouslyText}>
        You've previously retired 28 credits of this asset
      </Text>
      <View style={styles.noteContainer}>
        <Text style={styles.noteText}>
          Please note that prices are for reference only and may vary at the
          time of excecuting a buy or sell order. The information provided is
          not investment advice, and should not be used as a recommendation to
          buy or sell assets.
        </Text>
      </View>
      <Button title="Buy" style={styles.buyButton} onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  noteContainer: {
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 50,
  },
  noteText: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  buyButton: {
    marginTop: 30,
    marginBottom: 30
  },
  retireButton: {
    flex: 1,
    width: 'auto',
    backgroundColor: '#0FDF8F',
  },
  retireButtonText: {
    color: '#fff',
  },
  sellButton: {
    flex: 1,
    width: 'auto',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#CFCFCF',
    marginRight: 10,
  },
  sellButtonText: {
    color: '#770FDF',
  },
  previouslyText: {
    fontSize: 11,
    color: '#A0A0A0',
    marginTop: 10,
  },
  textContainer: {
    flexDirection: 'row',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    marginRight: 5,
  },
  title: {
    fontSize: 17,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 11,
  },
  creditsText: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
  },
  returnsText: {
    fontSize: 14,
    color: '#0FDF8F',
  },
  lastPurchaseText: {
    fontSize: 14,
    color: '#A0A0A0',
  },
});

export default PortfolioCard;
