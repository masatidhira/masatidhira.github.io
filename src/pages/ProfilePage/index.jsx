import { Container, Heading, HeadingWrapper, Hero, ImageWrapper, Image, AuthorName, ScrollDown } from "./HeroComponents";
import { AboutSection, BioSection, SkillSection, ContactSection, Title, Text, Scale } from "./AboutComponents";
import { Works } from "./WorksComponents"
import ImgProfile from "../../assets/images/img-profile.jpeg"
import Data from "./Data"

const ProfilePage = () => {
    
    return(
        <Container>
            <Hero id="home">
                <HeadingWrapper>
                    <Heading isTop={true}>{Data.headingText}</Heading>
                    <Heading>{Data.headingText}</Heading>
                    <Heading>{Data.headingText}</Heading>
                    <Heading>{Data.headingText}</Heading>
                </HeadingWrapper>
                <ImageWrapper>
                    <Image src={ImgProfile} />
                    <AuthorName>{Data.authorName}</AuthorName>
                </ImageWrapper>
                <ScrollDown />
            </Hero>
            <AboutSection id="about">
                <BioSection>
                    <Title>{Data.introsTitle}</Title>
                    {Data.intros.map((text, i) => <Text key={i}>{text}</Text>)}
                </BioSection>
                <SkillSection>
                    <Title>{Data.skillsTitle}</Title>
                    {Data.skills.map((obj, i) => (
                    <Scale key={i} scale={obj.scale}>{obj.text}</Scale>
                    ))}
                </SkillSection>
                <ContactSection>
                    <Title>{Data.contactsTitle}</Title>
                    {Data.contacts.map((obj, i) => (
                        <Text key={i}><a href={obj.href}>{obj.text}</a></Text>
                    ))}
                </ContactSection>
            </AboutSection>
            <Works id="works">

            </Works>
        </Container>
    )
}

export default ProfilePage;