import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  changePersonal, 
  personalSection 
} from '../../../reducers/sectionsSlice';
import { submit } from '../../../reducers/personalSlice';
import { Grid, TextField, Box, Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';


const Personal = () =>{
  const dispatch = useDispatch();
  const personal = useSelector(personalSection)
  // const [userData, setUserData] = useState(formData);
  const onChange = (event) => {
    const newState = [...personal];
    const index = newState.findIndex(el => el.name === event.target.name);
    const itemData = Object.assign({}, newState[index]);
    console.log(itemData);
    itemData.value = event.target.value;
    if (event.target.value.length > 0) {
      itemData.isFilled = true
    } else {
      itemData.isFilled = false
    };
    newState[index] = itemData;
    dispatch(changePersonal(newState));
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const [first, middle, last, job, phone, email] = personal;
    const personalData = {
      firstName: first.value,
      secondName: middle.value,
      lastName: last.value,
      jobTitle: job.value,
      phoneNumber: phone.value,
      email: email.value
    }
    dispatch(submit(personalData));
  };
  console.log('personal', personal);
  let formItems = null;
  if(personal){
    formItems = personal.map((item, index) => {
      return (
        <Grid
          key={item.key} 
          item 
          xs={6}>
          <TextField
            fullWidth
            label={item.label}
            variant='outlined'
            value={item.value}
            name={item.name}
            
            type={item.type}
            onChange={onChange}/>
        </Grid>
      )
    })
  }

  return(
  <Box
    m={2}>
    <form onSubmit={onSubmit}>
      <Grid 
        container
        spacing={2}>
        {formItems}
        <Grid
          container
          justify='flex-end'
          direction='row'>
          <Box p={1}>
            <Button
              type='submit'
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SaveIcon />}
            >
              Save
            </Button>  
          </Box>
        </Grid>
      </Grid>
    </form>
  </Box>
)};

export default Personal;