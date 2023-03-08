import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

const FundsItem = ({title, onPress, icon}) => {
  const mocked = {
    returns: '31.82%',
  };
  const iconUp = require('../../Assets/Up.png');

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.container}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.titleText}>{title}</Text>
        <LineChart
          data={{
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={100}
          height={70}
          withVerticalLabels={false}
          withHorizontalLabels={false}
          withInnerLines={false}
          withOuterLines={false}
          bgColor={'transparent'}
          chartConfig={{
            fillShadowGradientFromOpacity: 0,
            fillShadowGradientToOpacity: 0,
            backgroundGradientFromOpacity: 0,
            backgroundGradientToOpacity: 0,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: () => '#0FDF8F',
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '0',
            },
          }}
          bezier
          style={styles.chart}
        />
        <View style={styles.bottomContainer}>
          <Text style={styles.fundsValueText}>
            {`$${Math.floor(Math.random() * (999 - 100 + 1))},${
              Math.floor(Math.random() * (99 - 10 + 1)) + 10
            }`}
          </Text>
          <Image source={iconUp} style={styles.iconReturns} />
          <Text style={styles.returnsText}>{mocked.returns}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#FFF',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 4,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  fundsValueText: {
    color: '#000',
    fontSize: 14,
    marginTop: 10,
  },
  returnsText: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3cff6d',
  },
  chart: {
    borderRadius: 16,
    paddingBottom: 0,
    paddingRight: 0,
  },
  titleText: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  icon: {
    width: 13,
    height: 13,
    marginLeft: 5,
  },
  iconReturns: {
    marginLeft: 5,
    marginRight: 2,
  },
});

export default FundsItem;
