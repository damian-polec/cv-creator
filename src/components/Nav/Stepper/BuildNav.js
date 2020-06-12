import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab } from '@material-ui/core';


const BuildNav = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant='scrollable'
      scrollButtons='auto'>
      <Tab 
        label="Personal" 
        component={Link}
        to='/app/personal'/>
      <Tab 
        label="Skills" 
        component={Link}
        to='/app/skills'/>
      <Tab 
        label="Languages" 
        component={Link}
        to='/app/lang'/>
      <Tab 
        label="TEst1" 
        component={Link}
        to='/app/test1'/>
      <Tab 
        label="Test2" 
        component={Link}
        to='/app/test2'/>
              <Tab 
        label="Test2" 
        component={Link}
        to='/app/test2'/>
              <Tab 
        label="Test2" 
        component={Link}
        to='/app/test2'/>
              <Tab 
        label="Test2" 
        component={Link}
        to='/app/test2'/>
              <Tab 
        label="Test2" 
        component={Link}
        to='/app/test2'/>
              <Tab 
        label="Test2" 
        component={Link}
        to='/app/test2'/>
              <Tab 
        label="Test2" 
        component={Link}
        to='/app/test2'/>
              <Tab 
        label="Test2" 
        component={Link}
        to='/app/test2'/>
    </Tabs>
  )
}

export default BuildNav;