import React from 'react';
import {View,Text, StyleSheet, Image} from 'react-native';
import FundsList from '../FundsList';

const HomeHeader = () => {
  const mocked = {
    balance: '$1,457.23',
    portfolio: '$1,245.23',
    returns: '31.82%',
  };

  const icons = {
    user: require('../../Assets/user.png'),
    notifications: require('../../Assets/notifications.png'),
    arrow: require('../../Assets/arrow.png'),
    rewards: require('../../Assets/rewards.png'),
    up: require('../../Assets/Up.png'),
  };

  return (
    <>
      <View style={styles.topContainer}>
        <View style={styles.avatar}>
          <Image source={icons.user} />
        </View>
        <View style={styles.balance}>
          <Text style={styles.balanceText}>Account: {mocked.balance}</Text>
          <Image source={icons.arrow} style={styles.arrowIcon} />
        </View>
        <View style={styles.notifications}>
          <Image source={icons.notifications} />
        </View>
      </View>
      <View style={styles.midContainer}>
        <Text style={styles.portfolioLabel}>Portfolio</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.portfolioText}>{mocked.portfolio}</Text>
        <Image source={icons.up} />
        <Text style={styles.returnsText}>{mocked.returns}</Text>

        <View style={styles.rewardsButton}>
          <Image source={icons.rewards} />
          <Text style={styles.rewardsText}>Earn Rewards</Text>
        </View>
      </View>

      <FundsList />
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  midContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  portfolioLabel: {
    fontSize: 12,
    color: '#000',
  },
  portfolioText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 5,
  },
  returnsText: {
    flex: 1,
    fontSize: 14,
    color: '#3cff6d',
    marginLeft: 3,
  },
  rewardsButton: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  rewardsText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#6a1ad4',
    marginLeft: 5,
  },
  balance: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  balanceText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 32,
    backgroundColor: '#F4F4F4',
  },
  notifications: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 32,
    backgroundColor: '#F4F4F4',
  },
  text: {
    color: '#000',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 40,
  },
  arrowIcon: {
    marginLeft: 3,
  },
});

export default HomeHeader;
