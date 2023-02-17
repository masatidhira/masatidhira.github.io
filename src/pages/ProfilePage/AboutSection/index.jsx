import styled from "styled-components"
import { NavItem } from "../../../components/Navigation"

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
                        <Contact
                            key={i}
                            href={obj.href}
                            target="_blank"
                            data-text={obj.text}
                        >
                            {obj.text}
                        </Contact>
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
    margin: 0 auto;
    padding: calc(var(--nav-height)*2) 2rem;
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
    margin-top: 1.5rem;
`

const Contact = styled(NavItem)`
    margin: 0;
    font-size: 1rem;
`

const SkillsList = styled.ul`
    margin-top: 1rem;
    @media (min-width: 720px) {
        margin-top: 0;
    }
`

const Scale = styled.li`
    list-style: none;
    background-color: var(--clr-light);
    color: var(--clr-dark);
    padding: 0.2rem 1rem;
    margin-bottom: 1rem;
    position: relative;

    &:before {
        content: '';
        background-color: var(--clr-dark);
        width: calc(100% - ${props => props.scale} - 1px);
        height: calc(100% - 2px);
        position: absolute;
        top: 1px;
        right: 1px;
        z-index: 1;
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