import React from 'react';
import Section from '../Elements/Main/Section';
import SectionItem from '../Elements/Main/SectionItem';

const Certificates = (props) => {
  return(
  <Section
    title='Certyfikaty'>
    {props.certs.map((cert, i) => {
      return <SectionItem
                key={i} 
                dateStart={cert.date}
                title={[cert.name]}/>
    })}
  </Section>
)}

export default Certificates;