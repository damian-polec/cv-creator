import React from 'react';
import {Grid, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: '10px'
  },
  header: {
    fontWeight: 'bold',
    fontSize: '14px',
    color: '#005C85',
    width: '100%',
    borderTop: '1px solid rgb(223, 223, 223)',
    borderBottom: '1px solid rgb(223, 223, 223)',
    paddingTop: '5px',
    paddingBottom: '5px'
  }
}))

const Section = ( props ) => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.wrapper}
      container>
      <Typography variant='body1' className={classes.header}>{props.title}</Typography>
      <Grid 
        container
        direction="column" 
        style={{padding: props.padding}}>
        {props.children}
      </Grid>
    </Grid>
)}

export default Section;