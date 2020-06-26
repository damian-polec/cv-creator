import React from 'react';
import { useSelector } from 'react-redux'
import { Grid, Paper, Typography, makeStyles } from '@material-ui/core';
import { 
  personalSection, 
  skillsSection,
  langSection,
  hobbySection,
  expSection,
  eduSection,
  coursesSection,
  certSection,
  projectsSection,
  clauseSection } from '../../../../reducers/sectionsSlice';
import Personal from './Sections/Personal';
import Skills from './Sections/Skills';
import Lang from './Sections/Lang';
import Hobby from './Sections/Hobby';
import WorkHistory from './Sections/WorkHistory';
import Education from './Sections/Education';
import Courses from './Sections/Courses';
import Certificates from './Sections/Certificates';
import Projects from './Sections/Projects';

const useStyles = makeStyles((theme) => ({
  page: {
    fontFamily: 'Roboto',
    width: '595px',
    height: '842px',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#fff'
  },
  container: {
    height: 'inherit'
  },
  side: {
    width: '33%',
    backgroundColor: '#005C85'
  },
  main: {
    position: 'relative',
    width: '66%'
  },
  clause: {
    color: '#000',
    padding: '10px',
    position: "absolute",
    bottom: 0 
  },
  clauseText: {
    fontSize: '8px'
  }
})); 

const Modern = () => {
  const classes = useStyles();
  const personalData = useSelector(personalSection);
  const skillsData = useSelector(skillsSection);
  const langsData = useSelector(langSection);
  const hobbyData = useSelector(hobbySection);
  const expData = useSelector(expSection);
  const eduData = useSelector(eduSection);
  const coursesData = useSelector(coursesSection);
  const certsData = useSelector(certSection);
  const projectsData = useSelector(projectsSection);
  const clause = useSelector(clauseSection);
  
  const personal = personalData.filter(item => {
    return item.group === 'personal'
  }).reduce((object, item) => {
    object[item.name] = {value: `${item.value} `, isFilled: item.isFilled};
    return object
  }, {});

  const contact = personalData.filter(item => {
    return item.isFilled && item.group === 'contact'
  });
  return (
    <Paper 
      className={classes.page}
      square
      elevation={3}>
      <Grid
        className={classes.container} 
        container>
        <Grid
          className={classes.side} 
          item>
          <Personal 
            personal={personal}
            contact={contact}/>
          <Skills 
            skills={skillsData}/>
          <Lang 
            langs={langsData}/>
          <Hobby 
            hobbies={hobbyData}/>
        </Grid>
        <Grid
          className={classes.main}
          item>
          <WorkHistory 
            exp={expData}/>
          <Education 
            edu={eduData}/>
          <Courses 
            courses={coursesData}/>
          <Certificates 
            certs={certsData}/>
          <Projects 
            projects={projectsData}/>
          <Grid className={classes.clause}>
            <Typography className={classes.clauseText}>{clause}</Typography>
          </Grid>
        </Grid>
      </Grid>  
    </Paper>
  )
}

export default Modern;