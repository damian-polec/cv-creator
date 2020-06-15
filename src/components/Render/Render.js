import React from 'react';
import store from '../../app/store';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
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
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from '../Document/Document';

// Font.register({ family: 'Roboto', src: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'})
// Font.register({
//   family: 'Roboto',
//   fonts: [
//     {
//       src: '/fonts/Roboto-Regular.ttf'
//     },
//   ]
// })

// const styles = StyleSheet.create({
//   page: {
//     display: 'flex',
//     flexDirection: 'row',
//   },
//   viewLeft: {
//     backgroundColor: '#005C85', 
//     width: '40%', 
//     height: '100%',
//     padding: '15px'
//   },
//   viewRight: {
//     backgroundColor: '#fff',
//     width: '100%',
//     height: '100%'
//   },
//   header: {
//     // fontFamily: 'Roboto',
//     fontSize: '20px',
//     color: '#fff',
//     fontWeight: 'bold'
//   }
// });

const Render =( props ) => {
  // const bg = useSelector(selectBg);
  const personalData = {
    firstName: useSelector(selectFirstName),
    secondName: useSelector(selectSecondName),
    lastName: useSelector(selectLastName),
    jobTitle: useSelector(selectJobTitle),
    phone: useSelector(selectPhoneNumber),
    email: useSelector(selectEmail)
  }
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
)}

export default Render;