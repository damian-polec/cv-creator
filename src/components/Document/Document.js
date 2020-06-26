import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { 
  skillsSection,
  langSection,
  hobbySection } from '../../reducers/sectionsSlice';
import { selectBg } from '../../reducers/docStylesSlice';
import { Document, Page, View, Text, StyleSheet} from '@react-pdf/renderer';
import { fontRegister } from '../../utils/fontRegister';
import PersonalData from './Sections/PersonalData/PersonalData';
import Skills from './Sections/Skills/Skills';
import Langs from './Sections/Langs/Langs';
import Hobby from './Sections/Hobby/Hobby';

fontRegister();

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    lineHeight: 1.5,
    marginVertical: 5
  },
  viewLeft: {
    width: '33%', 
    height: '100%',
    color: '#fff',
    fontFamily: 'Roboto',
  },
  viewRight: {
    backgroundColor: '#fff',
    width: '67%',
    height: '100%',
    padding: 15
  },
  section: {
    padding: 10,
  },
  header: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
  },
  subHeader: {
    fontSize: 16,
  },
  sectionHeader: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    backgroundColor: '#004A6A',
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    fontSize: 14
  },
  sectionHeaderSecondary: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#005C85',
    width: '100%',
    borderTop: 1,
    borderBottom: 1,
    borderColor: 'rgb(223, 223, 223)',
    paddingTop: 5,
    paddingBottom: 5,
  },
  sectionItem: {
    marginVertical: 5,
    fontSize: 10,
    display: 'flex',
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
  col1: {
    width: '25%'
  },
  col3: {
    width: '75%'
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 11
  },
  subtitle: {
    fontSize: 10
  },
  entry: {
    fontSize: 9
  },
  date: {
    fontSize: 9,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    padding: 0
  }
});

const MyDocument = (props) => {
  const bg = useSelector(selectBg);
  const skills = useSelector(skillsSection);
  const langs = useSelector(langSection);
  const hobbies = useSelector(hobbySection);
  return(
  <Document>
    <Page
    size='A4'
    style={{
      display: 'flex',
      flexDirection: 'row'
    }}>
      <View style={[styles.viewLeft, {backgroundColor: bg.main}]}>
        <PersonalData
          padding='10pt' />
        {/* Skills Section */}
        <Skills
          padding={10}
          skills={skills} />
        {/* Languages Section */}
        <Langs 
          padding={10}
          langs={langs}/>
        {/* Hobby Section */}
        <Hobby
          padding={10}
          hobbies={hobbies}/>
      </View>
      <View style={styles.viewRight}>
        {/* About info */}
        <View style={styles.section}>
          <Text style={styles.itemText}>Hi I'm Damian. I'm technology enthusiast with a passion for continuous learning and improvement. I'm focusing on mastering JS and feel the most comfortable with React.js, but I have some experience using other technologies as well.</Text>
        </View>
        {/* Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionHeaderSecondary}>Work History</Text>
          <View style={styles.row}>
            <View style={styles.col1}>
              <Text style={styles.date}>2019-06 - present</Text>
            </View>
            <View style={styles.col3}>
              <Text style={styles.title}>Costumer Assistant</Text>
              <Text style={styles.subtitle}>PKO BP</Text>
              {/* <Text style={styles.entry}>&#x2022; Giving information and helping to solve customer problems</Text>
              <Text style={styles.entry}>&#x2022; Advising about account types and banking products, such as CDs, money market accounts, loans and credit cards</Text> */}
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.col1}>
              <Text style={styles.date}>2015.07 - 2019.01</Text>
            </View>
            <View style={styles.col3}>
              <Text style={styles.title}>Administrative Assistant</Text>
              <Text style={styles.subtitle}>XPO Logistics Asos</Text>
              <Text style={styles.entry}>&#x2022; Bookkeeping</Text>
              <Text style={styles.entry}>&#x2022; Planning and scheduling</Text>
            </View>
          </View>
        </View>
      </View>

    </Page>
  </Document>
)}
export default MyDocument;