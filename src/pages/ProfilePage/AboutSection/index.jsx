import styled from "styled-components"

const AboutSection = ({id, profileData}) => {
    return (
        <About id={id}>
            <Title>
                <span>{profileData.aboutTitle[0]}</span>
                <span>{profileData.aboutTitle[1]}</span>
            </Title>
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
            <SkillsList>
                {profileData.skills.map((obj, i) => (
                    <Scale key={i} scale={obj.scale}>{obj.text}</Scale>
                ))}
            </SkillsList>
            <BioSection>
                {profileData.bio.map((text, i) => <p key={i}>{text}</p>)}
            </BioSection>
        </About>
    )
}

export const About = styled.section`
    width: 100%;
    max-width: 768px;
    margin: var(--nav-height) auto;
    padding: var(--nav-height) 2rem;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
    position: relative;

    @media (min-width: 720px) {
        grid-template-rows: auto 1fr;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
    }
`

export const Title = styled.h3`
    display: flex;
    flex-direction: column;
    font-family: var(--font-heading);
    font-size: 4rem;
    font-weight: bold;
    letter-spacing: 1px;
    line-height: normal;
    text-align: right;

    @media (min-width: 720px) {
        height: fit-content;
    }
`

const SummarySection = styled.section`
    p {
        font-size: 1.15rem;
        margin-bottom: 1rem;
    }

    @media (min-width: 720px) {
        height: fit-content;

        p {
            margin-bottom: 0.8rem;
        }
    }
`

const Contacts = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;

    a {
        font-size: 1rem;
        text-decoration: underline;
    }
`

const SkillsList = styled.ul`
    margin-top: 1rem;
    @media (min-width: 720px) {
        margin-top: 0;
    }
`

const Scale = styled.li`
    list-style: none;
    color: var(--clr-dark);
    padding: 0.2rem 1rem;
    margin-bottom: 1rem;
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
        top: 0.2rem;
        right: calc(100% - ${props => props.scale} + 1rem);
    }
`

const BioSection = styled.section`
    p {
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
    }

    @media (min-width: 720px) {
        p {
            font-size: 1rem;
        }
    }
    
`

export default AboutSection;