import React from 'react';
import { 
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  makeStyles } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers'

const useStyles = makeStyles((theme) => ({
  textFieldLeft: {
    marginRight: theme.spacing(1),
    flex: 1
  },
  textFieldRight: {
    marginLeft: theme.spacing(1),
    flex: 1
  }
}));

const School = (props) => {
  const classes = useStyles();
  return (
    <>
      <TextField
        inputProps={{'data-key': props.index}}
        name='name'
        label='Nazwa uczelni'
        fullWidth
        variant='outlined'
        value={props.name}
        onChange={props.edit}
        />
      <Grid
        style={{marginTop: 16}} 
        container>
        <TextField
          className={classes.textFieldLeft}
          name='city'
          inputProps={{'data-key': props.index}}
          label='Miasto'
          variant='outlined'
          value={props.city}
          onChange={props.edit}
          />
        <TextField
          className={classes.textFieldRight}
          name='country'
          inputProps={{'data-key': props.index}}
          label='Państwo'
          variant='outlined'
          value={props.country}
          onChange={props.edit}
          />
      </Grid>
      <Grid
        style={{marginTop: 16}} 
        container>
        <TextField
          className={classes.textFieldLeft}
          name='degree'
          inputProps={{'data-key': props.index}}
          label='Stopień Naukowy'
          variant='outlined'
          value={props.degree}
          onChange={props.edit}
          />
        <TextField
          className={classes.textFieldRight}
          name='field'
          inputProps={{'data-key': props.index}}
          label='Kierunek studiów'
          variant='outlined'
          value={props.field}
          onChange={props.edit}
          />
      </Grid>
      <Grid
        style={{marginTop: 16}}
        container
        justify='space-evenly'
        alignItems='flex-end'>
          <KeyboardDatePicker
            data-key={props.index}
            variant='dialog'
            margin="normal"
            id={"date-picker-dialog-start-" + props.index}
            label="Data rozpoczęcia"
            format="MM/yyyy"
            value={props.startDate}
            name='start-date'
            onChange={props.startDateHandler}
            onClick={props.dateIndexPicker}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardDatePicker
            data-key={props.index}
            disabled={props.isPresent}
            variant='dialog'
            margin="normal"
            id={"date-picker-dialog-end-" + props.index}
            label="Data zakończenia"
            format="MM/yyyy"
            value={props.endDate}
            name='end-date'
            onChange={props.endDateHandler}
            onClick={props.dateIndexPicker}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                inputProps={{'data-key': props.index}}
                name='checkbox'
                checked={props.isPresent}
                color="primary"
                onChange={props.edit}
              />
            }
            label="Obecnie"
          />
      </Grid>
      <TextField
        inputProps={{'data-key': props.index}}
        name='activities'
        style={{ marginTop: 16 }} 
        multiline
        rows={4}
        rowsMax={8}
        variant='outlined'
        label='Dodatkowe aktywności'
        value={props.activities}
        onChange={props.edit}
        />
      <TextField
        inputProps={{'data-key': props.index}}
        name='achievements'
        style={{ marginTop: 16 }} 
        multiline
        rows={4}
        rowsMax={8}
        variant='outlined'
        label='Osiągnięcia'
        value={props.achievements}
        onChange={props.edit}
        />
    </>
  )
}

export default School;