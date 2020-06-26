import React from 'react';
import Section from '../../Elements/Section/Section';
import SectionItem from '../../Elements/Section/SectionItem/SectionItem';

const Hobby = (props) => {
  return (
    <>
      <Section
        title='Zainteresowania' 
        padding={props.padding}>
        {props.hobbies.map((hobby, i) => {
          return <SectionItem
                    value={hobby.name}
                    key={i}/>
        })}
      </Section>
    </>
  )
}

export default Hobby;