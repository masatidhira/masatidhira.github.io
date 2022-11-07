import React from "react";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Container>
      <BannerSection>
        <Banner>
          <h1>
            <span>WEBSITE</span>
            <span>DEVELOPER</span>
            <p>Based in Indonesia</p>
          </h1>
          <BannerImage></BannerImage>
          <h2>
            <span>Atidhira</span>
            <span>Habibillah</span>
          </h2>
        </Banner>
        <ScrollIcon>scroll down</ScrollIcon>
      </BannerSection>
      <BioSection>
        <Profile>
          <h3>Hello!</h3>
          <p>
            My name is Atidhira Habibillah, currently a student of Informatic
            Engineering from Indonesia.
          </p>
          <p>
            I love to code. I've start my journey of learning to code since
            2021, but i can't say that i'm an expert yet, i still have a lot of
            things to learn.
          </p>
          <p>
            My dream is to become a website developer and create an attractive
            and useful website for my client.
          </p>
          <p>
            If you need my help, or just want to say hi, feel free to contact me
            :)
          </p>
        </Profile>
        <Skills>
          <h3>Skills that i have</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS / SASS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Figma</li>
          </ul>
        </Skills>
        <Services>
          <h3>Services that i offer</h3>
          <ul>
            <li>Website Development</li>
            <li>Design to Website</li>
            <li>Teach you to code</li>
          </ul>
        </Services>
        <Contact>
          <h3>Get in touch</h3>
          <ul>
            <li>
              <a href="mailto:masatidhira@gmail.com">Email</a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/masatidhira98/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/masatidhira"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/masatidhira/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=6281336284354"
                target="_blank"
                rel="noopener noreferrer"
              >
                Whatsapp
              </a>
            </li>
          </ul>
        </Contact>
      </BioSection>
    </Container>
  );
};

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: var(--z-index-content);
`;

const BannerSection = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 var(--nav-margin);
`;

const Banner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h1,
  h2 {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  h1 {
    font-family: var(--font-heading) !important;
    letter-spacing: 2px;
    margin: 2rem 0;

    span {
      font-size: 3.2rem;
      margin-top: 1rem;
    }

    p {
      font-size: 13px;
      text-align: right;
    }
  }

  h2 {
    font-family: var(--font-latin) !important;
    font-size: 1.5rem;
    letter-spacing: 3px;
    line-height: 3rem;
    text-align: right;
    transform: rotate(-20deg);
  }
`;

const BannerImage = styled.div`
  width: 65vw;
  height: 40vw;
  max-width: 325px;
  max-height: 200px;
  background-color: royalblue;
`;

const ScrollIcon = styled.div`
  position: absolute;
  bottom: 12px;
  left: 0;
  width: 100%;
  font-size: 0.6rem;
  color: gray;
  text-align: center;
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

  h3 {
    font-family: var(--font-heading);
    font-size: var(--fs-medium);
    margin-bottom: 2rem;
  }

  p {
    font-family: var(--font-text-reguler);
    font-size: var(--fs-reguler);
    margin-bottom: 1rem;
    line-height: 1.8rem;
  }
`;

const Skills = styled.div`
  margin-bottom: 3rem;

  h3 {
    font-family: var(--font-heading);
    font-size: var(--fs-medium);
    margin-bottom: 1rem;
  }

  li {
    list-style: none;
    font-family: var(--font-text-reguler);
    font-size: var(--fs-reguler);
    margin-bottom: 0.8rem;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Services = styled(Skills)``;

const Contact = styled(Skills)``;

export default HomePage;
