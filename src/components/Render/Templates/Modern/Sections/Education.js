import React from 'react';
import Section from '../Elements/Main/Section';
import SectionItem from '../Elements/Main/SectionItem';

const Education = (props) => {
  return(
  <Section
    title='Wykształcenie'>
    {props.edu.map((school, i) => {
      return <SectionItem
                key={i} 
                dateStart={school.startDate}
                dateEnd={school.endDate}
                isPresent={school.isPresent}
                title={[school.name, school.city, school.country]}
                subtitle={[school.degree, school.field]}
                desc={school.activities}
                achievements={school.achievements}/>
    })}
  </Section>
)}

export default Education;