import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { certSection, addCert, editCert, deleteCert } from '../../../reducers/sectionsSlice';
import { Grid } from '@material-ui/core';
import Panel from '../Elements/Panel';
import Certificate from './Certificate/Certificate';
import AddButton from '../Elements/AddButton';

const Certificates = () => {
  const dispatch = useDispatch();
  const certs = useSelector(certSection);
  const [dateIndex, setDateIndex] = useState(null);

  const handleDatePickerIndex = (e) => {
    setDateIndex(e.currentTarget.dataset.key);
  }
  const handleDateChange = (date) => {
    if(!date) {
      return;
    }
    const newState = [...certs];
    const certData = Object.assign({}, newState[dateIndex]);
    certData.date = date._d.toUTCString();
    newState[dateIndex] = certData;
    dispatch(editCert(newState));
  };

  const handleEditCert = (e) => {
    const key = e.target.dataset.key;
    const newState = [...certs];
    const certData = Object.assign({}, newState[key]);
    certData.name = e.target.value;
    newState[key] = certData;
    dispatch(editCert(newState));
  }

  const handleDeleteCert = (e) => {
    e.stopPropagation();
    const key = e.currentTarget.dataset.key;
    const newState = [...certs];
    newState.splice(key, 1);
    dispatch(deleteCert(newState));
  }

  const handleAddCert = () => {
    const newState = [...certs];
    const date = new Date().toUTCString();
    const cert = {
      name: '',
      date: date
    }
    newState.push(cert);
    dispatch(addCert(newState));
  }
  return (
    <Grid container>
      <Grid 
        container
        justify='center'>
        <Grid item xs={10} >
          {certs.length > 0 && certs.map((cert, i) => {
            return (
              <Panel
                key={i}
                index={i}
                heading='Certyfikat'
                name={cert.name}
                delete={handleDeleteCert}>
                  <Certificate
                    index={i} 
                    name={cert.name}
                    date={cert.date}
                    edit={handleEditCert}
                    handleDate={handleDateChange}
                    handleIndex={handleDatePickerIndex}/>
              </Panel>
            )
          })}
        </Grid>
      </Grid>
      <AddButton 
        bttype='certyfikat'
        click={handleAddCert}
        />
    </Grid>
  )
}

export default Certificates;