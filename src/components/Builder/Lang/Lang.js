import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { langSection, changeLang, addLang, deleteLang } from '../../../reducers/sectionsSlice';
import { Box, Grid, TextField, makeStyles } from '@material-ui/core';
import Header from '../Elements/Header';
import AddButton from '../Elements/AddButton';

const useStyles = makeStyles((theme) => ({
  FormItem: {
    backgroundColor: '#F4F4F4'
  },
  input: {
    background: '#fff'
  },
  deleteButton: {
    marginLeft: 'auto'
  }
}))

const Lang = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userLang = useSelector(langSection);

  const onChange = (e) => {
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
  const onDelete = (e) => {
    const key = e.currentTarget.dataset.key;
    const newState = [...userLang];
    newState.splice(key, 1);
    dispatch(deleteLang(newState));
  }
  const onAdd = () => {
    const newState = [...userLang];
    newState.push({lang: '', desc: '', lvl: '' })
    dispatch(addLang(newState));
  }
  return (
    <Box m={2}>
      <Grid className={classes.FormItem} container spacing={2}>
        {userLang && userLang.map((item, i) => {
          return (
            <Grid item xs={12} bgcolor='secondary' key={i}>
              <Header 
                title='Język'
                data={userLang}
                index={i}
                delete={onDelete}/>
              <Box m={2}>
                <Grid container spacing={2}>
                  <Grid 
                    item 
                    xs={10}>
                    <TextField
                      className={classes.input}
                      fullWidth
                      inputProps={{'data-key': i}}
                      name={Object.keys(item)[0]}
                      value={item.lang}
                      label='Język'
                      variant='outlined'
                      onChange={onChange}/>
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      className={classes.input}
                      inputProps={{'data-key': i}} 
                      name={Object.keys(item)[2]}
                      fullWidth
                      value={item.lvl}
                      label='Poziom'
                      variant='outlined'
                      onChange={onChange}/>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      className={classes.input}
                      inputProps={{'data-key': i}}
                      name={Object.keys(item)[1]}
                      value={item.desc}
                      multiline
                      rows={4}
                      rowsMax={8}
                      fullWidth
                      label='Opis'
                      variant='outlined'
                      onChange={onChange}/>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          )
        })}
        <AddButton 
          bttype='język'
          click={onAdd}/>
      </Grid>
    </Box>
  )
}

export default Lang;