import React from 'react';
import { Grid, TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  textFieldLeft: {
    marginRight: theme.spacing(1),
    flex: 3
  },
  textFieldRight: {
    marginLeft: theme.spacing(1),
    flex: 1
  }
}));

const Language = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <TextField
          className={classes.textFieldLeft}
          inputProps={{'data-key': props.index}}
          name='lang'
          label='Język'
          variant='outlined'
          value={props.langValue}
          onChange={props.edit}
        />
        <TextField
          className={classes.textFieldRight}
          inputProps={{'data-key': props.index}}
          name='lvl'
          label='Poziom'
          variant='outlined'
          value={props.lvlValue}
          onChange={props.edit}
        />
      </Grid>
      <TextField
        inputProps={{'data-key': props.index}}
        name='desc'
        style={{ marginTop: 16 }} 
        multiline
        rows={4}
        rowsMax={8}
        variant='outlined'
        label='Opis'
        value={props.descValue}
        onChange={props.edit}
      />
    </>
  )
}

export default Language;