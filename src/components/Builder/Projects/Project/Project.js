import React from 'react';
import { 
  Grid,
  TextField,
  FormControlLabel,
  Checkbox 
} from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers'

const Project = (props) => {
  return (
    <>
      <TextField
        inputProps={{'data-key': props.index}}
        name='name'
        label='Nazwa projektu'
        fullWidth
        variant='outlined'
        value={props.name}
        onChange={props.edit}
        />
      <TextField
        style={{marginTop: 16}}
        inputProps={{'data-key': props.index}}
        name='role'
        label='Twoja rola w projekcie'
        fullWidth
        variant='outlined'
        value={props.role}
        onChange={props.edit}
        />
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
        name='desc'
        style={{ marginTop: 16 }} 
        multiline
        rows={4}
        rowsMax={8}
        variant='outlined'
        label='Opis'
        value={props.desc}
        onChange={props.edit}
        />
      <TextField
        style={{marginTop: 16}}
        inputProps={{'data-key': props.index}}
        name='url'
        label='url'
        fullWidth
        variant='outlined'
        value={props.url}
        onChange={props.edit}
        />
    </>
  )
}

export default Project;