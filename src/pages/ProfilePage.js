import React from "react";
import styled from "styled-components";
import {
  BannerHeading,
  BannerName,
  SectionTitle,
  SectionParagraph,
} from "../components/TextField";
import data from "../database/ProfilepageData";

const HomePage = () => {
  return (
    <Container>
      <BannerSection>
        <Banner>
          <BannerHeadingContainer>
            <BannerHeading opacity="0.8">{data.bannerHeaderText}</BannerHeading>
            <BannerHeading opacity="0.6">{data.bannerHeaderText}</BannerHeading>
            <BannerHeading opacity="0.4">{data.bannerHeaderText}</BannerHeading>
            <BannerHeading opacity="0.2">{data.bannerHeaderText}</BannerHeading>
          </BannerHeadingContainer>
          <BannerImageContainer>
            <BannerImage />
          </BannerImageContainer>
          <BannerNameContainer>
            <BannerName>{data.bannerNameText}</BannerName>
          </BannerNameContainer>
        </Banner>
      </BannerSection>
      <BioSection>
        <Profile>
          <SectionTitle>{data.introsHeading}</SectionTitle>
          {data.intros.map((text, i) => (
            <SectionParagraph key={i}>{text}</SectionParagraph>
          ))}
        </Profile>
        <Skills>
          <SectionTitle>{data.skillsHeading}</SectionTitle>
          <ul>
            {data.skills.map((text, key) => (
              <li key={key}>
                <SectionParagraph>{text}</SectionParagraph>
              </li>
            ))}
          </ul>
        </Skills>
        <Services>
          <SectionTitle>{data.servicesHeading}</SectionTitle>
          <ul>
            {data.services.map((text, key) => (
              <li key={key}>
                <SectionParagraph>{text}</SectionParagraph>
              </li>
            ))}
          </ul>
        </Services>
        <Contact>
          <SectionTitle>{data.contactsHeading}</SectionTitle>
          <ul>
            {data.contacts.map((obj, key) => (
              <li key={key}>
                <SectionParagraph>
                  <a href={obj.href} target="_blank" rel="noopener noreferrer">
                    {obj.text}
                  </a>
                </SectionParagraph>
              </li>
            ))}
          </ul>
        </Contact>
      </BioSection>
    </Container>
  );
};

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: var(--z-index-content);
`;

const BannerSection = styled.section``;

const Banner = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerHeadingContainer = styled.div`
  position: absolute;
`;

const BannerImageContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
`;

const BannerNameContainer = styled.div`
  position: absolute;
  transform: translateY(50px);
`;

const BannerImage = styled.img`
  background-color: var(--background-color);
  width: 100px;
  height: 160px;
  transform: rotate(15deg);
`;

const BioSection = styled.section`
  width: 100%;
  min-height: 100vh;
  max-width: 1080px;
  padding: 3rem var(--nav-margin) calc(var(--nav-margin) * 2);
`;

const Profile = styled.div`
  width: 100%;
  margin-bottom: 3rem;
`;

const Skills = styled.div`
  margin-bottom: 3rem;

  a:hover {
    text-decoration: underline;
  }
`;

const Services = styled(Skills)``;

const Contact = styled(Skills)``;

export default HomePage;
