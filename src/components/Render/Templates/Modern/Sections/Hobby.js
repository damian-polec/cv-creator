import React from 'react';
import Section from '../Elements/Side/Section';
import SectionItem from '../Elements/Side/SectionItem';

const Hobby = (props) => {
  return (
    <>
      <Section
        title='Zainteresowania'
        padding='10px'>
        {props.hobbies.map((hobby, i) => {
          return <SectionItem
                    key={i}
                    value={hobby.name}/>
        })}
      </Section>
    </>
  );
}

export default Hobby;