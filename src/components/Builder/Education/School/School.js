import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { eduSection, editSchool, deleteSchool } from '../../../../reducers/sectionsSlice';
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

const School = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const edu = useSelector(eduSection);
  const [dateIndex, setDateIndex] = useState(null);

  const handleDatePickerIndex = (e) => {
    setDateIndex(e.currentTarget.dataset.key);
  }
  const handleStartDateChange = (date) => {
    const newState = [...edu];
    const eduData = Object.assign({}, newState[dateIndex]);
    eduData.startDate = date._d.toUTCString();
    newState[dateIndex] = eduData;
    dispatch(editSchool(newState));
  };
  const handleEndDateChange = (date) => {
    const newState = [...edu];
    const eduData = Object.assign({}, newState[dateIndex]);
    eduData.endDate = date._d.toUTCString();
    newState[dateIndex] = eduData;
    dispatch(editSchool(newState));
  };

  const handleInputUpdate = (e) => {
    const elType = e.target.name;
    const key = e.target.dataset.key;
    const newState = [...edu];
    const schoolData = Object.assign({}, newState[key]);
    switch(elType) {
      case 'name':
        schoolData.name = e.target.value;
        break;
      case 'city':
        schoolData.city = e.target.value;
        break;
      case 'country':
        schoolData.country = e.target.value;
        break;
      case 'degree':
        schoolData.degree = e.target.value;
        break;
      case 'field':
        schoolData.field = e.target.value;
        break;
      case 'checkbox':
        schoolData.isPresent = !schoolData.isPresent;
        break;
      case 'activities':
        schoolData.activities = e.target.value;
        break;
      case 'achievements':
        schoolData.achievements = e.target.value;
        break;
      default:
        break;
    }
    newState[key] = schoolData;
    dispatch(editSchool(newState));
  }

  const handleDelete = (e) => {
    e.stopPropagation();
    const key = e.currentTarget.dataset.key;
    const newState = [...edu];
    newState.splice(key, 1);
    dispatch(deleteSchool(newState));
  }

  return (
    <Grid 
      container
      justify='center'>
      <Grid item xs={10} >
        {edu.length > 0 && edu.map((school, i) => {
          return (
            <ExpansionPanel key={i}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreOutlined />}>
                <FormControlLabel
                  onFocus={(event) => event.stopPropagation()}
                  label={
                    <>
                      <Typography className={classes.heading}>Uczelnia {i + 1}</Typography>
                      <Typography className={classes.secondaryHeading}>{school.name}</Typography>
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
                  label='Nazwa uczelni'
                  fullWidth
                  variant='outlined'
                  value={school.name}
                  onChange={handleInputUpdate}
                  />
                <Grid
                  className={classes.wrapper} 
                  container>
                  <TextField
                    className={classes.textFieldLeft}
                    name='city'
                    inputProps={{'data-key': i}}
                    label='Miasto'
                    variant='outlined'
                    value={school.city}
                    onChange={handleInputUpdate}
                    />
                  <TextField
                    className={classes.textFieldRight}
                    name='country'
                    inputProps={{'data-key': i}}
                    label='Państwo'
                    variant='outlined'
                    value={school.country}
                    onChange={handleInputUpdate}
                    />
                </Grid>
                <Grid
                  className={classes.wrapper} 
                  container>
                  <TextField
                    className={classes.textFieldLeft}
                    name='degree'
                    inputProps={{'data-key': i}}
                    label='Stopień Naukowy'
                    variant='outlined'
                    value={school.degree}
                    onChange={handleInputUpdate}
                    />
                  <TextField
                    className={classes.textFieldRight}
                    name='field'
                    inputProps={{'data-key': i}}
                    label='Kierunek studiów'
                    variant='outlined'
                    value={school.field}
                    onChange={handleInputUpdate}
                    />
                </Grid>
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
                      value={school.startDate}
                      name='start-date'
                      onChange={handleStartDateChange}
                      onClick={handleDatePickerIndex}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                    <KeyboardDatePicker
                      data-key={i}
                      disabled={school.isPresent}
                      variant='dialog'
                      margin="normal"
                      id={"date-picker-dialog-end-" + i}
                      label="Data zakończenia"
                      format="MM/yyyy"
                      value={school.endDate}
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
                          checked={school.isPresent}
                          color="primary"
                          onChange={handleInputUpdate}
                        />
                      }
                      label="Obecnie"
                    />
                </Grid>
                <TextField
                  inputProps={{'data-key': i}}
                  name='activities'
                  style={{ marginTop: 16 }} 
                  multiline
                  rows={4}
                  rowsMax={8}
                  variant='outlined'
                  label='Dodatkowe aktywności'
                  value={school.activities}
                  onChange={handleInputUpdate}
                  />
                <TextField
                  inputProps={{'data-key': i}}
                  name='achievements'
                  style={{ marginTop: 16 }} 
                  multiline
                  rows={4}
                  rowsMax={8}
                  variant='outlined'
                  label='Osiągnięcia'
                  value={school.achievements}
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

export default School;