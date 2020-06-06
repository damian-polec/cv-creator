import React from 'react';
import styled from 'styled-components';
import MyDocument from '../Document/Document';
import { Document, Page, View, Text, StyleSheet, Font, PDFViewer } from '@react-pdf/renderer';

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

const Viewer = styled(PDFViewer)`
  width: 100%;
  height: 100vh;
`
const Render =( props ) => (
    <Viewer>
      <MyDocument />
    </Viewer>
)

export default Render;