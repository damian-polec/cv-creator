import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { coursesSection, editCourse, deleteCourse } from '../../../../reducers/sectionsSlice';
import { 
  Grid,
  ExpansionPanel, 
  ExpansionPanelDetails, 
  ExpansionPanelSummary,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  IconButton,
  makeStyles } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers'
import { ExpandMoreOutlined, Delete } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  panelDetails: {
    display: 'flex',
    flexDirection: 'column'
  },
  textFieldLeft: {
    marginRight: theme.spacing(1),
    flex: 1
  },
  textFieldRight: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  wrapper: {
    marginTop: theme.spacing(2)
  }
}));

const Course = () => {
  const classes = useStyles();
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

  const handleInputUpdate = (e) => {
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

  const handleDelete = (e) => {
    e.stopPropagation();
    const key = e.currentTarget.dataset.key;
    const newState = [...courses];
    newState.splice(key, 1);
    dispatch(deleteCourse(newState));
  }
  return (
    <Grid 
      container
      justify='center'>
      <Grid item xs={10} >
        {courses.length > 0 && courses.map((course, i) => {
          return (
            <ExpansionPanel key={i}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreOutlined />}>
                <FormControlLabel
                  onFocus={(event) => event.stopPropagation()}
                  label={
                    <>
                      <Typography className={classes.heading}>Kurs {i + 1}</Typography>
                      <Typography className={classes.secondaryHeading}>{course.name}</Typography>
                    </>
                  } 
                  control={
                    <IconButton 
                      data-key={i} 
                      color='secondary'
                      onClick={handleDelete}
                      >
                      <Delete />
                    </IconButton>
                  }/>  
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.panelDetails}>
                <TextField
                  inputProps={{'data-key': i}}
                  name='name'
                  label='Nazwa kursu'
                  fullWidth
                  variant='outlined'
                  value={course.name}
                  onChange={handleInputUpdate}
                />
                <TextField
                  inputProps={{'data-key': i}}
                  style={{ marginTop: 16 }} 
                  name='organizer'
                  label='Organizator'
                  fullWidth
                  variant='outlined'
                  value={course.organizer}
                  onChange={handleInputUpdate}
                />
                <TextField
                  inputProps={{'data-key': i}}
                  name='desc'
                  style={{ marginTop: 16 }} 
                  multiline
                  rows={4}
                  rowsMax={8}
                  variant='outlined'
                  label='Opis'
                  value={course.activities}
                  onChange={handleInputUpdate}
                />
                <Grid
                  className={classes.wrapper}
                  container
                  justify='space-evenly'
                  alignItems='flex-end'>
                    <KeyboardDatePicker
                      data-key={i}
                      variant='dialog'
                      margin="normal"
                      id={"date-picker-dialog-start-" + i}
                      label="Data rozpoczęcia"
                      format="MM/yyyy"
                      value={course.startDate}
                      name='start-date'
                      onChange={handleStartDateChange}
                      onClick={handleDatePickerIndex}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                    <KeyboardDatePicker
                      data-key={i}
                      disabled={course.isPresent}
                      variant='dialog'
                      margin="normal"
                      id={"date-picker-dialog-end-" + i}
                      label="Data zakończenia"
                      format="MM/yyyy"
                      value={course.endDate}
                      name='end-date'
                      onChange={handleEndDateChange}
                      onClick={handleDatePickerIndex}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          inputProps={{'data-key': i}}
                          name='checkbox'
                          checked={course.isPresent}
                          color="primary"
                          onChange={handleInputUpdate}
                        />
                      }
                      label="Obecnie"
                    />
                </Grid>
                <TextField
                  inputProps={{'data-key': i}}
                  style={{ marginTop: 16 }} 
                  name='url'
                  label='Adres URL kursu'
                  fullWidth
                  variant='outlined'
                  value={course.url}
                  onChange={handleInputUpdate}
                />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          )
        })}
      </Grid>
    </Grid>
  )
}

export default Course;