import React from 'react';
import {Switch, Route} from 'react-router-dom'
import { Grid } from '@material-ui/core';
import Personal from './Personal/Personal';
import Skills from './Skills/Skills';
import Nav from '../Nav/Nav';
const Builder =( props ) => (
  <Grid item xs={6}>
    <Nav />
    <Switch>
      <Route path='/app/personal' component={Personal} />
      <Route path='/app/skills' component={Skills} /> 
    </Switch>
  </Grid>
)

export default Builder;