import React from 'react';
import {Text, StyleSheet, ScrollView, Dimensions, View} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import FundsDetailsHeader from '../Components/FundsDetailsHeader'

const FundsDetailsScreen = ({ route }) => {
  const { fundDetails } = route.params;
  return (
    <ScrollView style={styles.container}>
      <FundsDetailsHeader params={route.params} />

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
        <View style={styles.labelsContainer}>
          <Text style={styles.labelsText}>1h</Text>
        </View>
        <View style={styles.labelsContainer}>
          <Text style={[styles.labelsText, styles.labelSelected]}>1d</Text>
        </View>
        <View style={styles.labelsContainer}>
          <Text style={styles.labelsText}>1w</Text>
        </View>
        <View style={styles.labelsContainer}>
          <Text style={styles.labelsText}>1m</Text>
        </View>
        <View style={styles.labelsContainer}>
          <Text style={styles.labelsText}>1y</Text>
        </View>
        <View style={styles.labelsContainer}>
          <Text style={styles.labelsText}>All</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Info & Stats</Text>

        <View style={styles.infoRow}>
          <View style={styles.infoRowWrapper}>
            <Text style={styles.infoRowTitle}>AUM</Text>
            <Text style={styles.infoRowValue}>{fundDetails.AUM}</Text>
          </View>
          <View style={styles.infoRowWrapper}>
            <Text style={styles.infoRowTitle}>Issue Date</Text>
            <Text style={styles.infoRowValue}>{fundDetails.issueDate}</Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.infoRowWrapper}>
            <Text style={styles.infoRowTitle}>Vintage Range</Text>
            <Text style={styles.infoRowValue}>{fundDetails.vintageRange}</Text>
          </View>
          <View style={styles.infoRowWrapper}>
            <Text style={styles.infoRowTitle}>TER</Text>
            <Text style={styles.infoRowValue}>{fundDetails.TER}</Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.infoRowWrapper}>
            <Text style={styles.infoRowTitle}>Price at Close</Text>
            <Text style={styles.infoRowValue}>{fundDetails.priceAtClose}</Text>
          </View>
          <View style={styles.infoRowWrapper}>
            <Text style={styles.infoRowTitle}>Price at Open</Text>
            <Text style={styles.infoRowValue}>{fundDetails.priceAtOpen}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
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
  infoRowWrapper: {
    width: 200,
    paddingRight: 50,
  },
  infoContainer: {},
  infoTitle: {
    fontSize: 17,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 11,
  },
  infoRowTitle: {
    fontSize: 14,
    color: '#A0A0A0',
  },
  infoRowValue: {
    fontSize: 14,
    color: '#000',
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 10,
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
});

export default FundsDetailsScreen;
