import React from 'react';
import Section from '../Elements/Main/Section';
import SectionItem from '../Elements/Main/SectionItem';

const Courses = (props) => {
  return(
  <Section
    title='Kursy'>
    {props.courses.map((course, i) => {
      return <SectionItem
                key={i} 
                dateStart={course.startDate}
                dateEnd={course.endDate}
                isPresent={course.isPresent}
                title={[course.name]}
                subtitle={[course.organizer]}
                desc={course.desc}
                url={course.url}/>
    })}
  </Section>
)}

export default Courses;