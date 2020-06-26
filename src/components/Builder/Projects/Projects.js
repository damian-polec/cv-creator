import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { projectsSection, addProject, editProject, deleteProject } from '../../../reducers/sectionsSlice';
import { Grid } from '@material-ui/core'
import Panel from '../Elements/Panel';
import Project from './Project/Project';
import AddButton from '../Elements/AddButton';

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector(projectsSection);
  const [dateIndex, setDateIndex] = useState(null);

  const handleDatePickerIndex = (e) => {
    setDateIndex(e.currentTarget.dataset.key);
  }
  const handleStartDateChange = (date) => {
    const newState = [...projects];
    const projectsData = Object.assign({}, newState[dateIndex]);
    projectsData.startDate = date._d.toUTCString();
    newState[dateIndex] = projectsData;
    dispatch(editProject(newState));
  };
  const handleEndDateChange = (date) => {
    const newState = [...projects];
    const projectsData = Object.assign({}, newState[dateIndex]);
    projectsData.endDate = date._d.toUTCString();
    newState[dateIndex] = projectsData;
    dispatch(editProject(newState));
  };

  const handleEditProject = (e) => {
    const elType = e.target.name;
    const key = e.target.dataset.key;
    const newState = [...projects];
    const projectData = Object.assign({}, newState[key]);
    switch(elType) {
      case 'name':
        projectData.name = e.target.value;
        break;
      case 'role':
        projectData.role = e.target.value;
        break;
      case 'desc':
        projectData.desc = e.target.value;
        break;
      case 'url':
        projectData.url = e.target.value;
        break;
      case 'checkbox':
        projectData.isPresent = !projectData.isPresent;
        break;
      default:
        break;
    }
    newState[key] = projectData;
    dispatch(editProject(newState));
  }

  const handleDeleteProject = (e) => {
    e.stopPropagation();
    const key = e.currentTarget.dataset.key;
    const newState = [...projects];
    newState.splice(key, 1);
    dispatch(deleteProject(newState));
  }

  const handleAddProject = () => {
    const newState = [...projects];
    const date = new Date().toUTCString();
    const project = {
      name: '',
      role: '',
      startDate: date,
      endDate: date,
      isPresent: false,
      desc: '',
      url: '',
    }
    newState.push(project);
    dispatch(addProject(newState));
  }
  return (
    <Grid container>
      <Grid 
        container
        justify='center'>
        <Grid item xs={10} >
          {projects.length > 0 && projects.map((project, i) => {
            return (
              <Panel
                key={i}
                index={i}
                heading='Projekt'
                name={project.name}
                delete={handleDeleteProject}>
                  <Project 
                    index={i}
                    name={project.name}
                    role={project.role}
                    desc={project.desc}
                    startDate={project.startDate}
                    endDate={project.endDate}
                    isPresent={project.isPresent}
                    url={project.url}
                    edit={handleEditProject}
                    startDateHandler={handleStartDateChange}
                    endDateHandler={handleEndDateChange}
                    dateIndexPicker={handleDatePickerIndex}/>
              </Panel>
            )
          })}
        </Grid>
      </Grid>
      <AddButton 
        bttype='projekt'
        click={handleAddProject}
        />
    </Grid>
  )
}

export default Projects;