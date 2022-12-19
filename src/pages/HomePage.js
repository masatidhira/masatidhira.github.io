import React from "react";
import styled from "styled-components";
import {
  BannerHeading,
  BannerName,
  SectionTitle,
  SectionParagraph,
} from "../components/TextField";

const HomePage = () => {
  const profileText = [
    "My name is Atidhira Habibillah, currently a student of Informatic Engineering from Indonesia.",
    "I love to code. I've start my journey of learning to code since 2021, but i can't say that i'm an expert yet, i still have a lot of things to learn.",
    "My dream is to become a website developer and create an attractive and useful website for my client.",
    "If you need my help, or just want to say hi, feel free to contact me :)",
  ];
  const skills = ["HTML5", "CSS/SASS", "Javascript", "React", "Figma"];
  const services = [
    "Website Development",
    "Design to Website",
    "Teach you to code",
  ];
  const contact = [
    { href: "mailto:masatidhira@gmail.com", text: "Email" },
    { href: "https://www.linkedin.com/in/masatidhira98/", text: "LinkedIn" },
    { href: "https://github.com/masatidhira", text: "Github" },
    { href: "https://www.instagram.com/masatidhira/", text: "Instagram" },
    {
      href: "https://api.whatsapp.com/send?phone=6281336284354",
      text: "Whatsapp",
    },
  ];

  return (
    <Container>
      <BannerSection>
        <Banner>
          <BannerHeadingContainer>
            <BannerHeading opacity="0.8">PORTFOLIO</BannerHeading>
            <BannerHeading opacity="0.6">PORTFOLIO</BannerHeading>
            <BannerHeading opacity="0.4">PORTFOLIO</BannerHeading>
            <BannerHeading opacity="0.2">PORTFOLIO</BannerHeading>
          </BannerHeadingContainer>
          <BannerImageContainer>
            <BannerImage />
          </BannerImageContainer>
          <BannerNameContainer>
            <BannerName>Atidhira</BannerName>
          </BannerNameContainer>
        </Banner>
      </BannerSection>
      <BioSection>
        <Profile>
          <SectionTitle>Hello</SectionTitle>
          {profileText.map((text) => (
            <SectionParagraph>{text}</SectionParagraph>
          ))}
        </Profile>
        <Skills>
          <SectionTitle>Skills that i have</SectionTitle>
          <ul>
            {skills.map((text, key) => (
              <li key={key}>
                <SectionParagraph>{text}</SectionParagraph>
              </li>
            ))}
          </ul>
        </Skills>
        <Services>
          <SectionTitle>Services that i offer</SectionTitle>
          <ul>
            {services.map((text, key) => (
              <li key={key}>
                <SectionParagraph>{text}</SectionParagraph>
              </li>
            ))}
          </ul>
        </Services>
        <Contact>
          <SectionTitle>Get in touch</SectionTitle>
          <ul>
            {contact.map((obj, key) => (
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
