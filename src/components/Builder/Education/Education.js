import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSchool, eduSection } from '../../../reducers/sectionsSlice';
import { Grid } from '@material-ui/core'
import School from './School/School';
import AddButton from '../Elements/AddButton';

const Education = () => {
  const dispatch = useDispatch();
  const edu = useSelector(eduSection);

  const handleAddSchool = () => {
    const newState = [...edu];
    const date = new Date().toUTCString();
    const school = {
      name: '',
      city: '',
      country: '',
      degree: '',
      field: '',
      startDate: date,
      endDate: date,
      isPresent: false,
      activities: '',
      achievements: ''
    }
    newState.push(school);
    dispatch(addSchool(newState));
  }
  return (
    <Grid container>
      <School />
      <AddButton 
        bttype='uczelnie'
        click={handleAddSchool}
        />
    </Grid>
  )
}

export default Education;