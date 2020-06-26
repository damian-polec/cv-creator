import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSchool, editSchool, deleteSchool, eduSection } from '../../../reducers/sectionsSlice';
import { Grid } from '@material-ui/core'
import Panel from '../Elements/Panel';
import School from './School/School';
import AddButton from '../Elements/AddButton';

const Education = () => {
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

  const handleEditSchool = (e) => {
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

  const handleDeleteSchool = (e) => {
    e.stopPropagation();
    const key = e.currentTarget.dataset.key;
    const newState = [...edu];
    newState.splice(key, 1);
    dispatch(deleteSchool(newState));
  };

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
  };
  return (
    <Grid container>
      <Grid 
        container
        justify='center'>
        <Grid item xs={10} >
          {edu.length > 0 && edu.map((school, i) => {
            return (
              <Panel
                key={i}
                index={i}
                heading='Uczelnia'
                name={school.name}
                delete={handleDeleteSchool}>
                <School
                  index={i} 
                  name={school.name}
                  city={school.city}
                  country={school.country}
                  degree={school.degree}
                  field={school.field}
                  startDate={school.startDate}
                  endDate={school.endDate}
                  isPresent={school.isPresent}
                  activities={school.activities}
                  achievements={school.achievements}
                  edit={handleEditSchool}
                  startDateHandler={handleStartDateChange}
                  endDateHandler={handleEndDateChange}
                  dateIndexPicker={handleDatePickerIndex}
                  />
              </Panel>
            )
          })}
        </Grid>
      </Grid>
      <AddButton 
        bttype='uczelnie'
        click={handleAddSchool}
        />
    </Grid>
  )
}

export default Education;