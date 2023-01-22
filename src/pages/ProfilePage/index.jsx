import { AuthorName, Container, Heading, HeadingWrapper, Hero, ImageWrapper, Image, Profile, Section, Title, Text } from "./Components";
import ImgProfile from "../../assets/images/img-profile.jpeg";

const ProfilePage = () => {
    return(
        <Container>
            <Hero>
                <HeadingWrapper>
                    <Heading isTop={true}>PROFILE</Heading>
                    <Heading>PROFILE</Heading>
                    <Heading>PROFILE</Heading>
                    <Heading>PROFILE</Heading>
                </HeadingWrapper>
                <ImageWrapper>
                    <Image src={ImgProfile} />
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