import React from 'react';
import Section from '../../Elements/Section/Section';
import SectionItem from '../../Elements/Section/SectionItem/SectionItem';

const Skills = (props) => {
  return (
    <>
      <Section
        title='Umiejętności' 
        padding={props.padding}>
        {props.skills.map((skill, i) => {
          return <SectionItem
                    label={skill.title}
                    key={i}
                    value={skill.desc} />
        })}
      </Section>
    </>
  )
}

export default Skills;