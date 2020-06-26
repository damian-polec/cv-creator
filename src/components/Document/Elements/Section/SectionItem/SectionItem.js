import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  sectionItem: {
    marginVertical: 5,
    fontSize: 10,
    display: 'flex',
  },
  headingWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemHeading: {
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  },
  itemText: {
    flex: '1',
    fontSize: 10,
    lineHeight: 1.3
  },
});

const SectionItem = (props) => (
  <View style={styles.sectionItem}>
    <View style={styles.headingWrapper}>
      {props.label ? <Text style={styles.itemHeading}>{props.label}</Text> : null}
      {props.lvl ? <Text style={styles.itemHeading}>{props.lvl}</Text> : null}
    </View>
    {props.value ? <Text style={styles.itemText}>{props.value}</Text> : null}
  </View>
)

export default SectionItem;
