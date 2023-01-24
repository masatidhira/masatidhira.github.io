import styled from "styled-components"

export const AboutSection = styled.section`
    width: 100%;
    max-width: 768px;
    min-height: 100vh;
    margin: var(--nav-height) auto;
    padding: var(--nav-height) 3rem;
    display: grid;
    grid-template-columns: 1fr;
    position: relative;

    @media (min-width: 720px) {
        grid-template-columns: 1fr 1fr;
        padding: var(--nav-height) 4rem;
    }
`

export const BioSection = styled.section`
    margin-bottom: 3rem;

    @media (min-width: 720px) {
        grid-column: span 2;
    }
    
`

export const SkillSection = styled.section`
    margin-bottom: 3rem;
`

export const ContactSection = styled.section`
    margin-bottom: 3rem;
    
    @media (min-width: 720px) {
        text-align: right;
    }
`

export const Title = styled.h3`
    font-family: var(--font-heading);
    font-size: 1.5rem;
    letter-spacing: 1px;
`

export const Text = styled.p``