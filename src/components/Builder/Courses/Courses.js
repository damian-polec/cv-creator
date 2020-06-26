import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { coursesSection, addCourse, editCourse, deleteCourse } from '../../../reducers/sectionsSlice';
import { Grid } from '@material-ui/core'
import Panel from '../Elements/Panel';
import Course from './Course/Course';
import AddButton from '../Elements/AddButton';

const Courses = () => {
  const dispatch = useDispatch();
  const courses = useSelector(coursesSection);
  const [dateIndex, setDateIndex] = useState(null);

  const handleDatePickerIndex = (e) => {
    setDateIndex(e.currentTarget.dataset.key);
  }
  const handleStartDateChange = (date) => {
    const newState = [...courses];
    const coursesData = Object.assign({}, newState[dateIndex]);
    coursesData.startDate = date._d.toUTCString();
    newState[dateIndex] = coursesData;
    dispatch(editCourse(newState));
  };
  const handleEndDateChange = (date) => {
    const newState = [...courses];
    const coursesData = Object.assign({}, newState[dateIndex]);
    coursesData.endDate = date._d.toUTCString();
    newState[dateIndex] = coursesData;
    dispatch(editCourse(newState));
  };

  const handleEditCourse = (e) => {
    const elType = e.target.name;
    const key = e.target.dataset.key;
    const newState = [...courses];
    const courseData = Object.assign({}, newState[key]);
    switch(elType) {
      case 'name':
        courseData.name = e.target.value;
        break;
      case 'organizer':
        courseData.organizer = e.target.value;
        break;
      case 'desc':
        courseData.desc = e.target.value;
        break;
      case 'url':
        courseData.url = e.target.value;
        break;
      case 'checkbox':
        courseData.isPresent = !courseData.isPresent;
        break;
      default:
        break;
    }
    newState[key] = courseData;
    dispatch(editCourse(newState));
  }

  const handleDeleteCourse = (e) => {
    e.stopPropagation();
    const key = e.currentTarget.dataset.key;
    const newState = [...courses];
    newState.splice(key, 1);
    dispatch(deleteCourse(newState));
  }

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
      <Grid 
        container
        justify='center'>
        <Grid item xs={10} >
          {courses.length > 0 && courses.map((course, i) => {
            return (
              <Panel
                key={i}
                index={i}
                heading='Kurs'
                name={course.name}
                delete={handleDeleteCourse}>
                  <Course 
                    index={i}
                    name={course.name}
                    organizer={course.organizer}
                    desc={course.desc}
                    startDate={course.startDate}
                    endDate={course.endDate}
                    isPresent={course.isPresent}
                    url={course.url}
                    edit={handleEditCourse}
                    startDateHandler={handleStartDateChange}
                    endDateHandler={handleEndDateChange}
                    dateIndexPicker={handleDatePickerIndex}/>
              </Panel>
            )
          })}
        </Grid>
      </Grid>
      <AddButton 
        bttype='kurs'
        click={handleAddCourse}
        />
    </Grid>
  )
}

export default Courses;