import React from 'react';
import { useSelector } from 'react-redux'
import { personalSection } from '../../../reducers/sectionsSlice'
import { View, Text, StyleSheet} from '@react-pdf/renderer';
import Section from '../Elements/Section/Section';
import SectionItem from '../Elements/Section/SectionItem/SectionItem'


const styles = StyleSheet.create({
  name: {
    fontFamily: 'Roboto',
    fontSize: 24,
    color: '#fff',
  },
  jobTitle: {
    fontSize: 16,
  },
});


const PersonalData = (props) => {
  const sectionSelector = useSelector(personalSection);
  const personal = sectionSelector.filter(item => {
    return item.group === 'personal'
  }).reduce((object, item) => {
    object[item.name] = {value: `${item.value} `, isFilled: item.isFilled};
    return object
  }, {});

  const sectionItems = sectionSelector.filter(item => {
    return item.isFilled && item.group === 'contact'
  }).map(item => {
    return <SectionItem
              label={item.label}
              key={item.key}
              value={item.value} />
  });

  return (
  <>
    <View style={{padding: props.padding}}>
      <Text style={styles.name}>
        {personal.firstName.isFilled && personal.firstName.value}
        {personal.middleName.isFilled && personal.middleName.value}
        {personal.lastName.isFilled && personal.lastName.value}
      </Text>
      <Text style={styles.jobTitle}>{personal.jobTitle.value}</Text>
    </View>
    <Section
      title='Personal Info' 
      padding={props.padding}>
      {sectionItems}
    </Section>
  </>
)}

export default PersonalData;