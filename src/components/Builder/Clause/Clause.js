import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clauseSection, editClause } from '../../../reducers/sectionsSlice';
import { Grid, TextField } from '@material-ui/core'

const Hobbies = () => {
  const dispatch = useDispatch();
  const clause = useSelector(clauseSection);
  return (
    <Grid container>
      <Grid 
        container
        justify='center'>
        <Grid item xs={10} >
          <TextField
            name='clause'
            fullWidth
            style={{ marginTop: 16 }} 
            multiline
            rows={4}
            rowsMax={8}
            variant='outlined'
            label='Klauzula CV'
            value={clause}
            onChange={(e) => dispatch(editClause(e.target.value))}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Hobbies;