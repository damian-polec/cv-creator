import React from 'react';
import Section from '../Elements/Main/Section';
import SectionItem from '../Elements/Main/SectionItem';

const WorkHistory = (props) => {
  return(
  <Section
    title='Doświadczenie'>
    {props.exp.map((position, i) => {
      return <SectionItem
                key={i} 
                dateStart={position.startDate}
                dateEnd={position.endDate}
                isPresent={position.isPresent}
                title={[position.position]}
                subtitle={[position.company, position.city, position.country]}
                desc={position.companyDesc}
                editor={position.positionDesc}
                achievements={position.achievements}/>
    })}
  </Section>
)}

export default WorkHistory;