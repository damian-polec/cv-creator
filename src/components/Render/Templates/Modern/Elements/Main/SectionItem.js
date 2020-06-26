import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { dateFormat, subTitleFormatter } from '../../../../../../utils/helpers';

const useStyles = makeStyles((theme) => ({
  row: {
    lineHeight: 1.5,
    margin: '5px 0'
  },
  dateColumn: {
    width: '25%',
    color: '#000'
  },
  entriesColumn: {
    width: '75%',
    color: '#000'
  },
  wrapper: {
    marginTop: '2.5px'
  },
  date: {
    fontSize: '9px',
    fontWeight: 'bold'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '11px'
  },
  subTitle: {
    fontSize: '10px'
  },
  desc: {
    fontSize: '10px',
    whiteSpace: 'pre-line'
  },
  editor__paragraph: {
    fontSize: '10px',
    minHeight: '15px',
    margin: 0
  },
  editor__list: {
    fontSize: '10px',
    paddingLeft: '16px',
    margin: 0
  }
}))

const SectionItem = (props) => {
  const classes = useStyles();
  const startDate = dateFormat(props.dateStart);
  const endDate = dateFormat(props.dateEnd);
  // const title = subTitleFormatter(props.title);
  // const subtitle = subTitleFormatter(props.subtitle);
  return (
  <Grid
    className={classes.row}
    container>
    <Grid
      className={classes.dateColumn} 
      item>
        <Typography className={classes.date}>{startDate} {props.dateEnd && `- ${props.isPresent ? 'obecnie' : endDate}`}</Typography>
    </Grid>
    <Grid
      className={classes.entriesColumn}
      item>
      {props.title && <Typography className={classes.title}>{subTitleFormatter(props.title)}</Typography>}
      {props.subtitle && <Typography className={classes.subTitle}>{subTitleFormatter(props.subtitle)}</Typography>}
      <Grid className={classes.wrapper}>
        <Typography className={classes.desc}>{props.desc}</Typography>
      </Grid>
      {props.editor && <Grid className={classes.wrapper}>
        {props.editor.formatted.map((item, i) => {
          switch(item.tag) {
            case '<p>':
              return <Typography className={classes.editor__paragraph} key={`${item.tag}-${i}`}>{item.value}</Typography>
            case '<ul>':
              const listItems = item.listItems.map((li, index) => {
                return <li key={`${item.tag}-${i}-${li.tag}-${index}`}>{li.value}</li>
              });
              return (
                <ul className={classes.editor__list}>
                  {listItems}
                </ul>
              )
            default:
              return <p></p>;
          }
        })}
      </Grid>}
      <Grid className={classes.wrapper}>
        <Typography className={classes.desc}>{props.achievements}</Typography>
      </Grid>
      <Grid className={classes.wrapper}>
        <Typography className={classes.desc}>{props.url}</Typography>
      </Grid>
    </Grid>
  </Grid>
)}

export default SectionItem;

