import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const InfoContainer = params => {
  const { fundDetails } = params
  return (
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
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    marginTop: 40
  },
  infoRowWrapper: {
    width: 200,
    paddingRight: 50,
  },
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
});

export default InfoContainer;
