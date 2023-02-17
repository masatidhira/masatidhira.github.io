import styled, { keyframes } from "styled-components"
import ImgProfile from "../../../assets/images/img-profile.jpeg"

const HeroSection = ({id, profileData}) => {
    return (
        <Hero id={id}>
            <HeadingWrapper>
                <Heading isTop={true}>{profileData.headingText}</Heading>
                <Heading>{profileData.headingText}</Heading>
                <Heading>{profileData.headingText}</Heading>
                <Heading>{profileData.headingText}</Heading>
                <ScrollDown />
            </HeadingWrapper>
            <ImageWrapper>
                <Image src={ImgProfile} />
                <AuthorName>{profileData.authorName}</AuthorName>
            </ImageWrapper>
        </Hero>
    )
}

const lineAnimation = keyframes`
    0% { height: 100%; }
    50% { height: 0%; }
    100% { height: 0%; }
`

const Hero = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`

const HeadingWrapper = styled.div`
    position: relative;
`

const Heading = styled.h1`
    height: 1em;
    color: ${prop => prop.isTop ? "var(--clr-light)" : "transparent"};
    font-family: var(--font-heading);
    font-size: min(20vw, 9rem);
    font-weight: normal;
    letter-spacing: 5px;
    -webkit-text-stroke: 1px var(--clr-light);
    opacity: ${prop => prop.isTop ? "1" : "0.5"};
    transform: translateY(50%);
`

const ImageWrapper = styled.div`
    width: 9rem;
    height: 12rem;
    transform: rotate(10deg);
    position: absolute;

    @media (min-width: 480px) {
        width: 11rem;
        height: 14rem;
    }

    @media (min-width: 768px) {
        width: 12rem;
        height: 16rem;
    }   
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    background-color: var(--clr-semi-light);
    object-fit: cover;
    filter: grayscale(100%);
`

const AuthorName = styled.h2`
    font-family: var(--font-latin);
    font-size: min(6vw, 2.5rem);
    letter-spacing: 1px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: rotate(-30deg) translateX(-50%);
`

const ScrollDown = styled.div`
    background-color: var(--clr-light);
    width: 1px;
    height: 120px;
    opacity: 0.5;
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translate(100%, 100%);

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

export default HeroSection;