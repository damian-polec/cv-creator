import React from 'react';
import { TextField } from '@material-ui/core';

const Skill = (props) => {
  return (
    <>
      <TextField
        fullWidth
        inputProps={{'data-key': props.index}}
        name='title'
        label='Nazwa umiejętności'
        variant='outlined'
        value={props.titleValue}
        onChange={props.edit}
      />  
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

export default Skill;