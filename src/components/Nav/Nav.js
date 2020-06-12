import React from 'react';
import { AppBar } from '@material-ui/core';
import BuildNav from './Stepper/BuildNav';

const Nav = (props) => {
  return (
    <AppBar position='sticky'>
      <BuildNav />
    </AppBar>
  )
}

export default Nav;