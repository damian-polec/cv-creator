import React from 'react';
import {Switch, Route} from 'react-router-dom'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from 'moment';
import MomentUtils from '@date-io/moment';
import 'moment/locale/pl';
import { Grid } from '@material-ui/core';
import Nav from '../Nav/Nav';
import Personal from './Personal/Personal';
import Skills from './Skills/Skills';
import Lang from './Lang/Lang';
import WorkHistory from './WorkHistory/WorkHistory';
import Education from './Education/Education';
import Courses from './Courses/Courses';

moment.locale('pl');

const Builder =( props ) => (
  <MuiPickersUtilsProvider locale='pl' utils={MomentUtils}>
    <Grid item xs={6}>
      <Nav />
      <Switch>
        <Route path='/app/personal' component={Personal} />
        <Route path='/app/skills' component={Skills} />
        <Route path='/app/lang' component={Lang} /> 
        <Route path='/app/experiance' component={WorkHistory} />
        <Route path='/app/education' component={Education} />
        <Route path='/app/courses' component={Courses} />
        {/* <Route path='/app/certificates' component={WorkHistory} />
        <Route path='/app/projects' component={WorkHistory} />
        <Route path='/app/clause' component={WorkHistory} /> */}
      </Switch>
    </Grid>
  </MuiPickersUtilsProvider>
)

export default Builder;