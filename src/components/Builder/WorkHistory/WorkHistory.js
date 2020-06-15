import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { expSection, addPosition } from '../../../reducers/sectionsSlice'
import { Grid } from '@material-ui/core';
import Position from './Position/Position';
import AddButton from '../Elements/AddButton';

const WorkHistory = (props) => {
  const dispatch = useDispatch();
  const exp = useSelector(expSection);

  const handleAddPostion = () => {
    const newState = [...exp];
    const date = new Date().toUTCString();
    const position = {
      company: '',
      city: '',
      country: '',
      position: '',
      startDate: date,
      endDate: date,
      isPresent: false,
      companyDesc: '',
      positionDesc: '',
      achievements: ''
    }
    newState.push(position);
    dispatch(addPosition(newState));
  }

  return (
    <Grid container>
      <Position />
      <AddButton 
        bttype='stanowisko'
        click={handleAddPostion}/>
    </Grid>
  )
}

export default WorkHistory;