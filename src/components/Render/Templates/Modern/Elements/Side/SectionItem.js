import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  sectionItem: {
    marginTop: '5px',
    marginBottom: '5px',
    display: 'flex',
    flexDirection: 'column'
  },
  itemHeading: {
    fontWeight: 'bold',
    fontSize: '10px'
  },
  itemText: {
    lineHeight: '1.3',
    fontSize: '10px'
  }
}))

const SectionItem = (props) => {
  const classes = useStyles();
  return (
  <Grid
    className={classes.sectionItem}
    item>
      <Grid 
        container
        justify='space-between'>
        {props.label ? <Typography className={classes.itemHeading}>{props.label}</Typography> : null}
        {props.lvl ? <Typography className={classes.itemHeading}>{props.lvl}</Typography> : null}
      </Grid>
        {props.value ? <Typography className={classes.itemText}>{props.value}</Typography> : null}  
  </Grid>
)}

export default SectionItem;

