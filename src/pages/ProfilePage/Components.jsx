import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
`

export const Hero = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const HeadingWrapper = styled.div``

export const Heading = styled.h1`
    font-family: var(--font-heading);
    font-size: min(14vw, 7rem);
    font-weight: bold;
    letter-spacing: 2px;
    line-height: 1rem;
    opacity: 1;
`

export const ImageWrapper = styled.div`
    width: 100px;
    height: 140px;
    background-color: blueviolet;
    transform: rotate(15deg);
    position: absolute;
`

export const AuthorName = styled.h2`
    font-family: var(--font-latin);
    font-size: min(6vw, 3rem);
    letter-spacing: 1px;
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: rotate(-30deg) translateX(-50%);
`

export const Profile = styled(Hero)``

export const Section = styled.section``

export const Title = styled.h3``

export const Text = styled.p``

