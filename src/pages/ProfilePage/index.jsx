
import { AuthorName, Container, Heading, HeadingWrapper, Hero, ImageWrapper, Profile, Section, Title, Text } from "./Components";

const ProfilePage = () => {
    return(
        <Container>
            <Hero>
                <HeadingWrapper>
                    <Heading>PROFILE</Heading>
                    <Heading>PROFILE</Heading>
                    <Heading>PROFILE</Heading>
                    <Heading>PROFILE</Heading>
                </HeadingWrapper>
                <ImageWrapper>
                <AuthorName>Atidhira</AuthorName>
                </ImageWrapper>
            </Hero>
            <Profile>
                <Section>
                    <Title>Hello</Title>
                    <Text></Text>
                </Section>
                <Section>
                    <Title>Skills</Title>
                    <Text></Text>
                </Section>
                <Section>
                    <Title>Services</Title>
                    <Text></Text>
                </Section>
                <Section>
                    <Title>Get in touch</Title>
                    <Text></Text>
                </Section>
            </Profile>
        </Container>
    )
}

export default ProfilePage;