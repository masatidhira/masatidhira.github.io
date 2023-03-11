import styled from 'styled-components';
import {
  About,
  Title,
  SummarySection,
  Contacts,
  Contact,
  SkillsList,
  Scale,
  BioSection,
} from './AboutElements';

export default function AboutSection({ id, profileData }) {
  return (
    <About id={id}>
      <Title>
        <span>{profileData.aboutTitle[0]}</span>
        <span>{profileData.aboutTitle[1]}</span>
      </Title>
      <SummarySection>
        {profileData.summary.map((array, i) => (
          <p key={i}>
            <b>{array[0]}: </b>
            {array[1]}
          </p>
        ))}
        <Contacts>
          {profileData.contacts.map((obj, i) => (
            <Contact
              key={i}
              href={obj.href}
              target="_blank"
              data-text={obj.text}
            >
              {obj.text}
            </Contact>
          ))}
        </Contacts>
      </SummarySection>
      <SkillsList>
        {profileData.skills.map((obj, i) => (
          <Scale key={i} scale={obj.scale}>
            {obj.text}
          </Scale>
        ))}
      </SkillsList>
      <BioSection>
        {profileData.bio.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </BioSection>
    </About>
  );
}
