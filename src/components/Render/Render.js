import React from 'react';
import store from '../../app/store';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import { Grid, Paper, makeStyles } from '@material-ui/core'
import { 
  selectFirstName,
  selectSecondName,
  selectLastName,
  selectJobTitle,
  selectPhoneNumber,
  selectEmail
 } from '../../reducers/personalSlice';
//  import {
//   selectBg
//  } from '../../reducers/docStylesSlice';
import Modern from './Templates/Modern/Modern';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from '../Document/Document';

const useStyles = makeStyles((theme) => ({
  render: {
    backgroundColor: '#525659'
  },
  wrapper: {
    minHeight: '100vh'
  },
  page: {
    width: '595px',
    height: '842px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})) 

const Render =( props ) => {
  const classes = useStyles()
  const personalData = {
    firstName: useSelector(selectFirstName),
    secondName: useSelector(selectSecondName),
    lastName: useSelector(selectLastName),
    jobTitle: useSelector(selectJobTitle),
    phone: useSelector(selectPhoneNumber),
    email: useSelector(selectEmail)
  }
  return (
    <Grid className={classes.render} item xs={6}>
      <Grid
        className={classes.wrapper} 
        container
        justify='center'
        alignItems='center'>
        <Modern />
      </Grid>
      <PDFDownloadLink 
        document={
          <Provider store={store}>
            <MyDocument 
              userData={personalData}/>  
          </Provider>
            } fileName='test.pdf'>
          
        {({ url, loading }) => {
          if(loading) {
            return <div>Loading</div>
          }
          if(!loading && url) {
            return <button href={url} target="_blank">test</button>
          }
        }}
      </PDFDownloadLink>
    </Grid>
  )

  return (
    <>
      <PDFDownloadLink 
        document={
          <Provider store={store}>
            <MyDocument 
              userData={personalData}/>  
          </Provider>
            } fileName='test.pdf'>
          
        {({ url, loading }) => {
          if(loading) {
            return <div>Loading</div>
          }
          if(!loading && url) {
            return <button href={url} target="_blank">test</button>
          }
        }}
      </PDFDownloadLink>
    </>
)
}

export default Render;