import React from 'react';
import { Text, StyleSheet, ScrollView, Dimensions, View, Image, SafeAreaView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import FundsDetailsHeader from '../Components/FundsDetailsHeader';
import InfoContainer from '../Components/InfoContainer';
import FundBreakdown from '../Components/FundBreakdown';
import PortfolioCard from '../Components/PortfolioCard';

const FundsDetailsScreen = ({ route }) => {
  const { fundDetails } = route.params;
  const iconUp = require('../Assets/Up.png');

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <FundsDetailsHeader params={route.params} />

        <View style={styles.valueContainer}>
          <Text style={styles.valueText}>$18.23</Text>
          <Text style={styles.valueText}>2022</Text>
        </View>

        <Text style={styles.returnsText}>
          <Image source={iconUp} />
          3.51% ($1.21)
        </Text>

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
          width={Dimensions.get('screen').width}
          height={200}
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
          style={styles.chart}
        />
        <View style={styles.labels}>
          <View>
            <Text style={styles.labelsText}>1h</Text>
          </View>
          <View>
            <Text style={[styles.labelsText, styles.labelSelected]}>1d</Text>
          </View>
          <View>
            <Text style={styles.labelsText}>1w</Text>
          </View>
          <View>
            <Text style={styles.labelsText}>1m</Text>
          </View>
          <View>
            <Text style={styles.labelsText}>1y</Text>
          </View>
          <View>
            <Text style={styles.labelsText}>All</Text>
          </View>
        </View>
        <InfoContainer fundDetails={fundDetails} />
        <FundBreakdown fundDetails={fundDetails} />
        <PortfolioCard />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  chart: {
    borderRadius: 16,
    paddingBottom: 0,
    paddingRight: 0,
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelsText: {
    color: '#A0A0A0',
    fontSize: 15,
  },
  labelSelected: {
    backgroundColor: '#F7EFFF',
    marginTop: -5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    color: '#770FDF',
  },
  valueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  valueText: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  returnsText: {
    fontSize: 14,
    color: '#0FDF8F',
  },
});

export default FundsDetailsScreen;
