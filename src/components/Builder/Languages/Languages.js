import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { langSection, changeLang, addLang, deleteLang } from '../../../reducers/sectionsSlice';
import { Grid } from '@material-ui/core';
import AddButton from '../Elements/AddButton';
import Panel from '../Elements/Panel';
import Language from './Language/Language';


const Lang = () => {
  const dispatch = useDispatch();
  const userLang = useSelector(langSection);

  const handleInputEdit = (e) => {
    const elType = e.target.name;
    const key = e.target.dataset.key;
    const newState = [...userLang];
    const langData = Object.assign({}, newState[key]);

    switch(elType) {
      case 'lang':
        langData.lang = e.target.value;
        break;
      case 'desc':
        langData.desc = e.target.value;
        break;
      case 'lvl':
        langData.lvl = e.target.value;
        break;
      default:
        break; 
    }
    newState[key] = langData;
    dispatch(changeLang(newState));
  }
  const handleDeleteLang = (e) => {
    const key = e.currentTarget.dataset.key;
    const newState = [...userLang];
    newState.splice(key, 1);
    dispatch(deleteLang(newState));
  }
  const handleAddLang = () => {
    const newState = [...userLang];
    newState.push({lang: '', desc: '', lvl: '' })
    dispatch(addLang(newState));
  }
  return (
    <Grid container>
      <Grid 
        container
        justify='center'>
        <Grid item xs={10} >
          {userLang && userLang.map((lang, i) =>{
            return (
              <Panel
                key={i}
                index={i}
                heading='Język'
                name={lang.lang}
                delete={handleDeleteLang}>
                <Language 
                  index={i}
                  langValue={lang.lang}
                  lvlValue={lang.lvl}
                  descValue={lang.desc}
                  edit={handleInputEdit}/>
              </Panel>
            )
          })}
        </Grid>
      </Grid>
      <AddButton 
        bttype='język'
        click={handleAddLang} 
        />
    </Grid>
  )
}

export default Lang;