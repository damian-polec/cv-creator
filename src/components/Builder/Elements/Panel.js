import React from 'react';
import { 
  ExpansionPanel, 
  ExpansionPanelDetails, 
  ExpansionPanelSummary,
  Typography,
  FormControlLabel,
  IconButton,
  makeStyles } from '@material-ui/core';
import { ExpandMoreOutlined, Delete } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  panelDetails: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const Panel = (props) => {
  const classes = useStyles();
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreOutlined />}>
        <FormControlLabel
          onFocus={(event) => event.stopPropagation()}
          label={
            <>
              <Typography className={classes.heading}>{props.heading} {props.index + 1}</Typography>
              <Typography className={classes.secondaryHeading}>{props.name}</Typography>
            </>
          } 
          control={
            <IconButton 
              data-key={props.index} 
              color='secondary'
              onClick={props.delete}
              >
              <Delete />
            </IconButton>
          }/>  
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.panelDetails}>
        {props.children}
      </ExpansionPanelDetails>
    </ExpansionPanel>
)}

export default Panel;