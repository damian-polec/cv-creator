import React from 'react';
import styled from 'styled-components';
import { Document, Page, View, Text, StyleSheet, Font} from '@react-pdf/renderer';

// Font.register({ family: 'Roboto', src: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'})
import RobotoRegular from '../../fonts/Roboto-Regular.ttf';
import RobotoBold from '../../fonts/Roboto-Bold.ttf';
Font.register({ family: 'Roboto', src: RobotoRegular });
Font.register({ family: 'Roboto-Bold', src: RobotoBold })
Font.registerHyphenationCallback(word => {
  return [word];
});

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
    backgroundColor: '#005C85', 
    width: '40%', 
    height: '100%',
    color: '#fff',
    fontFamily: 'Roboto',
  },
  viewRight: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    padding: 15
  },
  section: {
    padding: 10,
  },
  header: {
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
    color: '#fff',
  },
  subHeader: {
    fontSize: 16,
  },
  sectionHeader: {
    fontFamily: 'Roboto-Bold',
    backgroundColor: '#004A6A',
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    fontSize: 14
  },
  sectionHeaderSecondary: {
    fontFamily: 'Roboto-Bold',
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
    fontFamily: 'Roboto-Bold'
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
    fontFamily: 'Roboto-Bold',
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
    fontFamily: 'Roboto-Bold'
  }
});

const Row = styled(View)`
  display: flex;
  width: 100%;
`
const Col = styled(View)`
  display: flex;
`

const MyDocument = () => (
  <Document>
    <Page size='A4' style={styles.page}>
      <View style={styles.viewLeft}>
        <View style={styles.section}>
          <Text style={styles.header}>Damian Polec</Text>
          <Text style={styles.subHeader}>Front End Developer</Text>
        </View>
        {/* Personal info */}
        <Text style={styles.sectionHeader}>Personal Info</Text>
        <View style={styles.section}>
          <View style={styles.sectionItem}>
            <Text style={styles.itemHeading}>Phone</Text>
            <Text style={styles.itemText}>516825331</Text>
          </View>
          <View style={styles.sectionItem}>
            <Text style={styles.itemHeading}>Email</Text>
            <Text style={styles.itemText}>damian.polec11@gmail.com</Text>
          </View>
        </View>
        {/* Skills Section */}
        <Text style={styles.sectionHeader}>Skills</Text>
        <View style={styles.section}>
          <View style={styles.sectionItem}>
            <Text style={styles.itemHeading}>Web Technologies</Text>
            <Text style={styles.itemText}>HTML, CSS(SASS), JavaScript</Text>
          </View>
          <View style={styles.sectionItem}>
            <Text style={styles.itemHeading}>Front-End Frameworks</Text>
            <Text style={styles.itemText}>React(React-Router, Hooks, Redux), Vue, styled-components</Text>
          </View>
          <View style={styles.sectionItem}>
            <Text style={styles.itemHeading}>Back-End Frameworks</Text>
            <Text style={styles.itemText}>Node.js(Express.js)</Text>
          </View>
          <View style={styles.sectionItem}>
            <Text style={styles.itemHeading}>Databases</Text>
            <Text style={styles.itemText}>MongoDB(Mongoose)</Text>
          </View>
          <View style={styles.sectionItem}>
            <Text style={styles.itemText}>GraphQl</Text>
          </View>
          <View style={styles.sectionItem}>
            <Text style={styles.itemHeading}>Version Control System</Text>
            <Text style={styles.itemText}>Git</Text>
          </View>
          <View style={styles.sectionItem}>
            <Text style={styles.itemHeading}>Module Bundlers</Text>
            <Text style={styles.itemText}>Webpack</Text>
          </View>
        </View>
        {/* Languages Section */}
        <Text style={styles.sectionHeader}>Languages</Text>
        <View style={styles.section}>
          <View style={styles.sectionItem}>
            <Text style={styles.itemText}>Polish</Text>
          </View>
          <View style={styles.sectionItem}>
            <Text style={styles.itemText}>English</Text>
          </View>
        </View>
        {/* Hobby Section */}
        <Text style={styles.sectionHeader}>Hobby</Text>
        <View style={styles.section}>
          <View style={styles.sectionItem}>
            <Text style={styles.itemText}>NBA</Text>
          </View>
          <View style={styles.sectionItem}>
            <Text style={styles.itemText}>Comic Books</Text>
          </View>
          <View style={styles.sectionItem}>
            <Text style={styles.itemText}>Hiking</Text>
          </View>
          <View style={styles.sectionItem}>
            <Text style={styles.itemText}>Video( strategic ones ) & Board Games</Text>
          </View>
          <View style={styles.sectionItem}>
            <Text style={styles.itemText}>Sci-Fi</Text>
          </View>
        </View>
      </View>
      <View style={styles.viewRight}>
        {/* About info */}
        <View style={styles.section}>
          <Text style={styles.itemText}>Hi I'm Damian. I'm technology enthusiast with a passion for continuous learning and improvement. I'm focusing on mastering JS and feel the most comfortable with React.js, but I have some experience using other technologies as well.</Text>
        </View>
        {/* Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionHeaderSecondary}>Work History</Text>
          <Row style={styles.row}>
            <Col style={styles.col1}>
              <Text style={styles.date}>2019-06 - present</Text>
            </Col>
            <Col style={styles.col3}>
              <Text style={styles.title}>Costumer Assistant</Text>
              <Text style={styles.subtitle}>PKO BP</Text>
              <Text style={styles.entry}>&#x2022; Giving information and helping to solve customer problems</Text>
              <Text style={styles.entry}>&#x2022; Advising about account types and banking products, such as CDs, money market accounts, loans and credit cards</Text>
            </Col>
          </Row>
          <Row style={styles.row}>
            <Col style={styles.col1}>
              <Text style={styles.date}>2015.07 - 2019.01</Text>
            </Col>
            <Col style={styles.col3}>
              <Text style={styles.title}>Administrative Assistant</Text>
              <Text style={styles.subtitle}>XPO Logistics Asos</Text>
              <Text style={styles.entry}>&#x2022; Bookkeeping</Text>
              <Text style={styles.entry}>&#x2022; Planning and scheduling</Text>
            </Col>
          </Row>
        </View>
      </View>

    </Page>
  </Document>
)
export default MyDocument;