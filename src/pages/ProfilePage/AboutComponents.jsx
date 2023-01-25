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

export const Scale = styled.p`
    color: var(--clr-dark);
    padding: 0 1rem;
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