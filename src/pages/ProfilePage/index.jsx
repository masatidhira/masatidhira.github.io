import styled from "styled-components";
import Data from "./Data"
import HeroSection from "./HeroSection"
import AboutSection from "./AboutSection"
import WorksSection from "./WorksSection"

const ProfilePage = () => {
    return(
        <Container>
            <HeroSection id="hero" profileData={Data}/>
            <AboutSection id="about" profileData={Data}/>
            <WorksSection id="works" profileData={Data} />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
`

export default ProfilePage;