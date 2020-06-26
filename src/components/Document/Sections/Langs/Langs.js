import React from 'react';
import Section from '../../Elements/Section/Section';
import SectionItem from '../../Elements/Section/SectionItem/SectionItem';

const Langs = (props) => {
  return (
    <>
      <Section
        title='Języki Obce' 
        padding={props.padding}>
        {props.langs.map((lang, i) => {
          return <SectionItem
                    label={lang.lang}
                    key={i}
                    value={lang.desc}
                    lvl={lang.lvl} />
        })}
      </Section>
    </>
  )
}

export default Langs;