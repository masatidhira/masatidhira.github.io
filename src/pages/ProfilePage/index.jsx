import { AuthorName, Container, Heading, HeadingWrapper, Hero, ImageWrapper, Image, ScrollDown } from "./HeroComponents";
import { About, Section, Title, Text } from "./AboutComponents";
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
            <About id="about">
                <Section>
                    <Title>{Data.introsTitle}</Title>
                    {Data.intros.map((text, i) => <Text key={i}>{text}</Text>)}
                </Section>
                <Section>
                    <Title>{Data.skillsTitle}</Title>
                    {Data.skills.map((text, i) => <Text key={i}>{text}</Text>)}
                </Section>
                <Section>
                    <Title>{Data.contactsTitle}</Title>
                    {Data.contacts.map((obj, i) => (
                        <Text key={i}><a href={obj.href}>{obj.text}</a></Text>
                    ))}
                </Section>
            </About>
            <Works id="works">

            </Works>
        </Container>
    )
}

export default ProfilePage;