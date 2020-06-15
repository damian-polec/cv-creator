import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSkills, addSkill, deleteSkill } from '../../../reducers/sectionsSlice'
import { Grid, Box, TextField, makeStyles } from '@material-ui/core';
import { skillsSection } from '../../../reducers/sectionsSlice';
import Header from '../Elements/Header';
import AddButton from '../Elements/AddButton';

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
    const key = e.currentTarget.dataset.key;
    const newState = [...userSkills];
    newState.splice(key, 1);
    dispatch(deleteSkill(newState));
  }
  return (
    <Box m={2}>
      <Grid className={classes.skillFormItem} container spacing={2}>
        {userSkills && userSkills.map((skill, i) => {
          return (
            <Grid
              key={i} 
              item
              xs={12}>
              <Header 
                title='Umiejętność'
                index={i}
                data={userSkills}
                delete={onDeleteSkill}/>  
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
        <AddButton
          bttype='umiejętność'
          click={onAddSkill} />
      </Grid>
    </Box>
  )
}

export default Skills;