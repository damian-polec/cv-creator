import React from 'react';
import Section from '../Elements/Side/Section';
import SectionItem from '../Elements/Side/SectionItem';

const Skills = (props) => (
  <>
    <Section
      title='Umiejętności'
      padding='10px'>
        {props.skills.map((skill, i) => {
          return <SectionItem 
                    key={i}
                    label={skill.title}
                    value={skill.desc}/>
        })} 
    </Section>
  </>
);


export default Skills;