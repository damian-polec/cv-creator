import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hobbySection, addHobby, editHobby, deleteHobby } from '../../../reducers/sectionsSlice';
import { Grid } from '@material-ui/core'
import Panel from '../Elements/Panel';
import Hobby from './Hobby/Hobby';
import AddButton from '../Elements/AddButton';

const Hobbies = () => {
  const dispatch = useDispatch();
  const hobbies = useSelector(hobbySection);

  const handleEditHobby = (e) => {
    const key = e.target.dataset.key;
    const newState = [...hobbies];
    const hobbyData = Object.assign({}, newState[key]);
    hobbyData.name = e.target.value;
    newState[key] = hobbyData;
    dispatch(editHobby(newState));
  }

  const handleDeleteHobby = (e) => {
    e.stopPropagation();
    const key = e.currentTarget.dataset.key;
    const newState = [...hobbies];
    newState.splice(key, 1);
    dispatch(deleteHobby(newState));
  }

  const handleAddHobby = () => {
    const newState = [...hobbies];
    const hobby = {
      name: ''
    }
    newState.push(hobby);
    dispatch(addHobby(newState));
  }
  return (
    <Grid container>
      <Grid 
        container
        justify='center'>
        <Grid item xs={10} >
          {hobbies.length > 0 && hobbies.map((hobby, i) => {
            return (
              <Panel
                key={i}
                index={i}
                heading='Hobby'
                name={hobby.name}
                delete={handleDeleteHobby}>
                  <Hobby 
                    index={i}
                    name={hobby.name}
                    edit={handleEditHobby}/>
              </Panel>
            )
          })}
        </Grid>
      </Grid>
      <AddButton 
        bttype='hobby'
        click={handleAddHobby}
        />
    </Grid>
  )
}

export default Hobbies;