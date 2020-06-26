import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { expSection, addPosition, deletePosition, changePosition } from '../../../reducers/sectionsSlice'
import { Grid } from '@material-ui/core';
import Panel from '../Elements/Panel';
import Position from './Position/Position';
import AddButton from '../Elements/AddButton';
import { stringToArray } from '../../../utils/helpers';

const WorkHistory = (props) => {
  const dispatch = useDispatch();
  const exp = useSelector(expSection);
  const [dateIndex, setDateIndex] = useState(null);

  const handleDatePickerIndex = (e) => {
    setDateIndex(e.currentTarget.dataset.key);
  }
  const handleStartDateChange = (date) => {
    const newState = [...exp];
    const posData = Object.assign({}, newState[dateIndex]);
    posData.startDate = date._d.toUTCString();
    newState[dateIndex] = posData;
    dispatch(changePosition(newState));
  };
  const handleEndDateChange = (date) => {
    const newState = [...exp];
    const posData = Object.assign({}, newState[dateIndex]);
    posData.endDate = date._d.toUTCString();
    newState[dateIndex] = posData;
    dispatch(changePosition(newState));
  };

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
      positionDesc: {
        raw: '<p>Opis Stanowiska</p>',
        formatted: []
      },
      achievements: ''
    }
    newState.push(position);
    dispatch(addPosition(newState));
  };

  const handleDeletePosition = (e) => {
    e.stopPropagation();
    const key = e.currentTarget.dataset.key;
    const newState = [...exp];
    newState.splice(key, 1);
    dispatch(deletePosition(newState));
  };
  const handleEditPosition = (e) => {
    const elType = e.target.name;
    const key = e.target.dataset.key;
    const newState = [...exp];
    const posData = Object.assign({}, newState[key]);
    switch(elType) {
      case 'company':
        posData.company = e.target.value;
        break;
      case 'city':
        posData.city = e.target.value;
        break;
      case 'country':
        posData.country = e.target.value;
        break;
      case 'position':
        posData.position = e.target.value;
        break;
      case 'checkbox':
        posData.isPresent = !posData.isPresent;
        break;
      case 'companyDesc':
        posData.companyDesc = e.target.value;
        break;
      case 'positionDesc':
        posData.positionDesc = e.target.value;
        break;
      case 'achievements':
        posData.achievements = e.target.value;
        break;
      default:
        break;
    }
    newState[key] = posData;
    dispatch(changePosition(newState));
  };
  const handleEditorChange = (content, editor) => {
    const [key] = editor.id.match(/\d+/g);
    const newState = [...exp];
    const formattedText = stringToArray(content);
    console.log(formattedText);
    const posData = Object.assign({}, newState[key]);
    posData.positionDesc = {
      raw: content,
      formatted: formattedText
    }
    newState[key] = posData;
    dispatch(changePosition(newState));
  }


  return (
    <Grid container>
      <Grid 
        container
        justify='center'>
        <Grid item xs={10} >
          {exp.length > 0 && exp.map((position, i) => {
            return (
              <Panel
                key={i}
                index={i}
                heading='Stanowisko'
                name={position.company}
                delete={handleDeletePosition}>
                <Position
                  index={i}
                  edit={handleEditPosition}
                  startDateHandler={handleStartDateChange}
                  endDateHandler={handleEndDateChange}
                  indexPickerHandler={handleDatePickerIndex}
                  handleEditorChange={handleEditorChange}
                  company={position.company}
                  city={position.city}
                  country={position.country}
                  position={position.position}
                  startdate={position.startDate}
                  endDate={position.endDate}
                  isPresent={position.isPresent}
                  companyDesc={position.companyDesc}
                  positionDesc={position.positionDesc}
                  achievements={position.achievements} />
              </Panel>
            )
          })}
        </Grid>
      </Grid>
      <AddButton 
        bttype='stanowisko'
        click={handleAddPostion}/>
    </Grid>
  )
}

export default WorkHistory;