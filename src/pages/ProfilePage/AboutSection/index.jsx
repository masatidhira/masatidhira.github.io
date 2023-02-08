import styled from "styled-components"

const AboutSection = ({id, profileData}) => {
    return (
        <About id={id}>
            <Title>{profileData.aboutTitle[0]}<br />{profileData.aboutTitle[1]}</Title>
            <SummarySection>
                {profileData.summary.map((array, i) => (
                    <p key={i}><b>{array[0]}: </b>{array[1]}</p>
                ))}
                <Contacts>
                    {profileData.contacts.map((obj, i) => (
                        <a key={i} href={obj.href}>{obj.text}</a>
                    ))}
                </Contacts>
            </SummarySection>
            <SkillSection>
                {profileData.skills.map((obj, i) => (
                    <Scale key={i} scale={obj.scale}>{obj.text}</Scale>
                ))}
            </SkillSection>
            <BioSection>
                {profileData.bio.map((text, i) => <p key={i}>{text}</p>)}
            </BioSection>
        </About>
    )
}

const About = styled.section`
    width: 100%;
    max-width: 768px;
    min-height: 100vh;
    margin: var(--nav-height) auto;
    padding: var(--nav-height) 2rem;
    display: grid;
    grid-template-columns: 1fr;
    position: relative;

    @media (min-width: 720px) {
        grid-template-rows: auto 1fr;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
    }
`

export const Title = styled.h3`
    font-family: var(--font-heading);
    font-size: 4rem;
    font-weight: bold;
    letter-spacing: 1px;
    line-height: normal;
    text-align: right;
    margin-bottom: 0;

    @media (min-width: 720px) {
        height: fit-content;
        margin-bottom: 0;
    }
`

const SummarySection = styled.section`
    margin-bottom: 2rem;
    
    p {
        font-size: 1.2rem;
    }

    @media (min-width: 720px) {
        height: fit-content;
        margin-bottom: 0;
    }
`

const Contacts = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        font-size: 1rem;
        text-decoration: underline;
    }
`

const SkillSection = styled.section`
    margin-bottom: 2rem;
`

const Scale = styled.p`
    color: var(--clr-dark);
    padding: 0 1rem;
    border: 1px solid var(--clr-light);
    position: relative;

    &:before {
        content: '';
        background-color: var(--clr-light);
        width: ${props => props.scale};
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }

    &:after {
        content: attr(scale);
        position: absolute;
        top: 0;
        right: calc(100% - ${props => props.scale} + 1rem);
    }
`

const BioSection = styled.section`
    margin-bottom: 2rem;

    p {
        font-size: 1.2rem;
    }
    @media (min-width: 720px) {
        p {
            font-size: 1rem;
        }
    }
    
`

export default AboutSection;