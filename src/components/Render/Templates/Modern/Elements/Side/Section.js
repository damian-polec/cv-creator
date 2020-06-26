import React from 'react';
import {Grid, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#004A6A',
    fontWeight: 'bold',
    paddingTop: '5px',
    paddingBottom: '5px',
    paddingLeft: '10px',
    fontSize: '14px'
  }
}))

const Section = ( props ) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant='body1' className={classes.header}>{props.title}</Typography>
      <Grid 
        container
        direction="column" 
        style={{padding: props.padding}}>
        {props.children}
      </Grid>
    </>
)}

export default Section;