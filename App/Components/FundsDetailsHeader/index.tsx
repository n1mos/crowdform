import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import FundsList from '../FundsList';

const HomeHeader = () => {
  const mocked = {
    balance: '$1,457.23',
    portfolio: '$1,245.23',
    returns: '31.82%',
  };

  return (
    <>
      <View style={styles.topContainer}>
        <View style={styles.avatar} />
        <View style={styles.balance}>
          <Text style={styles.balanceText}>Account: {mocked.balance}</Text>
        </View>
        <View style={styles.notifications} />
      </View>
      <View style={styles.midContainer}>
        <Text style={styles.portfolioLabel}>Portfolio</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.portfolioText}>{mocked.portfolio}</Text>
        <Text style={styles.returnsText}>{mocked.returns}</Text>
        <Text style={styles.rewardsText}>Earn Rewards</Text>
      </View>

      <FundsList />
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    marginTop: 20
  },
  midContainer: {
    flexDirection: 'row',
    marginTop: 10
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  portfolioLabel: {
    fontSize: 16,
    color: '#000',
  },
  portfolioText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  returnsText: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3cff6d',
    marginLeft: 15,
  },
  rewardsText: {
    backgroundColor: '#f0f0f0',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#6a1ad4',
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  balance: {
    flex: 1,
    justifyContent: 'center',
  },
  balanceText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#808080',
  },
  notifications: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#808080',
  },
  text: {
    color: '#000',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 40,
  },
});

export default HomeHeader;
