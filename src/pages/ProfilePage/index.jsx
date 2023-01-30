import { Container, Heading, HeadingWrapper, Hero, ImageWrapper, Image, AuthorName, ScrollDown } from "./HeroComponents";
import { AboutSection, SummarySection, SkillSection, BioSection, Title, Scale, Contacts } from "./AboutComponents";
import { Card, WorkDate, WorkName, Works, WorkTag } from "./WorksComponents"
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
                <Title>{Data.aboutTitle[0]}<br />{Data.aboutTitle[1]}</Title>
                <SummarySection>
                    {Data.summary.map((array, i) => (
                        <p key={i}><b>{array[0]}: </b>{array[1]}</p>
                    ))}
                    <Contacts>
                        {Data.contacts.map((obj, i) => (
                            <a key={i} href={obj.href}>{obj.text}</a>
                        ))}
                    </Contacts>
                </SummarySection>
                <SkillSection>
                    {Data.skills.map((obj, i) => (
                        <Scale key={i} scale={obj.scale}>{obj.text}</Scale>
                    ))}
                </SkillSection>
                <BioSection>
                    {Data.bio.map((text, i) => <p key={i}>{text}</p>)}
                </BioSection>
            </AboutSection>
            <Works id="works">
                <Title>WORKS</Title>
                {Data.works.map((work, i) => (
                    <Card key={i}>
                        <WorkDate>{work.date}</WorkDate>
                        <WorkName>{work.name}</WorkName>
                        <WorkTag>{work.tags.map(tag => "#" + tag + " ")}</WorkTag>    
                    </Card>
                ))}
            </Works>
        </Container>
    )
}

export default ProfilePage;