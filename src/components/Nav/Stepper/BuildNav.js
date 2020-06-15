import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from '@material-ui/core';


const BuildNav = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const path = window.location.pathname;
    switch(path) {
      case '/app/personal':
        if(value === 0) {
          return;
        }
        setValue(0)
        break;
        case '/app/skills':
          if(value === 1) {
            return;
          }
          setValue(1)
        break;
        case '/app/lang':
          if(value === 2) {
            return;
          }
          setValue(2)
        break;
        case '/app/experiance':
          if(value === 3) {
            return;
          }
          setValue(3)
        break;
        case '/app/education':
          if(value === 4) {
            return;
          }
          setValue(4)
        break;
        case '/app/courses':
          if(value === 5) {
            return;
          }
          setValue(5)
        break;
        case '/app/cerificates':
          if(value === 6) {
            return;
          }
          setValue(6)
        break;
        case '/app/projects':
          if(value === 7) {
            return;
          }
          setValue(7)
        break;
        case '/app/clause':
          if(value === 8) {
            return;
          }
          setValue(8)
        break;
      default:
        break;
    }
  }, [value]);

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
        label="Dane Osobowe" 
        component={Link}
        to='/app/personal'/>
      <Tab 
        label="Umiejętności" 
        component={Link}
        to='/app/skills'/>
      <Tab 
        label="Języki" 
        component={Link}
        to='/app/lang'/>
      <Tab 
        label="Doświadczenie" 
        component={Link}
        to='/app/experiance'/>
      <Tab 
        label="Wykształcenie" 
        component={Link}
        to='/app/education'/>
      <Tab 
        label="Kursy" 
        component={Link}
        to='/app/courses'/>
      <Tab 
        label="Certyfikaty" 
        component={Link}
        to='/app/certificates'/>
      <Tab 
        label="Projekty" 
        component={Link}
        to='/app/projects'/>
      <Tab 
        label="Klauzula CV" 
        component={Link}
        to='/app/clause'/>
    </Tabs>
  )
}

export default BuildNav;