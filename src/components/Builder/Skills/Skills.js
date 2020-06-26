import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { skillsSection , changeSkills, addSkill, deleteSkill } from '../../../reducers/sectionsSlice'
import { Grid } from '@material-ui/core';
import AddButton from '../Elements/AddButton';
import Panel from '../Elements/Panel';
import Skill from './Skill/Skill';


const Skills = () => {
  const dispatch = useDispatch();
  const userSkills = useSelector(skillsSection);

  const handleEditSkill = (e) => {
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

  const handleAddSkill = () => {
    const newState = [...userSkills];
    newState.push({title: '', desc: ''})
    dispatch(addSkill(newState));
  }

  const handleDeleteSkill = (e) => {
    const key = e.currentTarget.dataset.key;
    const newState = [...userSkills];
    newState.splice(key, 1);
    dispatch(deleteSkill(newState));
  }
  return (
    <Grid container>
      <Grid 
        container
        justify='center'>
        <Grid item xs={10} >
          {userSkills.length > 0 && userSkills.map((skill, i) => {
            return (
              <Panel
                key={i}
                index={i}
                heading='Umiejętność'
                name={skill.title}
                delete={handleDeleteSkill}>
                <Skill 
                  index={i}
                  titleValue={skill.title}
                  descValue={skill.descValue}
                  edit={handleEditSkill}/>
              </Panel>
            )
          })}
        </Grid>
      </Grid>
      <AddButton
        bttype='umiejętność'
        click={handleAddSkill} />
    </Grid>
  )
}

export default Skills;