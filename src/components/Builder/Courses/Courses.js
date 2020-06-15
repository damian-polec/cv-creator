import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { coursesSection, addCourse } from '../../../reducers/sectionsSlice';
import { Grid } from '@material-ui/core'
import Course from './Course/Course';
import AddButton from '../Elements/AddButton';

const Courses = () => {
  const dispatch = useDispatch();
  const courses = useSelector(coursesSection);

  const handleAddCourse = () => {
    const newState = [...courses];
    const date = new Date().toUTCString();
    const course = {
      name: '',
      organizer: '',
      desc: '',
      startDate: date,
      endDate: date,
      isPresent: false,
      url: '',
    }
    newState.push(course);
    dispatch(addCourse(newState));
  }
  return (
    <Grid container>
      <Course />
      <AddButton 
        bttype='kurs'
        click={handleAddCourse}
        />
    </Grid>
  )
}

export default Courses;