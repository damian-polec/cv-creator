import React from 'react';
import { Grid, Box, Typography, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';


const Header = (props) => {
  return (
    <Box m={1}>
      <Grid                  
        container
        direction='row'
        alignItems='center'
        spacing={2}
        justify='space-between'>
        <Typography variant='h6' color='textSecondary'>{props.title} {props.index + 1}</Typography>
        {props.data.length > 1 && 
        <IconButton 
          data-key={props.index} 
          color='secondary'
          onClick={props.delete}
          >
          <Delete />
        </IconButton>
        }
      </Grid>
    </Box>
)}

export default Header;