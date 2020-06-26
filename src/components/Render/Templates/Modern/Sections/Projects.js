import React from 'react';
import Section from '../Elements/Main/Section';
import SectionItem from '../Elements/Main/SectionItem';

const Projects = (props) => {
  return(
  <Section
    title='Projekty'>
    {props.projects.map((project, i) => {
      return <SectionItem
                key={i} 
                dateStart={project.startDate}
                dateEnd={project.endDate}
                isPresent={project.isPresent}
                title={[project.name]}
                subtitle={[project.role]}
                desc={project.desc}
                url={project.url}/>
    })}
  </Section>
)}

export default Projects;