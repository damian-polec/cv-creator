import React from 'react';

import { Grid } from '@material-ui/core';
import Builder from '../components/Builder/Builder';
import Render from '../components/Render/Render';


const CvCreator = () => {
  return (
    <Grid container>
      <Builder/>
      <Grid item xs={6}>
        <Render />
      </Grid>
    </Grid>
  )
}


export default CvCreator;