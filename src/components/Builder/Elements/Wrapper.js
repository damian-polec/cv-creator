import React from 'react';
import { Grid } from '@material-ui/core';

const Wrapper = (props) => (
  <Grid
    key={props.key} 
    item
    xs={12}>
      {props.children}
  </Grid>
)

export default Wrapper