import React from 'react';

import { Grid } from '@material-ui/core';
import Builder from '../components/Builder/Builder';
import Render from '../components/Render/Render';


const CvCreator = () => {
  return (
    <Grid container>
      <Builder/>
      <Render />
    </Grid>
  )
}


export default CvCreator;