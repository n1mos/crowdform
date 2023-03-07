import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

const FundsItem = ({title}) => {
  const mocked = {
    returns: '31.82%',
  };

  return (
    <View style={styles.container}>
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
          color: () => '#57ff57',
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
        <Text style={styles.returnsText}>{mocked.returns}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#f1f1f1',
    marginRight: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end'
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
    marginLeft: 15,
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
});

export default FundsItem;
