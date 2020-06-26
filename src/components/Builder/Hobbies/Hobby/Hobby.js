import React from 'react';
import { TextField } from '@material-ui/core';


const Hobby = (props) => {
  return (
    <>
      <TextField
        inputProps={{'data-key': props.index}}
        name='name'
        label='Hobby'
        fullWidth
        variant='outlined'
        value={props.name}
        onChange={props.edit}
        />
    </>
  )
}

export default Hobby;