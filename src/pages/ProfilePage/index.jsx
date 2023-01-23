import { AuthorName, Container, Heading, HeadingWrapper, Hero, ImageWrapper, Image, Profile, Section, Title, Text, ScrollDown } from "./Components";
import ImgProfile from "../../assets/images/img-profile.jpeg"
import Data from "./Data"

const ProfilePage = () => {
    return(
        <Container>
            <Hero>
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
            <Profile>
                <Section>
                    <Title>{Data.introsTitle}</Title>
                    {Data.intros.map((text, i) => <Text key={i}>{text}</Text>)}
                </Section>
                <Section>
                    <Title>{Data.skillsTitle}</Title>
                    {Data.skills.map((text, i) => <Text key={i}>{text}</Text>)}
                </Section>
                <Section>
                    <Title>{Data.servicesTitle}</Title>
                    {Data.services.map((text, i) => <Text key={i}>{text}</Text>)}
                </Section>
                <Section>
                    <Title>{Data.contactsTitle}</Title>
                    {Data.contacts.map((obj, i) => (
                        <Text key={i}><a href={obj.href}>{obj.text}</a></Text>
                    ))}
                </Section>
            </Profile>
        </Container>
    )
}

export default ProfilePage;