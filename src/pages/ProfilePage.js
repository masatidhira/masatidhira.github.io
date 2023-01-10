import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BannerHeading,
  BannerName,
  SectionTitle,
  SectionParagraph,
} from "../components/TextField";
import data from "../database/ProfilepageData";

const HomePage = () => {
  gsap.registerPlugin(ScrollTrigger);
  let [app, heading, img, name, bio] = Array(5).fill(useRef(null));

  useEffect(() => {
    gsap.to(app, { duration: 0, css: { visibility: "visible" } });

    // Heading animation
    gsap.from(heading.children, {
      y: "75%",
      opacity: 0,
      ease: Power3.easeOut,
      delay: 0.2,
      stagger: 0.2,
    });

    // Image and name animation
    gsap.from([img, name], {
      y: "-20%",
      opacity: 0,
      ease: Power3.easeOut,
      delay: 1.2,
      stagger: 0.5,
    });

    // Bio text animation
    for (let el of bio.children) {
      gsap.from(el.children, {
        scrollTrigger: {
          trigger: el.children[1],
          start: "top 90%",
        },
        y: "50%",
        opacity: 0,
        ease: Power3.easeOut,
        delay: 0.2,
        stagger: 0.3,
      });
    }
  }, []);

  return (
    <Container
      ref={(elm) => {
        app = elm;
      }}
    >
      <BannerSection>
        <Banner>
          <BannerHeadingContainer
            ref={(elm) => {
              heading = elm;
            }}
          >
            <BannerHeading opacity="1">{data.bannerHeaderText}</BannerHeading>
            <BannerHeading opacity="0.7">{data.bannerHeaderText}</BannerHeading>
            <BannerHeading opacity="0.5">{data.bannerHeaderText}</BannerHeading>
            <BannerHeading opacity="0.3">{data.bannerHeaderText}</BannerHeading>
          </BannerHeadingContainer>
          <BannerImageContainer
            ref={(elm) => {
              img = elm;
            }}
          >
            <BannerImage />
          </BannerImageContainer>
          <BannerNameContainer
            ref={(elm) => {
              name = elm;
            }}
          >
            <BannerName>{data.bannerNameText}</BannerName>
          </BannerNameContainer>
        </Banner>
      </BannerSection>
      <BioSection ref={(elm) => (bio = elm)}>
        <Profile>
          <SectionTitle>{data.introsHeading}</SectionTitle>
          {data.intros.map((text, i) => (
            <SectionParagraph key={i}>{text}</SectionParagraph>
          ))}
        </Profile>
        <Skills>
          <SectionTitle>{data.skillsHeading}</SectionTitle>
          {data.skills.map((text, i) => (
            <SectionParagraph key={i}>{text}</SectionParagraph>
          ))}
        </Skills>
        <Services>
          <SectionTitle>{data.servicesHeading}</SectionTitle>

          {data.services.map((text, i) => (
            <SectionParagraph key={i}>{text}</SectionParagraph>
          ))}
        </Services>
        <Contact>
          <SectionTitle>{data.contactsHeading}</SectionTitle>
          {data.contacts.map((obj, i) => (
            <SectionParagraph key={i}>
              <a href={obj.href} target="_blank" rel="noopener noreferrer">
                {obj.text}
              </a>
            </SectionParagraph>
          ))}
        </Contact>
      </BioSection>
    </Container>
  );
};

export const Container = styled.div`
  visibility: none;
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
