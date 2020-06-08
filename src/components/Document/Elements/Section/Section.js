import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  sectionHeader: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    backgroundColor: '#004A6A',
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    fontSize: 14
  }
});

const Section = ( props ) => (
  <>
    <Text style={styles.sectionHeader}>{props.title}</Text>
    <View style={{padding: props.padding}}>
      {props.children}
    </View>
  </>
)

export default Section;