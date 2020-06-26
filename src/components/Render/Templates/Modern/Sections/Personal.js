import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import Section from '../Elements/Side/Section';
import SectionItem from '../Elements/Side/SectionItem';

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: '24px',
    fontWeight: 'bold'
  },
  subheading: {
    fontSize: '16px'
  }
}))

const Personal = (props) => {
  const classes = useStyles();
  return (
    <>
      {props.personal.firstName.isFilled || props.personal.middleName.isFilled || props.personal.lastName.isFilled || props.personal.jobTitle.isFilled ? 
      <Grid
        container
        style={{padding: '10px'}}>
          <Typography className={classes.heading} variant='h2'>{props.personal.firstName.value} {props.personal.middleName.value} {props.personal.lastName.value}</Typography>
          <Typography className={classes.subheading} variant='h3'>{props.personal.jobTitle.value}</Typography>
      </Grid> : null}
      <Section
        title='Dane Osobowe'
        padding='10px'>
          {props.contact.map((el, i) => {
            return <SectionItem
                      key={i}
                      label={el.label}
                      value={el.value} /> 
          })} 
      </Section>
    </>
)}

export default Personal;