import React from 'react';
import { Grid, Box, Button} from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';

const AddButton = (props) => (
  <Grid
    container
    justify='flex-end'
    direction='row'>
    <Box p={1}>
      <Button
        variant='contained'
        color='primary'
        startIcon={<AddCircleOutline/>}
        onClick={props.click}>Dodaj {props.bttype}</Button>
    </Box>
  </Grid>
)

export default AddButton;