import React from 'react';
import { TextField } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers'

const Certificate = ( props ) => {
  return (
    <>
      <TextField
        inputProps={{'data-key': props.index}}
        name='name'
        label='Certyfikat'
        fullWidth
        variant='outlined'
        value={props.name}
        onChange={props.edit}
      /> 
      <KeyboardDatePicker
        style={{width: 200}}
        data-key={props.index}
        variant='dialog'
        margin="normal"
        id={"date-picker-dialog-" + props.index}
        label="Data uzyskania"
        format="MM/yyyy"
        value={props.date}
        name='date'
        onChange={props.handleDate}
        onClick={props.handleIndex}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </>
  )
}

export default Certificate;