import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSkills, addSkill, deleteSkill } from '../../../reducers/sectionsSlice'
import { Grid, Box, TextField, Typography, Button, IconButton, makeStyles } from '@material-ui/core';
import { AddCircleOutline, Delete } from '@material-ui/icons';
import { skillsSection } from '../../../reducers/sectionsSlice';

const useStyles = makeStyles((theme) => ({
  skillFormItem: {
    backgroundColor: '#F4F4F4'
  },
  input: {
    background: '#fff'
  },
  deleteButton: {
    marginLeft: 'auto'
  }
}))

const Skills = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const userSkills = useSelector(skillsSection);

  const onChange = (e) => {
    const elType = e.target.localName;
    const key = e.target.dataset.key;
    const newState = [...userSkills];
    const skillData = Object.assign({}, newState[key]);

    if(elType === 'input') {
      skillData.title = e.target.value;
    } else {
      skillData.desc = e.target.value;
    }
    newState[key] = skillData;
    dispatch(changeSkills(newState))
  } 

  const onAddSkill = () => {
    const newState = [...userSkills];
    newState.push({title: '', desc: ''})
    dispatch(addSkill(newState));
  }

  const onDeleteSkill = (e) => {
    const key = e.target.dataset.key;
    const newState = [...userSkills];
    newState.splice(key, 1);
    dispatch(deleteSkill(newState));
  }
  return (
    <Box m={2}>
      <Grid className={classes.skillFormItem} container>
        {userSkills && userSkills.map((skill, i) => {
          return (
            <Grid
              key={i} 
              item 
              xs={12}
              bgcolor='secondary'>
              <Box m={2}>
                <Grid
                  container
                  direction='row'
                  alignItems='center'>
                  <Typography variant='h6' color='textSecondary'>Umiejętność {i + 1}</Typography>
                  {userSkills.length > 1 && 
                  <IconButton 
                    className={classes.deleteButton} 
                    color='secondary'
                    inputProps={{'data-key': i}}
                    onClick={onDeleteSkill}>
                    <Delete />
                  </IconButton>
                  }
                </Grid>
              </Box>
              <Box m={2} className={classes.input}>
                <TextField
                  inputProps={{'data-key': i}}
                  fullWidth
                  label='Nazwa umiejętności'
                  variant='outlined'
                  value={skill.title} 
                  type='text'
                  onChange={onChange}/>
              </Box>
              <Box m={2} className={classes.input}>
                <TextField
                  inputProps={{'data-key': i}}
                  multiline
                  rows={4}
                  rowsMax={8}
                  fullWidth
                  label='Opis umiejętności'
                  variant='outlined' 
                  value={skill.desc}
                  onChange={onChange}/>
              </Box>
            </Grid>
          )
        } )}
        <Grid
          container
          justify='flex-end'
          direction='row'>
          <Box p={1}>
            <Button
              variant='contained'
              color='primary'
              startIcon={<AddCircleOutline/>}
              onClick={onAddSkill}>Dodaj umiejętność</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Skills;