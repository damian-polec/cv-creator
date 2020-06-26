import React from 'react';
import Section from '../Elements/Side/Section';
import SectionItem from '../Elements/Side/SectionItem';

const Lang = (props) => {
  return (
    <>
      <Section
        title='Języki Obce'
        padding='10px'>
        {props.langs.map((lang, i) => {
          return <SectionItem
                    label={lang.lang}
                    key={i}
                    value={lang.desc}
                    lvl={lang.lvl} />
        })}
      </Section>
    </>
  );
}

export default Lang;