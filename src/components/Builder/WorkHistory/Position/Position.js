import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
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
import { expSection, deletePosition, changePosition } from '../../../../reducers/sectionsSlice';

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



const Position = (props) => {
  const classes = useStyles();
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
  const handleInputUpdate = (e) => {
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
  }
  const handleDelete = (e) => {
    e.stopPropagation();
    const key = e.currentTarget.dataset.key;
    const newState = [...exp];
    newState.splice(key, 1);
    dispatch(deletePosition(newState));
  }

  return(
    <Grid 
      container
      justify='center'>
      <Grid item xs={10} >
        {exp.length > 0 && exp.map((pos, i) => {
          return (
            <ExpansionPanel key={i}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreOutlined />}>
                <FormControlLabel
                  onFocus={(event) => event.stopPropagation()}
                  label={
                    <>
                      <Typography className={classes.heading}>Stanowisko {i + 1}</Typography>
                      <Typography className={classes.secondaryHeading}>{pos.company}</Typography>
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
                  name='company'
                  label='Nazwa firmy'
                  fullWidth
                  variant='outlined'
                  value={pos.company}
                  onChange={handleInputUpdate}/>
                <Grid
                  className={classes.wrapper} 
                  container>
                  <TextField
                    className={classes.textFieldLeft}
                    name='city'
                    inputProps={{'data-key': i}}
                    label='Miasto'
                    variant='outlined'
                    value={pos.city}
                    onChange={handleInputUpdate}/>
                  <TextField
                    className={classes.textFieldRight}
                    name='country'
                    inputProps={{'data-key': i}}
                    label='Państwo'
                    variant='outlined'
                    value={pos.country}
                    onChange={handleInputUpdate}/>
                </Grid>
                <TextField
                  className={classes.wrapper}
                  name='position'
                  inputProps={{'data-key': i}}
                  label='Stanowisko'
                  fullWidth
                  variant='outlined'
                  value={pos.position}
                  onChange={handleInputUpdate}/>
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
                      value={pos.startDate}
                      name='start-date'
                      onChange={handleStartDateChange}
                      onClick={handleDatePickerIndex}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                    <KeyboardDatePicker
                      data-key={i}
                      disabled={pos.isPresent}
                      variant='dialog'
                      margin="normal"
                      id={"date-picker-dialog-end-" + i}
                      label="Data zakończenia"
                      format="MM/yyyy"
                      value={pos.endDate}
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
                          checked={pos.isPresent}
                          color="primary"
                          onChange={handleInputUpdate}
                        />
                      }
                      label="Obecnie"
                    />
                </Grid>
                <TextField
                  inputProps={{'data-key': i}}
                  name='companyDesc'
                  style={{ marginTop: 16 }} 
                  multiline
                  rows={4}
                  rowsMax={8}
                  variant='outlined'
                  label='Opis firmy'
                  value={pos.companyDesc}
                  onChange={handleInputUpdate}/>
                <TextField
                  inputProps={{'data-key': i}}
                  name='positionDesc'
                  style={{ marginTop: 16 }} 
                  multiline
                  rows={4}
                  rowsMax={8}
                  variant='outlined'
                  label='Opis stanowiska'
                  value={pos.positionDesc}
                  onChange={handleInputUpdate}/>
                <TextField
                  inputProps={{'data-key': i}}
                  name='achievements'
                  style={{ marginTop: 16 }} 
                  multiline
                  rows={4}
                  rowsMax={8}
                  variant='outlined'
                  label='Osiągnięcia'
                  value={pos.achievements}
                  onChange={handleInputUpdate}/>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          )
        })}
      </Grid>
    </Grid>
)}

export default Position