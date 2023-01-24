import styled, { keyframes } from "styled-components"

const lineAnimation = keyframes`
    0% { height: 100%; }
    50% { height: 0%; }
    100% { height: 0%; }
`

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
    color: ${prop => prop.isTop ? "var(--clr-light)" : "transparent"};
    font-family: var(--font-heading);
    font-size: min(18vw, 7rem);
    letter-spacing: 5px;
    line-height: 0.5rem;
    opacity: ${prop => prop.isTop ? "1" : "0.5"};
    -webkit-text-stroke: 1px var(--clr-light);
`

export const ImageWrapper = styled.div`
    width: 7rem;
    height: 10rem;
    transform: rotate(10deg);
    position: absolute;

    @media (min-width: 480px) {
        width: 9rem;
        height: 12rem;
    }

    @media (min-width: 768px) {
        width: 10rem;
        height: 14rem;
    }   
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    background-color: var(--clr-semi-light);
    object-fit: cover;
    filter: grayscale(100%);
`

export const AuthorName = styled.h2`
    font-family: var(--font-latin);
    font-size: min(6vw, 2.5rem);
    letter-spacing: 1px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: rotate(-30deg) translateX(-50%);
`

export const ScrollDown = styled.div`
    background-color: var(--clr-light);
    width: 1px;
    height: 150px;
    position: absolute;
    bottom: -2rem;
    opacity: 0.5;

    ::before, ::after {
        content: "";
        width: 10px;
        background-color: var(--clr-dark);
        position: absolute;
        left: -50%;
        transform: translateX(-50%) rotate(180deg);
        animation: ${lineAnimation} 2.5s linear infinite;
    }

    ::before {
        height: 0;
        bottom: 0;
    }

    ::after {
        height: 100%;
        top: 0;
        animation-direction: reverse;
    }
`