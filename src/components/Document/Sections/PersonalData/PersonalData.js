import React from 'react';
import { useSelector } from 'react-redux'
import { personalSection } from '../../../../reducers/sectionsSlice'
import { View, Text, StyleSheet} from '@react-pdf/renderer';
import Section from '../../Elements/Section/Section';
import SectionItem from '../../Elements/Section/SectionItem/SectionItem'


const styles = StyleSheet.create({
  name: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '24pt',
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
    {personal.firstName.isFilled || personal.middleName.isFilled || personal.lastName.isFilled || personal.jobTitle.isFilled
      ?
      <View style={{paddingLeft: props.padding, paddingTop: props.padding, paddingBottom: props.padding}}>
        <Text style={styles.name}>
          {personal.firstName.isFilled ? personal.firstName.value : null}
          {personal.middleName.isFilled ? personal.middleName.value : null}
          {personal.lastName.isFilled ? personal.lastName.value : null}
        </Text>
        <Text style={styles.jobTitle}>{personal.jobTitle.value}</Text>
      </View> : null
  }
    <Section
      title='Dane Osobowe' 
      padding={props.padding}>
      {sectionItems}
    </Section>
  </>
)}

export default PersonalData;